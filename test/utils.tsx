import { render, RenderOptions } from "@testing-library/react";
import userEvent, {
  Options as UserEventOptions,
} from "@testing-library/user-event";
import React, { PropsWithChildren, ReactElement } from "react";

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

const setupUser = (options?: UserEventOptions) => userEvent.setup(options);

const user = setupUser();

export * from "@testing-library/react";
export { renderWithProviders, setupUser, user };
