import { BallStateModel } from './ball.model'

type BallParams = {
  size: BallStateModel['size']
  position: BallStateModel['position']
}

const drawBall = (
  ctx: CanvasRenderingContext2D,
  { size, position }: BallParams
) => {
  ctx.beginPath()
  ctx.arc(position.x, position.y, size * 2, 0, Math.PI * 2)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

export { drawBall }
