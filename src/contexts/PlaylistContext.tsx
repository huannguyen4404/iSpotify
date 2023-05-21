import { useSpotify } from '@/hooks/useSpotify'
import { IPlaylistContext, PlaylistContextState } from '@/types'
import { useSession } from 'next-auth/react'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

const defaultPlaylistContextState: PlaylistContextState = {
  playlists: [],
  selectedPlaylistId: null,
  selectedPlaylist: null,
}

export const PlaylistContext = createContext<IPlaylistContext>({
  playlistContextState: defaultPlaylistContextState,
  updatePlaylistContextState: () => {},
})

export const usePlaylistContext = () => useContext(PlaylistContext)

const PlaylistContextProvider = ({ children }: { children: ReactNode }) => {
  const spotifyApi = useSpotify()
  const { data: session } = useSession()
  const [playlistContextState, setPlaylistContextState] = useState(defaultPlaylistContextState)

  const updatePlaylistContextState = (updatedObj: Partial<PlaylistContextState>) => {
    setPlaylistContextState((previosPlaylistContextState) => ({
      ...previosPlaylistContextState,
      ...updatedObj,
    }))
  }

  useEffect(() => {
    const getUserPlaylists = async () => {
      const userPlaylistResp = await spotifyApi.getUserPlaylists()
      updatePlaylistContextState({ playlists: userPlaylistResp.body.items })
    }

    if (spotifyApi.getAccessToken()) {
      getUserPlaylists()
    }
  }, [session, spotifyApi])

  const playlistCxtProviderData = {
    playlistContextState,
    updatePlaylistContextState,
  }

  return (
    <PlaylistContext.Provider value={playlistCxtProviderData}>{children}</PlaylistContext.Provider>
  )
}

export default PlaylistContextProvider
