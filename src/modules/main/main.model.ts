import { PaddleStateModel } from 'modules/paddle/paddle.model'
import { PlayerStateModel } from 'modules/player/player.model'
import { BallStateModel } from 'modules/ball/ball.model'
import { BrickStateModel } from 'modules/bricks/bricks.model'

export type GameStateModel = {
  paddle: PaddleStateModel
  player: PlayerStateModel
  ball: BallStateModel
  bricks: ((BrickStateModel | null)[] | null)[]
}

export const LIVES_COUNT = 3
export const PLAYER_NAME = 'Konrad'
