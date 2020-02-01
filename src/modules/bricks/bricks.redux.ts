import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  BRICK_TYPE,
  BONUS_TYPE,
  BrickStateModel,
  BricksStateModel,
} from './bricks.model'

const ballSlice = createSlice({
  name: 'bricks',
  initialState: [] as BricksStateModel,
  reducers: {
    createBricks(
      state: BricksStateModel,
      action: PayloadAction<BRICK_TYPE[][]>
    ) {
      const bricks = action.payload

      for (let column = 0; column < bricks.length; column++) {
        state[column] = []

        for (let row = 0; row < bricks[column].length; row++) {
          const brickType = bricks[row][column];
          state[row][column] = {
            type: brickType,
            bonus: null,
          }
        }
      }
    },
  },
})

export const {} = ballSlice.actions
export default ballSlice.reducer
