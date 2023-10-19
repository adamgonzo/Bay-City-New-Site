"use client";

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import logo from "../images/bayCityGeneral.jpg";
import companyname from "../images/companyName.png";

export default function NavbarLink() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="white" variant="primary" expand="lg" fixed="top">
      <Container className="flex flex-col">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center">
            <Image
              alt="Bay City General Glass"
              src={logo}
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
              className="d-inline-block align-top"
            />
            <span className="text-transparent text-shadow-gray-500 font-bold ml-2 mr-2">
              <Image
                alt="Bay City General Glass"
                src={companyname}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </span>
            <Image
              alt="Bay City General Glass"
              src={logo}
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
              className="d-inline-block align-top scale-x-[-1] "
            />
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleNavbar}
          />
        </div>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${expanded ? "show" : ""} lg:flex`}
        >
          <Nav className="ml-auto text-md font-medium font-sans text-xl mt-2 lg:mt-0">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="/residential" className="nav-link">
              Residential
            </Nav.Link>
            <Nav.Link href="/commercial" className="nav-link">
              Commercial
            </Nav.Link>

            <Nav.Link href="/pictures" className="nav-link">
              Gallery
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
