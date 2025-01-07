import { renderWithProviders as render, screen } from "test/utils";

import Page from "~/app/page";

describe("Homepage", () => {
  it("renders correctly", async () => {
    // Arrange
    render(<Page />);

    // Act
    await screen.findByRole("main");

    // Assert
    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
