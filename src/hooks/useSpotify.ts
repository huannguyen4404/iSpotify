import { spotifyApi } from '@/services/spotify'
import { TokenError } from '@/types'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export const useSpotify = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) return

    // when refresh token failed => re-signin
    if (session.error === TokenError.RefreshAccessTokenError) {
      signIn()
    }

    spotifyApi.setAccessToken(session.accessToken)
  }, [session])

  return spotifyApi
}
