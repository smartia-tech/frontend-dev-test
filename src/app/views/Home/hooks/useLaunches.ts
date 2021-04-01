import * as React from "react";
import { useMutation } from "react-query";
import debounce from "lodash.debounce";

import lauchesServices from "app/api/launches";
import { LaunchesResponse } from "app/api/launches/types";
import useUpdateEffect from "app/hooks/useUpdateEffect";

export default function useLaunches() {
  const [launches, setLaunches] = React.useState<
    LaunchesResponse | undefined
  >();

  const { mutate, data, error, isLoading } = useMutation(
    
    lauchesServices.queryLaunches,
  
     {
        mutationKey: "launches",
      }
  
  );
  const fetchLaunches = React.useCallback(
    (search = "", page = 1) => {
      mutate({ search, page });
    },
    [mutate]
  );

  const [search, setSearch] = React.useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clearSearch = () =>setSearch("");

  const debouncedFetch = React.useMemo(
    () =>
      debounce(() => fetchLaunches(search), 500, {
        trailing: true,
      }),
    [fetchLaunches, search]
  );

  useUpdateEffect(() => {
    debouncedFetch();
  }, [debouncedFetch, search]);

  React.useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  React.useEffect(() => {
    if (data) {
      setLaunches(data.data);
    }
  }, [data]);

  const onNext = React.useCallback(() => {
    if (data && data.data.hasNextPage) {
      fetchLaunches(search, data.data.nextPage);
    }
  }, [data, fetchLaunches, search]);

  const onPrev = React.useCallback(() => {
    if (data && data.data.hasPrevPage) {
      fetchLaunches(search, data.data.prevPage);
    }
  }, [data, fetchLaunches, search]);

  return {
    data: launches,
    error,
    fetchLaunches,
    isLoading,
    onNext,
    onPrev,
    handleSearch,
    search,
    clearSearch
  };
}
