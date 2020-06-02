import { createStore } from 'redux'
import {notesReducer} from './notesReducer'

export const store = createStore(notesReducer)