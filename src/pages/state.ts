interface LocalState {
    query: string;
    currentPage: number;
    postsPerPage: number;
}

export const initialState = {
    query: "",
    currentPage: 1,
    postsPerPage: 12,
};

type Actions =
    | {
        type: "SET_VALUE";
        field: string;
        value: string | number;
    };

export const reducer = (state: LocalState, action: Actions) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, [action.field]: action.value };

        default:
            return state;
    }
};