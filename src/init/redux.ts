import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'

import player from 'modules/player/player.redux'
import paddle from 'modules/paddle/paddle.redux'
import ball from 'modules/ball/ball.redux'
import bricks from 'modules/bricks/bricks.redux'

const rootReducer = combineReducers({ player, paddle, ball, bricks })

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})

export default store
