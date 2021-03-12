import fetch from "../config/FetchWrapper";
import moment from "moment";

export const getLaunch = async () => {
  const result = await fetch(`/launches`);
  let response = await result.json();

  response = response.map((item) => {
    const failureCores = item.cores.filter(
      (element) => element.landing_success !== true
    );
    return {
      image: item.links ? item.links.patch.small : "--/--",
      name: item.name ? item.name : "",
      launchDate: item.date_utc ? moment(item.date_utc).format("LL") : "",
      cores: failureCores.length === 0 ? true : false,
    };
  });

  return response;
};
