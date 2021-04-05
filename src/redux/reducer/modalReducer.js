import enums from '../enums';

const INITIAL_STATE = {
  searchModal: false,
};

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case enums.SHOW_MODAL:
      return {...state, [action.payload]: true};
    case enums.HIDE_MODAL:
      return {...state, [action.payload]: false};

    default:
      return state;
  }
};

export default ModalReducer;
