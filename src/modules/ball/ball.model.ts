export type BallStateModel = {
  speed: number
  size: number
  count: number
  isPassingBricks: boolean
  isFiery: boolean
  position: {
    x: number
    y: number
  }
  movingDirection: {
    x: number
    y: number
  }
}

export type ActionSetPositionModel = {
  x?: number
  y?: number
}
export type ActionSetMovingDirectionModel = {
  x?: number
  y?: number
}

export const BALL_SPEED_INITIAL = 5
export const BALL_SPEED_MINIMUM = 1
export const BALL_SPEED_MAXIMUM = 1
export const BALL_SIZE_INITIAL = 3
export const BALL_SIZE_MINIMUM = 2
export const BALL_SIZE_MAXIMUM = 6
export const BALL_COUNT_INITIAL = 1
export const BALL_IS_PASSING_BRICKS = false
export const BALL_IS_FIERY = false
