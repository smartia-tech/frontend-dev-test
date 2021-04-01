import Input from "app/components/Input";
import LoaderContainer from "app/components/LoaderContainer";
import H2 from "app/styles/elements/H2";
import LaunchesWrapper from "./components/LaunchesWrapper";
import SpaceLaunch from "./components/SpaceLaunch";
import useLaunches from "./hooks/useLaunches";
import { HomeContainer, Launches } from "./styles";

export default function Home() {
  // eslint-disable-next-line no-empty-pattern
  const {
    data,
    isLoading,
    fetchLaunches,
    error,
    onNext,
    onPrev,
    search,
    handleSearch,
  } = useLaunches();

  return (
    <HomeContainer>
      <H2 big className="title">
        Past SpaceX Launches
      </H2>
      <Input
        placeholder="Search Launch name"
        value={search}
        onChange={handleSearch}
      />
      <LoaderContainer
        className="loader-box"
        loading={isLoading}
        overlay={data && isLoading}
        errorControlOnClick={fetchLaunches}
        error={!!error}
      >
        {data ? (
          <LaunchesWrapper
            totalItems={data.totalDocs}
            currentPage={data.page}
            totalPages={data.totalPages}
            hasNext={data.hasNextPage}
            hasPrev={data.hasPrevPage}
            onNext={onNext}
            onPrev={onPrev}
          >
            <Launches>
              {data.docs.map((launch) => (
                <SpaceLaunch key={launch.id} launch={launch} />
              ))}
            </Launches>
          </LaunchesWrapper>
        ) : null}
      </LoaderContainer>
    </HomeContainer>
  );
}
