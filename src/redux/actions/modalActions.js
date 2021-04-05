import enums from '../enums';

export const showModal = (modal) => ({
  type: enums.SHOW_MODAL,
  payload: modal,
});

export const hideModal = (modal) => ({
  type: enums.HIDE_MODAL,
  payload: modal,
});
