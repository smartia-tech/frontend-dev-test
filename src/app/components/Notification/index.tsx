import * as React from "react";
// import { ToastOptions } from "react-toastify";

// import { NotificationProps, NotificationContainer } from "./styles";
// import P from "app/styles/elements/P";
// import { ReactComponent as CloseIcon } from "app/assets/img/icons/close-white.svg";

export interface NotificationComponentProps {}
// extends NotificationProps,
//   ToastOptions {
// message?: string | JSX.Element;
// closeToast?: () => void;
// }

const Notification: React.FC<NotificationComponentProps> = (props) => {
  // const { message, closeToast, variant } = props;
  return null;
  // return (
  //   <NotificationContainer {...{ variant }} data-testid="notification">
  //     <P small>{message}</P>
  //     <button type="button" title="close notification" onClick={closeToast}>
  //       <CloseIcon />
  //     </button>
  //   </NotificationContainer>
  // );
};

export default Notification;
