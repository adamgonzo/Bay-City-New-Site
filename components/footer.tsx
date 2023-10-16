"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/bayCityGeneral.jpg";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-2">
      <Container fluid className="text-center">
        <Row className="mb-3 flex justify-between">
          <Col
            xs={12}
            sm={6}
            className="flex mb-3 mb-sm-0 text-sm text-center md:justify-start lg:justify-start justify-center"
          >
            <div className="flex items-center justify-center gap-3">
              <Image
                src={logo}
                alt="Bay City General Glass"
                height={40}
                width={40}
                className="mix-blend-multiply hidden md:block lg:block"
              />
              <div>
                <h1 className="text-sm mb-1">Bay City General Glass</h1>
                <div className="text-xs">
                  San Francisco, CA | Phone: (510) 258-7839
                </div>
              </div>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            className="flex items-center md:justify-end lg:justify-end justify-center "
          >
            <div className="flex">
              <a href="/" className="text-black text-decoration-none mx-3">
                Home
              </a>
              <a
                href="/pictures"
                className="text-black text-decoration-none mx-3"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="text-black text-decoration-none mx-3"
              >
                Contact
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="border-2 border-black"></hr>
            <div className="text-xs mt-2">
              &copy; 2023 Bay City General Glass. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
