import { act } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ButtonWithSelect from "./ButtonWithSelect";

describe("ButtonWithSelect", () => {
  test("runs the first action by default", async () => {
    const firstAction = jest.fn();
    const secondAction = jest.fn();

    render(
      <ButtonWithSelect
        actions={[
          {
            title: "Preview component",
            description: "Default preview action",
            action: firstAction,
          },
          {
            title: "Copy import path",
            description: "Copy helper action",
            action: secondAction,
          },
        ]}
      />
    );

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: "Preview component" }),
      );
    });

    expect(firstAction).toHaveBeenCalledTimes(1);
    expect(secondAction).not.toHaveBeenCalled();
  });

  test("selects a different default action from the menu", async () => {
    const firstAction = jest.fn();
    const secondAction = jest.fn();

    render(
      <ButtonWithSelect
        actions={[
          {
            title: "Preview component",
            description: "Default preview action",
            action: firstAction,
          },
          {
            title: "Copy import path",
            description: "Copy helper action",
            action: secondAction,
          },
        ]}
      />
    );

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: /choose action/i }),
      );
    });

    expect(
      screen.getByRole("menu", { name: "Available actions" }),
    ).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(
        screen.getByRole("menuitemradio", { name: /copy import path/i }),
      );
    });

    expect(
      screen.queryByRole("menu", { name: "Available actions" }),
    ).not.toBeInTheDocument();

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: "Copy import path" }),
      );
    });

    expect(firstAction).not.toHaveBeenCalled();
    expect(secondAction).toHaveBeenCalledTimes(1);
  });

  test("supports keyboard navigation when choosing an action", async () => {
    const firstAction = jest.fn();
    const secondAction = jest.fn();
    const thirdAction = jest.fn();

    render(
      <ButtonWithSelect
        actions={[
          {
            title: "Preview component",
            description: "Default preview action",
            action: firstAction,
          },
          {
            title: "Copy import path",
            description: "Copy helper action",
            action: secondAction,
          },
          {
            title: "Draft blog post",
            description: "Draft helper action",
            action: thirdAction,
          },
        ]}
      />
    );

    screen.getByRole("button", { name: /choose action/i }).focus();

    await act(async () => {
      await userEvent.keyboard("{ArrowDown}");
    });

    const firstOption = screen.getByRole("menuitemradio", {
      name: /preview component/i,
    });

    expect(firstOption).toHaveFocus();

    await act(async () => {
      await userEvent.keyboard("{ArrowDown}{Enter}");
    });

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: "Copy import path" }),
      );
    });

    expect(firstAction).not.toHaveBeenCalled();
    expect(secondAction).toHaveBeenCalledTimes(1);
    expect(thirdAction).not.toHaveBeenCalled();
  });

  test("falls back to an in-range action when the actions array shrinks", async () => {
    const firstAction = jest.fn();
    const secondAction = jest.fn();
    const thirdAction = jest.fn();

    const { rerender } = render(
      <ButtonWithSelect
        actions={[
          {
            title: "Preview component",
            description: "Default preview action",
            action: firstAction,
          },
          {
            title: "Copy import path",
            description: "Copy helper action",
            action: secondAction,
          },
          {
            title: "Draft blog post",
            description: "Draft helper action",
            action: thirdAction,
          },
        ]}
      />
    );

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: /choose action/i }),
      );
    });

    await act(async () => {
      await userEvent.click(
        screen.getByRole("menuitemradio", { name: /draft blog post/i }),
      );
    });

    rerender(
      <ButtonWithSelect
        actions={[
          {
            title: "Preview component",
            description: "Default preview action",
            action: firstAction,
          },
        ]}
      />
    );

    expect(
      screen.getByRole("button", { name: "Preview component" }),
    ).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: "Preview component" }),
      );
    });

    expect(firstAction).toHaveBeenCalledTimes(1);
    expect(secondAction).not.toHaveBeenCalled();
    expect(thirdAction).not.toHaveBeenCalled();
  });
});
