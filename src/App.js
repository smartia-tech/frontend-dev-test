import { useState } from "react";
import useLaunches from "./hooks/useLaunches";
import LaunchItem from "./components/LaunchItem";
import Pagination from "./components/Pagination";
import FullPageLoader from "./components/Loader";

import { AnimateSharedLayout, motion } from "framer-motion";

let timerId;
var debounceFunction = function (func, delay) {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
};

function App() {
  const [options, setoptions] = useState({
    sort: "date_utc",
    page: 1,
    limit: 25,
    populate: [
      {
        path: "cores",
        populate: [
          {
            path: "core",
          },
        ],
      },
    ],
  });

  const [query, setquery] = useState({});

  const {
    data: { docs, totalPages, page },
    loading,
  } = useLaunches(options, query);

  return (
    <div className="relative bg-gray-100">
      <div className="container mx-auto p-2">
        <FullPageLoader loading={loading} />

        <div className="mb-2 sticky top-3 z-10">
          <input
            type="text"
            name="first_name"
            id="first_name"
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Search launches"
            onChange={({ target }) => {
              debounceFunction(
                () =>
                  setquery(
                    target.value
                      ? {
                          $text: {
                            $search: target.value,
                          },
                        }
                      : {}
                  ),
                300
              );
            }}
          />
        </div>

        <AnimateSharedLayout>
          <motion.div layout>
            {docs.map((launch) => (
              <LaunchItem key={launch.id} launch={launch} />
            ))}
          </motion.div>
        </AnimateSharedLayout>

        <div className="py-7">
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChanged={(newPage) => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
              setoptions((prev) => ({ ...prev, page: newPage }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
