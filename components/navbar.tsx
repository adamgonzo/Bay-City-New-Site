"use client";

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import logo from "../images/bayCityGeneral.jpg";

export default function NavbarLink() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="white" variant="primary" expand="lg" fixed="top">
      <Container className="flex items-center justify-between w-full">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            alt="Bay City General Glass"
            src={logo}
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }} // Inline styles to maintain aspect ratio
            className="d-inline-block align-top mr-2"
          />
          <div className="flex flex-col">
            <span className="text-md font-bold md:text-2xl">
              Bay City General Glass
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbar}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${expanded ? "show" : ""} lg:flex`}
        >
          <Nav className="ml-auto text-md font-medium font-sans text-xl">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="/pictures" className="nav-link">
              Gallery
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
