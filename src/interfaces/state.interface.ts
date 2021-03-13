export interface PastLaunches {
    pastLaunches: Array<LaunchDetails>
}

export interface LaunchDetails {
    name: string
    links: {
        patch: {
            small: string;
        }
    };
    date_local: string;
    cores: {
        landing_success: boolean;
    }
}