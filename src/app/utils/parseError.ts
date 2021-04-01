import { AxiosError } from "axios";

interface OptionsProps {
  useErrorResponse?: boolean;
}

const parseError = (err: AxiosError, options?: OptionsProps) => {
  if (options?.useErrorResponse) {
    if (err?.response?.data) {
      return err.response.data;
    } else {
      return err;
    }
  }

  if (err?.response?.data?.message) {
    return err.response.data.message;
  } else if (err?.response?.data?.status) {
    return err.response.data.status;
  } else if (err?.message) {
    return err.message;
  } else {
    return "Error Occured";
  }
};

export default parseError;
