import { render, screen } from "@testing-library/react";

describe("Loader", () => {
  test("renders a heading", () => {
    render(<div>로그아웃</div>);
    expect(screen.getByText("로그아웃")).toBeInTheDocument();
  });
});
