/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURFS_START,
  GET_SMURFS_FAILED,
  GET_SMURFS_SUCCESS,
  ADD_SMURF_START,
  ADD_SMURF_FAILED, 
  ADD_SMURF_SUCCESS
} from '../actions/index'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS_START: {
      return {
        ...state,
        fetchingSmurfs: true,
      }
    }
    case GET_SMURFS_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload.Error
      }
    }
    case GET_SMURFS_SUCCESS: {
      const newList = state.smurfs.concat(action.payload)
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: newList
      }
    }
    case ADD_SMURF_START: {
      return {
        ...state,
        addingSmurf: true,
        error: null,
      }
    }
    case ADD_SMURF_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    }
    case ADD_SMURF_SUCCESS: {
      const {name, age, height} = action.payload
      const newSmurf = [{
        name,
        age,
        height
      }]
      const newList = state.smurfs.concat(newSmurf)
      return {
        ...state,
        smurfs: newList
      }
    }
    default: 
      return state;
  }
}