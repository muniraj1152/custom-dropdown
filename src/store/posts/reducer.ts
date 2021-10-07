import { GET_POST_LIST_FAIL, GET_POST_LIST_SUCCESS } from './actionTypes';

const initialState: any = {
  pending: false,
  posts: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        error: null,
      };
    case GET_POST_LIST_FAIL:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
