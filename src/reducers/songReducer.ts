import { SongContextState, SongReducerAction, SongReducerActionType } from '@/types'

export const songReducer = (state: SongContextState, action: SongReducerAction) => {
  const { type, payload } = action
  switch (type) {
    case SongReducerActionType.SetDevice:
      return {
        ...state,
        deviceId: payload.deviceId,
        volume: payload.volume,
      }

    default:
      return state
  }
}
