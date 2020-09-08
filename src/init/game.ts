import { dispatch, getState } from './redux'
import { createBricks } from 'modules/bricks/bricks.redux'
import { LEVEL_1 } from 'config/levels'
import {
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_WIDTH_SPRITE,
  BRICK_HEIGHT_SPRITE,
  bricksImageSpriteMap,
} from 'modules/bricks/bricks.model'
import {
  setPosition,
  getRadius,
  getPosition,
  getSpeed,
  getMovingDirection,
  setMovingDirection,
} from 'modules/ball/ball.redux'
import bricksImageSprite from 'assets/images/bricks.png'

dispatch(createBricks(LEVEL_1))

const canvas = <HTMLCanvasElement>document.getElementById('arkanoid')
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')

if (!canvas) {
  throw new Error('No canvas found!')
}

const bricksImage = new Image(340, 47)
bricksImage.src = bricksImageSprite

const drawBricks = () => {
  const bricks = getState().bricks

  bricks.forEach((columns) => {
    columns.forEach((brick) => {
      if (brick != null) {
        const [x, y] = bricksImageSpriteMap[brick.type]
        const canvasPosition = [x, y, BRICK_WIDTH_SPRITE, BRICK_HEIGHT_SPRITE]

        ctx.drawImage(
          bricksImage,
          canvasPosition[0],
          canvasPosition[1],
          canvasPosition[2],
          canvasPosition[3],
          brick.position.x,
          brick.position.y,
          BRICK_WIDTH,
          BRICK_HEIGHT
        )
      }
    })
  })
}

dispatch(setPosition({ x: canvas.width / 2, y: canvas.height - 30 }))

const drawBall = () => {
  const ballRadius = getRadius(getState())
  const { x, y } = getPosition(getState())

  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

const moveBall = () => {
  const { x, y } = getPosition(getState())
  const ballSpeed = getSpeed(getState())
  const ballMovingDirection = getMovingDirection(getState())
  const ballRadius = getRadius(getState())

  const nextBallPositionX = (x + ballSpeed) * ballMovingDirection.x
  const nextBallPositionY = (y + ballSpeed) * ballMovingDirection.y

  const isTouchingRightEdge = nextBallPositionX > canvas.width - ballRadius
  const isTouchingLeftEdge = nextBallPositionX < ballRadius
  const isTouchingBottomEdge = nextBallPositionY > canvas.height - ballRadius
  const isTouchingTopEdge = nextBallPositionY < ballRadius

  if (isTouchingRightEdge || isTouchingLeftEdge) {
    dispatch(
      setMovingDirection({
        x: -ballMovingDirection.x,
      })
    )
  }

  if (isTouchingBottomEdge || isTouchingTopEdge) {
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
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  drawBricks()
  drawBall()
  moveBall()

  requestAnimationFrame(drawGame)
}

bricksImage.onload = () => {
  drawGame()
}
