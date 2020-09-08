import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'

import { RootStateModel } from 'init/redux'
import {
  BallStateModel,
  ActionSetPositionModel,
  BALL_SPEED_INITIAL,
  BALL_SPEED_MINIMUM,
  BALL_SPEED_MAXIMUM,
  BALL_SIZE_INITIAL,
  BALL_SIZE_MINIMUM,
  BALL_SIZE_MAXIMUM,
  BALL_COUNT_INITIAL,
  BALL_IS_PASSING_BRICKS,
  BALL_IS_FIERY,
  ActionSetMovingDirectionModel,
} from './ball.model'

const initialState: BallStateModel = {
  speed: BALL_SPEED_INITIAL,
  size: BALL_SIZE_INITIAL,
  count: BALL_COUNT_INITIAL,
  isPassingBricks: BALL_IS_PASSING_BRICKS,
  isFiery: BALL_IS_FIERY,
  position: {
    x: 0,
    y: 0,
  },
  movingDirection: {
    x: 1,
    y: -1,
  },
}

const ballSlice = createSlice({
  name: 'ball',
  initialState,
  reducers: {
    setPosition(
      state: BallStateModel,
      action: PayloadAction<ActionSetPositionModel>
    ) {
      const { x, y } = action.payload

      if (x) {
        state.position.x = x
      }

      if (y) {
        state.position.y = y
      }
    },
    setMovingDirection(
      state: BallStateModel,
      action: PayloadAction<ActionSetMovingDirectionModel>
    ) {
      const { x, y } = action.payload

      if (x) {
        state.movingDirection.x = x
      }

      if (y) {
        state.movingDirection.y = y
      }
    },
    increaseSpeed(state: BallStateModel) {
      const speed = state.speed + 1

      if (speed >= BALL_SPEED_MAXIMUM) {
        state.speed = BALL_SPEED_MAXIMUM
      } else {
        state.speed = speed
      }
    },
    decreaseSpeed(state: BallStateModel) {
      const speed = state.speed - 1

      if (speed <= BALL_SPEED_MINIMUM) {
        state.speed = BALL_SPEED_MINIMUM
      } else {
        state.speed = speed
      }
    },
    increaseSize(state: BallStateModel) {
      const size = state.size + 1

      if (size >= BALL_SIZE_MAXIMUM) {
        state.size = BALL_SIZE_MAXIMUM
      } else {
        state.size = size
      }
    },
    decreaseSizeToMinimum(state: BallStateModel) {
      state.size = BALL_SIZE_MINIMUM
    },
    increaseCount(state: BallStateModel) {
      state.count *= 2
    },
    toggleIsPassingBricks(
      state: BallStateModel,
      action: PayloadAction<boolean>
    ) {
      state.isPassingBricks = action.payload
    },
    toggleIsFiery(state: BallStateModel, action: PayloadAction<boolean>) {
      state.isFiery = action.payload
    },
  },
})

const getSize = (state: RootStateModel): BallStateModel['size'] =>
  state.ball.size
const getRadius = createSelector(getSize, (size) => size * 2)
const getPosition = (state: RootStateModel): BallStateModel['position'] => ({
  x: state.ball.position.x,
  y: state.ball.position.y,
})
const getMovingDirection = (
  state: RootStateModel
): BallStateModel['movingDirection'] => ({
  x: state.ball.movingDirection.x,
  y: state.ball.movingDirection.y,
})
const getSpeed = (state: RootStateModel): BallStateModel['speed'] =>
  state.ball.speed

export { getSize, getRadius, getPosition, getMovingDirection, getSpeed }

export const {
  setPosition,
  setMovingDirection,
  increaseSpeed,
  decreaseSpeed,
  increaseSize,
  decreaseSizeToMinimum,
  increaseCount,
  toggleIsPassingBricks,
  toggleIsFiery,
} = ballSlice.actions
export default ballSlice.reducer
