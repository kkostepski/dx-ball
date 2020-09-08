import { dispatch, getState } from './redux'
import { drawBricks } from 'modules/bricks/bricks.utils'
import { createBricks } from 'modules/bricks/bricks.redux'
import {
  setPosition,
  getRadius,
  getPosition,
  getSpeed,
  getMovingDirection,
  setMovingDirection,
  getSize,
} from 'modules/ball/ball.redux'
import { drawBall } from 'modules/ball/ball.utils'
import { LEVEL_1 } from 'config/levels'

const canvas = <HTMLCanvasElement>document.getElementById('arkanoid')
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')

if (!canvas) {
  throw new Error('No canvas found!')
}

dispatch(createBricks(LEVEL_1))
const bricks = getState().bricks
drawBricks(ctx, bricks)

dispatch(setPosition({ x: canvas.width / 2, y: canvas.height - 30 }))

const moveBall = () => {
  const { x, y } = getPosition(getState())
  const ballSpeed = getSpeed(getState())
  const ballMovingDirection = getMovingDirection(getState())
  const ballRadius = getRadius(getState())

  const nextBallPositionX = x + ballSpeed * ballMovingDirection.x
  const nextBallPositionY = y + ballSpeed * ballMovingDirection.y

  const isPassedRightEdge = nextBallPositionX > canvas.width - ballRadius
  const isPassedLeftEdge = nextBallPositionX < ballRadius
  const isPassedBottomEdge = nextBallPositionY > canvas.height - ballRadius
  const isPassedTopEdge = nextBallPositionY < ballRadius

  if (isPassedRightEdge || isPassedLeftEdge) {
    dispatch(
      setMovingDirection({
        x: -ballMovingDirection.x,
      })
    )
  }

  if (isPassedBottomEdge || isPassedTopEdge) {
    dispatch(
      setMovingDirection({
        y: -ballMovingDirection.y,
      })
    )
  }

  dispatch(
    setPosition({
      x: nextBallPositionX,
      y: nextBallPositionY,
    })
  )
}

const drawGame = () => {
  const ballSize = getSize(getState())
  const ballPosition = getPosition(getState())
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  drawBricks(ctx, bricks)
  drawBall(ctx, {
    size: ballSize,
    position: { x: ballPosition.x, y: ballPosition.y },
  })
  moveBall()

  requestAnimationFrame(drawGame)
}

drawGame()
