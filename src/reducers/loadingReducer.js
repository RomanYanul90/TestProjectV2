import { HIDE_LOADER, SHOW_LOADER } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default: return state;
  }
};
