import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TrustStrip from "./TrustStrip";

describe("TrustStrip", () => {
  it("renders all three trust items", () => {
    render(<TrustStrip />);
    expect(screen.getByText("Expert Support: Quick and Efficient Assistance")).toBeInTheDocument();
    expect(screen.getByText("Product Returns and Money-Back Guarantee")).toBeInTheDocument();
    expect(screen.getByText("Safe and Secure Payments")).toBeInTheDocument();
  });

  it("renders the support description mentioning live chat", () => {
    render(<TrustStrip />);
    expect(screen.getByText(/live chat/i)).toBeInTheDocument();
  });

  it("renders the return policy description mentioning 30 days", () => {
    render(<TrustStrip />);
    expect(screen.getByText(/30 days/i)).toBeInTheDocument();
  });

  it("renders the payment description mentioning 3D Secure", () => {
    render(<TrustStrip />);
    expect(screen.getByText(/3D Secure/i)).toBeInTheDocument();
    expect(screen.getByText(/PayPal/i)).toBeInTheDocument();
  });
});
