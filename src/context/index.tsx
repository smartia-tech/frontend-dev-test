import React from 'react';
import axios from 'axios';
import { Launch } from '../types/Launch';

export interface ContextValues {
  launches: Launch[];
  fetchLaunches: (query?: string) => void;
}

export const Context = React.createContext({});

export const ContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [launches, setLaunches] = React.useState<Launch[]>([]);

  const fetchLaunches = async (query?: string) => {
    try {
      setLaunches([]);

      const url = 'https://api.spacexdata.com/v4/launches';

      let data: any[] = [];

      if (query && query !== '') {
        const res = await axios.post(`${url}/query`, {
          query: {
            $text: {
              $search: query
            }
          }
        });

        data = res.data.docs;
      } else {
        const res = await axios.get(`${url}/past`);
        data = res.data;
      }

      let launches: Launch[] = [];

      launches = data.map((launch) => {
        return {
          id: launch.id,
          flight_patch_image: launch.links.patch.small,
          name: launch.name,
          launch_date: launch.date_utc,
          landing_success: launch.cores[0].landing_success
        };
      });

      setLaunches(launches);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Context.Provider
      value={{
        launches,
        fetchLaunches
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
