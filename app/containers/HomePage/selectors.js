import { createSelector } from 'reselect';

const selectHomeDomain = () => (state) => state.get('home');

const makeSelectPony = () => createSelector(
  selectHomeDomain(),
  (state) => state.get('pony')
);

export {
  makeSelectPony,
};
