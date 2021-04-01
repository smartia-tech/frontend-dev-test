import * as React from "react";

// import Loader from "../Loader";

import { InputBox } from "./styles";
import { ReactComponent as SearchIcon } from "app/assets/img/icons/search.svg";
import { ReactComponent as DeleteIcon } from "app/assets/img/icons/remove.svg";

import Loader from "../Loader";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  clear?: boolean;
  loading?: boolean;
  onClearInput?: () => void;
  containerClassName?: string;
  search?: boolean;
}
const Input: React.FC<Props> = (props) => {
  const {
    clear,
    loading,
    onClearInput,
    containerClassName,
    search,
    ...rest
  } = props;

  return (
    <InputBox
      className={`${loading || search ? "padding-left " : ""}${
        clear ? "padding-right " : ""
      }${containerClassName || ""}`}
    >
      {loading ? <Loader className="prefix" /> : null}
      {search && !loading ? <SearchIcon className="prefix" /> : null}
      <input type="text" placeholder="Placeholder" {...rest} />
      {clear ? (
        <button
          type="button"
          title="clear"
          className="clear-btn"
          onClick={onClearInput}
        >
          <DeleteIcon />
        </button>
      ) : null}
    </InputBox>
  );
};

export default Input;
