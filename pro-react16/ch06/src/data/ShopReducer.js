import { ActionTypes } from './Types';

export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
      };
    default:
      return storeData || {};
  }
};
