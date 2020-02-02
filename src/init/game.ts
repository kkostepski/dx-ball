import store from './redux'
import { createBricks } from 'modules/bricks/bricks.redux'
import { LEVEL_1 } from 'config/levels'
import { BRICK_WIDTH, BRICK_HEIGHT } from 'modules/bricks/bricks.model'

store.dispatch(createBricks(LEVEL_1))

store.subscribe(() => console.log(store.getState()))

const canvas = <HTMLCanvasElement>document.getElementById('arkanoid')
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')

if (!canvas) {
  throw new Error('No canvas found!')
}

const bricks = store.getState().bricks

const drawBricks = () => {
  bricks.forEach(columns => {
    columns.forEach(brick => {
      if (brick != null) {
        ctx.beginPath()
        ctx.rect(brick.position.x, brick.position.y, BRICK_WIDTH, BRICK_HEIGHT)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.closePath()
      }
    })
  })
}

const drawGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBricks()

  requestAnimationFrame(drawGame)
}

drawGame()
