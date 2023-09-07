"use client";
import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import logo from "../../assets/logo.svg";
import Link from "next/link";
const index = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="mb-4">
          <Image src={logo} alt="Picture of the author" className="img-fluid" />
        </div>
        <Nav defaultActiveKey="/" className="flex-column">
          <Link href="/" className="nav-link">
            <AiFillHome className="me-3 align-middle" size={22} /> home
          </Link>
          <Link href="/blog" className="nav-link">
            <FaSearch className="me-3 align-middle" size={22} /> blog
          </Link>
          <Link href="/explore" className="nav-link">
            {" "}
            <MdExplore className="me-3 align-middle" size={22} /> explore
          </Link>
          <Link href="/" className="nav-link">
            <MdExplore className="me-3 align-middle" size={22} /> reels
          </Link>
          <Link href="/" className="nav-link">
            {" "}
            <MdExplore className="me-3 align-middle" size={22} />
            massages
          </Link>
          <Link href="/" className="nav-link">
            {" "}
            <MdExplore className="me-3 align-middle" size={22} />
            notifications
          </Link>
          <Link href="/profile" className="nav-link">
            {" "}
            <MdExplore className="me-3 align-middle" size={22} />
            profile
          </Link>
          <Link href="/login" className="nav-link">
            {" "}
            <MdExplore className="me-3 align-middle" size={22} />
            Log in
          </Link>
        </Nav>
      </aside>
    </>
  );
};

export default index;
