import { BRICK_TYPE } from 'modules/bricks/bricks.model'

export const LEVEL_1: (BRICK_TYPE | null)[][] = [
  [
    null,
    BRICK_TYPE.GREEN,
    BRICK_TYPE.RED,
    BRICK_TYPE.DARK_BLUE,
    BRICK_TYPE.RED,
  ],
  [
    BRICK_TYPE.GREEN,
    null,
    BRICK_TYPE.INDESTRUCTIBLE_YELLOW,
    BRICK_TYPE.VIOLET,
    BRICK_TYPE.BROWN,
  ],
]
