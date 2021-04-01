export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  links: {
    patch: {
      small: string;
      large: string;
    };
  };
  cores: {
    core: string;
    landing_success: boolean;
  }[];
}

export interface LaunchQuery {
  search: string;
  page: number;
}

export interface LaunchesResponse {
  docs: Launch[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}
