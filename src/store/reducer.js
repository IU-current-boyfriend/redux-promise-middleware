
import { UPDATE_COMENT_LIST, UPDATE_MENU_LIST, UPDATE_COUNT} from './contants';

const initalState = {
  count: 0,
  menuList: [],
  commentList: []
}

const calCultorReducer = (state = initalState, action) => {
  switch(action.type) {
    case UPDATE_MENU_LIST: 
    return {
      ...state,
      menuList: action.payload
    }
    case UPDATE_COMENT_LIST:
      return {
        ...state,
        commentList: action.payload
      }
    case UPDATE_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
  }
}

export default calCultorReducer;