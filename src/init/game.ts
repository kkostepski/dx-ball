import store from './redux'
import { createBricks } from 'modules/bricks/bricks.redux'
import { LEVEL_1 } from 'config/levels'
import {
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_WIDTH_SPRITE,
  BRICK_HEIGHT_SPRITE,
  bricksImageSpriteMap,
} from 'modules/bricks/bricks.model'
import bricksImageSprite from 'assets/images/bricks.png'

store.dispatch(createBricks(LEVEL_1))

store.subscribe(() => console.log(store.getState()))

const canvas = <HTMLCanvasElement>document.getElementById('arkanoid')
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')

if (!canvas) {
  throw new Error('No canvas found!')
}

const bricks = store.getState().bricks

const bricksImage = new Image(340, 47)
bricksImage.src = bricksImageSprite

const drawBricks = () => {
  bricks.forEach(columns => {
    columns.forEach(brick => {
      if (brick != null) {
        const [x, y] = bricksImageSpriteMap[brick.type]
        const canvasPosition = [
          x,
          y,
          BRICK_WIDTH_SPRITE,
          BRICK_HEIGHT_SPRITE,
        ]

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

const drawGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  drawBricks()

  requestAnimationFrame(drawGame)
}

bricksImage.onload = () => {
  drawGame()
}
