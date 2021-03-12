export interface PaginatedResponse extends PageMeta {
    docs?: (Launch)[] | null;
}

interface PageMeta {
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

export interface Launch {
    links: Links;
    name: string;
    date_utc: string;
    cores?: (Cores)[] | null;
    id: string;
}

interface Links {
    patch: Patch;
}
interface Patch {
    small: string;
}

interface Cores {
    landing_success: boolean | null;
}