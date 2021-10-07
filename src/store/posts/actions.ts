import {
  GET_POST_LIST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAIL,
} from './actionTypes';

/**
 * Getting list of available posts
 */
export const getPostList = (): any => ({
  type: GET_POST_LIST,
});

export const getPostListSuccess = (payload: any): any => ({
  type: GET_POST_LIST_SUCCESS,
  payload,
});

export const getPostListFail = (payload: any): any => ({
  type: GET_POST_LIST_FAIL,
  payload,
});
