import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'

import player from 'modules/player/player.redux'
import paddle from 'modules/paddle/paddle.redux'
import ball from 'modules/ball/ball.redux'

const rootReducer = combineReducers({ player, paddle, ball })

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
})

export default store
