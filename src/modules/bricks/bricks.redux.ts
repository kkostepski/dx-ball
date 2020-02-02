import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  BRICK_TYPE,
  BONUS_TYPE,
  BricksStateModel,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_OFFSET_LEFT,
} from './bricks.model'

const initialState: BricksStateModel = []

const bricksSlice = createSlice({
  name: 'bricks',
  initialState,
  reducers: {
    createBricks(
      state: BricksStateModel,
      action: PayloadAction<(BRICK_TYPE | null)[][]>
    ) {
      const bricks = action.payload
      const bonuses = Object.values(BONUS_TYPE)

      for (let column = 0; column < bricks.length; column++) {
        state[column] = []

        for (let row = 0; row < bricks[column].length; row++) {
          const brickType = bricks[column][row]
          state[column][row] = brickType
            ? {
                type: brickType,
                bonus: bonuses[random(0, bonuses.length - 1)],
                position: {
                  x: row * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT,
                  y:
                    column * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_LEFT,
                },
              }
            : null
        }
      }
    },
  },
})

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const { createBricks } = bricksSlice.actions
export default bricksSlice.reducer
