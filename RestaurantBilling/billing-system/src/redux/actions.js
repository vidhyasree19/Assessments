import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from './actionTypes';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const updateItem = (itemId, quantity) => ({
  type: UPDATE_ITEM,
  payload: { itemId, quantity },
});
