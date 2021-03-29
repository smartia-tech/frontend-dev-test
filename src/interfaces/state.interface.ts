export interface PastLaunches {
    pastLaunches: Array<LaunchDetails>;
    searchResults: Array<LaunchDetails>;
    pageNumber?: number;
    searchKey?: string;
    isLoading: boolean;
}

export interface LaunchDetails {
    name: string
    links: {
        patch: {
            small: string;
        }
    };
    date_local: string;
    cores: Array<{
        landing_success: boolean;
    }>
}