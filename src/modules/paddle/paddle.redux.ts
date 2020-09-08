import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  PaddleStateModel,
  PADDLE_SIZE_INITIAL,
  PADDLE_SIZE_MINIMUM,
  PADDLE_SIZE_MAXIMUM,
  PADDLE_POSITION,
  PADDLE_HAS_GUNS,
  PADDLE_IS_MAGNETIC,
} from './paddle.model'

type ActionMoveToPositionPayloadModel = {
  position: number
}

const initialState: PaddleStateModel = {
  size: PADDLE_SIZE_INITIAL,
  position: PADDLE_POSITION,
  hasGuns: PADDLE_HAS_GUNS,
  isMagnetic: PADDLE_IS_MAGNETIC,
}

const paddleSlice = createSlice({
  name: 'paddle',
  initialState,
  reducers: {
    increaseSize(state: PaddleStateModel) {
      const size = state.size + 10

      if (size >= PADDLE_SIZE_MAXIMUM) {
        state.size = PADDLE_SIZE_MAXIMUM
      } else {
        state.size = size
      }
    },
    decreaseSize(state: PaddleStateModel) {
      const size = state.size - 10

      if (size <= PADDLE_SIZE_MINIMUM) {
        state.size = PADDLE_SIZE_MINIMUM
      } else {
        state.size = size
      }
    },
    decreaseSizeToMinimum(state: PaddleStateModel) {
      state.size = PADDLE_SIZE_MINIMUM
    },
    moveLeft(state: PaddleStateModel) {
      state.position -= 10
    },
    moveRight(state: PaddleStateModel) {
      state.position += 10
    },
    moveToPosition(
      state: PaddleStateModel,
      action: PayloadAction<ActionMoveToPositionPayloadModel>
    ) {
      const { position } = action.payload
      state.position = position
    },
    toggleHasGuns(state: PaddleStateModel, action: PayloadAction<boolean>) {
      state.hasGuns = action.payload
    },
    toggleIsMagnetic(state: PaddleStateModel, action: PayloadAction<boolean>) {
      state.isMagnetic = action.payload
    },
  },
})

export const {
  increaseSize,
  decreaseSize,
  decreaseSizeToMinimum,
  moveLeft,
  moveRight,
  moveToPosition,
  toggleHasGuns,
  toggleIsMagnetic,
} = paddleSlice.actions
export default paddleSlice.reducer
