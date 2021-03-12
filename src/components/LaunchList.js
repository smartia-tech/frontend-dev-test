import React from "react";
import { getLaunch } from "./GetLaunchList";
import CardView from "./CardView";
import SearchInput from "./SearchInput";
import CustomSearch from "../helper/CustomSearch";

const LaunchList = () => {
  const [launch, setLaunch] = React.useState([]);
  const [inputs, setInputs] = React.useState({
    search: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleGetLaunch = async () => {
    try {
      const lunch = await getLaunch();
      setLaunch(lunch);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    handleGetLaunch();
  }, []);

  const filteredLaunch = CustomSearch(inputs.search, launch, "name");

  return (
    <div>
      <h1 className="text-heading">Space-X Launch History</h1>
      <div className="search-input">
        <SearchInput
          type="text"
          onChange={onChange}
          name="search"
          placeholder="Search by name"
          value={inputs.search}
          dataTestId="search"
          ariaLabel="Search"
        />
      </div>
      <CardView launch={filteredLaunch} />
    </div>
  );
};

export default LaunchList;
