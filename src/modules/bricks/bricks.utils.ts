import bricksImageSprite from 'assets/images/bricks.png'
import {
  BRICK_WIDTH_SPRITE,
  BRICK_HEIGHT_SPRITE,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  bricksImageSpriteMap,
  BricksStateModel,
} from './bricks.model'

const bricksImage = new Image(340, 47)
bricksImage.src = bricksImageSprite

const drawBricks = (
  ctx: CanvasRenderingContext2D,
  bricks: BricksStateModel
) => {
  bricks.forEach((columns) => {
    columns.forEach((brick) => {
      if (brick !== null) {
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

export { drawBricks }
