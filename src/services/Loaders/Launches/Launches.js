import * as API_ENDPOINTS from "services/Endpoints";
import * as UTIL from "utils";
import * as Messages from "../messages";

export const loadLaunches = async (params) => {
  try {
    const { data } = await API_ENDPOINTS.getLaunches(params);
    return data || [];
  } catch (err) {
    console.error(err);
    UTIL.Notifications.createDangerNotification({
      message: err?.response?.data?.status_message || Messages.ERROR.DEFAULT,
    });

    return [];
  }
};

export const loadLaunchesByQuery = async (query) => {
  try {
    const { data } = await API_ENDPOINTS.getLaunchesByQuery(query);
    return data || {};
  } catch (err) {
    console.error(err);
    UTIL.Notifications.createDangerNotification({
      message: err?.response?.data?.status_message || Messages.ERROR.DEFAULT,
    });

    return {};
  }
};
