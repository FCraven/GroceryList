import { createStore } from 'redux'

const ADD_GROCERY = 'ADD_GROCERY'
const initialState = { groceries: [] }

let nextId = 0
const addGrocery = (text) => ({
  type: ADD_GROCERY,
  id: nextId++,
  text
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      };
      return { ...state, groceries: [...state.groceries, newGrocery] }

      //feel free to remove
      case UPDATE_GROCERY:
      const updatedGrocery = action.text
      return {...state, groceries: [...state.groceries, updatedGrocery]}

    default:
      return state;
  }
}

const store = createStore(reducer)

export default store;
