import React from "react";
import { Input } from "./Style";

const SearchInput = ({ input: keyword, onChange: setKeyword }) => {
  return (
    <Input
      value={keyword}
      placeholder={"Search for launches... 🚀"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchInput;
