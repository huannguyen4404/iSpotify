import { SongContextState, SongReducerAction, SongReducerActionType } from '@/types'

export const songReducer = (
  state: SongContextState,
  action: SongReducerAction
): SongContextState => {
  const { type, payload } = action
  switch (type) {
    case SongReducerActionType.SetDevice:
      return {
        ...state,
        deviceId: payload.deviceId,
        volume: payload.volume,
      }

    case SongReducerActionType.ToggleIsPlaying:
      return {
        ...state,
        isPlaying: payload,
      }

    case SongReducerActionType.SetCurrentPlayingSong:
      const { isPlaying, selectedSong, selectedSongId } = payload

      return {
        ...state,
        isPlaying,
        selectedSong,
        selectedSongId,
      }

    case SongReducerActionType.SetVolume:
      return {
        ...state,
        volume: payload,
      }

    default:
      return state
  }
}
