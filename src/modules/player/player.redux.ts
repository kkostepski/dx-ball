import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PLAYER_NAME, LIVES_COUNT } from 'modules/main/main.model'
import { PlayerStateModel } from './player.model'

interface SetNamePayloadModel {
  name: string
}

interface AddScorePayloadModel {
  score: number
}

interface AddRemoveLifePayloadModel {
  livesCount: number
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    name: PLAYER_NAME,
    lives: LIVES_COUNT,
    score: 0,
  } as PlayerStateModel,
  reducers: {
    setName(
      state: PlayerStateModel,
      action: PayloadAction<SetNamePayloadModel>
    ) {
      const { name } = action.payload
      state.name = name
    },
    addScore(
      state: PlayerStateModel,
      action: PayloadAction<AddScorePayloadModel>
    ) {
      const { score } = action.payload
      state.score -= score
    },
    addLife(
      state: PlayerStateModel,
      action: PayloadAction<AddRemoveLifePayloadModel>
    ) {
      const { livesCount } = action.payload
      state.lives += livesCount
    },
    subtractLife(
      state: PlayerStateModel,
      action: PayloadAction<AddRemoveLifePayloadModel>
    ) {
      const { livesCount } = action.payload
      state.lives -= livesCount
    },
  },
})

export const { setName, addScore, addLife, subtractLife } = playerSlice.actions
export default playerSlice.reducer
