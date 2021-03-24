import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as UTIL from "utils";
import * as S from "./styles";
import * as C from "components";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [searched, setSearched] = useState("");
  const [launches, setLaunches] = useState(UTIL.createArray(itemsPerPage));
  const [query, setQuery] = useState({});

  const loadData = async (query) => {
    setIsLoading(true);

    const launchesResponse = await API.loadLaunchesByQuery(query);

    setLaunches(launchesResponse.docs || []);
    setTotalItems(launchesResponse.totalDocs || 0);

    setIsLoading(false);
  };

  const updateParams = (newQuery, newOptions) => {
    const nameSearchRegex = `.*${newQuery.name}.*`;

    setQuery({
      query: {
        name: newQuery.name
          ? { $regex: nameSearchRegex, $options: "i" }
          : undefined,
      },
      options: {
        page: newOptions.currentPage,
        limit: newOptions.itemsPerPage,
      },
    });
  };

  useEffect(() => {
    if (!UTIL.IsEmpty(query)) {
      loadData(query);
    }
  }, [query]);

  useEffect(() => {
    updateParams({ name: searched }, { currentPage, itemsPerPage });
  }, [currentPage, itemsPerPage, searched]);

  return (
    <S.Page>
      <S.Container>
        <S.Title>
          {launches?.length ? "Launches List" : "Launches unavailable"}
        </S.Title>

        <C.UI.Search
          placeholder='Search a launch'
          isLoading={isLoading}
          onChange={setSearched}
        />

        <C.LaunchesList launches={launches} />

        <C.UI.Pagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          initialPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
        />
      </S.Container>
    </S.Page>
  );
};

export default HomePage;
