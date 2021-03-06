export enum BRICK_TYPE {
  RED = 'RED',
  DARK_BLUE = 'DARK_BLUE',
  GREEN = 'GREEN',
  DARK_GREEN = 'DARK_GREEN',
  VIOLET = 'VIOLET',
  BROWN = 'BROWN',
  CYAN = 'CYAN',
  BLUE = 'BLUE',
  ORANGE = 'ORANGE',
  MAGENTA = 'MAGENTA',
  PINK = 'PINK',
  DARK_PINK = 'DARK_PINK',
  TURQUOISE = 'TURQUOISE',
  INDESTRUCTIBLE_YELLOW = 'INDESTRUCTIBLE_YELLOW',
  INDESTRUCTIBLE_PINK = 'INDESTRUCTIBLE_PINK',
  INVISIBLE = 'INVISIBLE',
  ILLUMINATED = 'ILLUMINATED',
  SPECIAL_PINK = 'SPECIAL_PINK',
  SPECIAL_BLACK_LIGHT = 'SPECIAL_BLACK_LIGHT',
  SPECIAL_BLACK_MEDIUM = 'SPECIAL_BLACK_MEDIUM',
  SPECIAL_BLACK_DARK = 'SPECIAL_BLACK_DARK',
}

export enum BONUS_TYPE {
  PADDLE_INCREASE_SIZE = 'PADDLE_INCREASE_SIZE',
  PADDLE_DECREASE_SIZE = 'PADDLE_DECREASE_SIZE',
  PADDLE_DECREASE_SIZE_MAX = 'PADDLE_DECREASE_SIZE_MAX',
  PADDLE_GUN = 'PADDLE_GUN',
  PADDLE_MAGNETIC = 'PADDLE_MAGNETIC',

  BALL_FIERY = 'BALL_FIERY',
  BALL_INCECREASE_SPEED_MAX = 'BALL_INCECREASE_SPEED_MAX',
  BALL_DECREASE_SPEED = 'BALL_DECREASE_SPEED',
  BALL_DECREASE_SIZE_MAX = 'BALL_DECREASE_SIZE_MAX',
  BALL_PASSING_BRICKS = 'BALL_PASSING_BRICKS',
  BALL_DOUBLE = 'BALL_DOUBLE',

  DYNAMITE = 'DYNAMITE',
  WEAK_BRICKS = 'WEAK_BRICKS',
  INCREASE_ILLUMINATED_BRICKS = 'INCREASE_ILLUMINATED_BRICKS',
  REDUCE_BRICKS_HEIGHT = 'REDUCE_BRICKS_HEIGHT',

  EXTRA_LIFE = 'EXTRA_LIFE',
  NEXT_LEVEL = 'NEXT_LEVEL',
  DEATH = 'DEATH',
}

type BricksImageSpriteMapModel = { [key in BRICK_TYPE]: [number, number] }

export const BRICK_WIDTH_SPRITE = 30
export const BRICK_HEIGHT_SPRITE = 15
export const BRICK_WIDTH = 60
export const BRICK_HEIGHT = 30
export const BRICK_PADDING = 1
export const BRICK_OFFSET_TOP = 60
export const BRICK_OFFSET_LEFT = 30

export const bricksImageSpriteMap: BricksImageSpriteMapModel = {
  [BRICK_TYPE.RED]: [0, 0],
  [BRICK_TYPE.DARK_BLUE]: [0, 16],
  [BRICK_TYPE.GREEN]: [0, 32],
  [BRICK_TYPE.INDESTRUCTIBLE_YELLOW]: [31, 0],
  [BRICK_TYPE.VIOLET]: [31, 16],
  [BRICK_TYPE.BROWN]: [31, 32],
  [BRICK_TYPE.SPECIAL_BLACK_LIGHT]: [62, 0],
  [BRICK_TYPE.CYAN]: [62, 16],
  [BRICK_TYPE.INDESTRUCTIBLE_PINK]: [62, 32],
  [BRICK_TYPE.SPECIAL_BLACK_MEDIUM]: [93, 0],
  [BRICK_TYPE.ORANGE]: [93, 16],
  [BRICK_TYPE.BLUE]: [93, 32],
  [BRICK_TYPE.SPECIAL_BLACK_DARK]: [124, 0],
  [BRICK_TYPE.MAGENTA]: [124, 16],
  [BRICK_TYPE.ILLUMINATED]: [124, 32],
  [BRICK_TYPE.SPECIAL_PINK]: [155, 0],
  [BRICK_TYPE.PINK]: [155, 16],
  [BRICK_TYPE.DARK_GREEN]: [186, 0],
  [BRICK_TYPE.DARK_PINK]: [186, 16],
  [BRICK_TYPE.TURQUOISE]: [217, 16],
  [BRICK_TYPE.INVISIBLE]: [310, 0],
}

export type BrickStateModel = {
  type: BRICK_TYPE
  bonus: BONUS_TYPE | null
  position: {
    x: number
    y: number
  }
}

export type BricksStateModel = (BrickStateModel | null)[][]
