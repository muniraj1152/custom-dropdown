import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.post.pending;

const getPosts = (state: AppState) => state.post.posts;

export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);
