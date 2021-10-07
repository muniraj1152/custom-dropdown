import { GET_POST_LIST } from './actionTypes';

export interface FetchPostsRequest {
  type: typeof GET_POST_LIST;
}

export type PostsActions = FetchPostsRequest;
