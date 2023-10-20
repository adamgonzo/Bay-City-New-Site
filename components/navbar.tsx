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
    <Navbar className="bg-gray-300" variant="primary" expand="lg" fixed="top">
      <Container className="flex flex-col">
        <div className="flex items-center justify-center w-full p-lg-1 p-md-2 p-3">
          <div className="flex items-center gap-10">
            <div className="hidden md:block">
              <Image
                alt="Bay City General Glass"
                src={logo}
                width={50}
                height={50}
                style={{ width: "auto", height: "auto" }}
                className="d-inline-block align-top mix-blend-multiply"
              />
            </div>
            <span className="text-transparent text-shadow-gray-500 font-bold ml-2 mr-2 ">
              <Image
                alt="Bay City General Glass"
                src={companyname}
                priority
                style={{ width: "auto", height: "auto" }}
              />
              <span className="text-black leading-tight tracking-wide text-center justify-center hidden md:block">
                Professional Quality Workmanship
              </span>
            </span>
            <div className="hidden lg:block">
              <Image
                alt="Bay City General Glass"
                src={logo}
                width={50}
                height={50}
                style={{ width: "auto", height: "auto" }}
                className="d-inline-block align-top scale-x-[-1] mix-blend-multiply "
              />
            </div>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleNavbar}
            className="ml-10 "
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
