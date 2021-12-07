import  {combineReducers, createStore } from 'redux'
import photos from '../reducers/photos.reducer'

const reducers = combineReducers ({
    photos
})

export const store = createStore(reducers)