import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the company name", () => {
    render(<HeroSection />);
    expect(screen.getByText(/G\.R\.A\.M\.S STYLING/i)).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Premium automotive styling parts/i)).toBeInTheDocument();
  });

  it("renders all benefit bullets", () => {
    render(<HeroSection />);
    expect(screen.getByText(/No customs fees/i)).toBeInTheDocument();
    expect(screen.getByText(/GBP, EUR & USD/i)).toBeInTheDocument();
    expect(screen.getByText(/Perfect fit guaranteed/i)).toBeInTheDocument();
    expect(screen.getByText(/10\+ years/i)).toBeInTheDocument();
  });

  it("renders both CTA links with correct hrefs", () => {
    render(<HeroSection />);
    const shopLink = screen.getByText("Shop All Products");
    expect(shopLink).toHaveAttribute("href", "/shop");
    const contactLink = screen.getByText("Contact Us");
    expect(contactLink).toHaveAttribute("href", "/contact-us");
  });
});
