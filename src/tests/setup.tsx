import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Providers from "app/providers";

// const q = new QueryClient({ defaultOptions: { queries: { retry: false } } });

function setup(
  ui: React.ReactElement<any>,
  { initialState = {}, route = "/", ...overrides }: any = {}
) {
  return render(
    <Providers
      queryConfig={{ defaultOptions: { queries: { retry: false } } }}
      // initialQuestionState={initialState}
    >
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </Providers>,
    overrides
  );
}

export * from "@testing-library/react";
export { setup };
