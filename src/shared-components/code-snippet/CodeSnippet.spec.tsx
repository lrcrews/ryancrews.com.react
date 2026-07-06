import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CodeSnippet from "./CodeSnippet";

describe("CodeSnippet", () => {
  test("copies the snippet text", async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);

    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });

    render(<CodeSnippet label="example">{`const name = "Ryan";`}</CodeSnippet>);

    await userEvent.click(screen.getByRole("button", { name: "copy" }));

    expect(writeText).toHaveBeenCalledWith('const name = "Ryan";');
    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("Copied.");
    });
  });
});
