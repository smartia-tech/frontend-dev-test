import fetch from "../config/FetchWrapper";
import moment from "moment";

export const getLaunch = async () => {
  const result = await fetch(`/launches`);
  let response = await result.json();

  console.log(response);

  response = response.map((item) => {
    const failureCores = item.cores.filter(
      (element) => element.landing_success !== true
    );
    return {
      image: item.links.patch.small || "--/--",
      name: item.name,
      launchDate: moment(item.date_utc).format("MMM Do YY"),
      cores: failureCores.length === 0 ? true : false,
    };
  });

  return response;
};
