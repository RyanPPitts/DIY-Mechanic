// this is where the actions go - request to the backend

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
    return {
        // this is the action
        type: GET_ITEMS
    };
};