"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offers = [
    "20% off Entire Purchase Promo code: offT80",
    "50% - 80% off on Vegetables",
    "Off 10%! Shop Vegetables",
    "Off 50%! Shop Now",
    "Off 10%! Shop Vegetables",
    "50% - 80% off on Vegetables",
    "20% off Entire Purchase Promo code: offT30",
    "Off 50%! Shop Now",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [offers.length]);

  useEffect(() => {
    const navbarTop = document.getElementById("navbar-top");
    const navbarBottom = document.getElementById("navbar-bottom");

    const handleScroll = () => {
      if (navbarTop && window.pageYOffset > navbarTop.offsetHeight) {
        if (navbarBottom) {
          navbarBottom.classList.add("sticky");
        }
      } else {
        if (navbarBottom) {
          navbarBottom.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header">
      <div className="navbar-top" id="navbar-top">
        <div className="user-info">
          <select name="Devise" id="devise">
            <option>$ USD</option>
            <option>¥ JPY</option>
            <option>€ EUR</option>
          </select>
          <ul className="info-list">
            <li>
              <a href="#">Call Us: +11 900 800 100</a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    fill="white"
                    d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
                  />
                </svg>
                <p>My Account</p>
              </a>
            </li>
            |
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    fill="white"
                    d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z"
                  />
                </svg>
                <p>Our Location</p>
              </a>
            </li>
            |
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    fill="white"
                    d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H200q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H480ZM200-240h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"
                  />
                </svg>
                <p>Contact Us</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="offer-box">
          <ul className="offer-box">
            <li className={`offer-item fade ${currentIndex}`}>
              {offers[currentIndex]}
            </li>
          </ul>
        </div>

        <div className="account">
          <select name="account" id="account">
            <option value="Register">Register Here</option>
            <option value="Sign">Sign In</option>
          </select>
        </div>
      </div>

      <div className="navbar-bottom" id="navbar-bottom">
        <div className="header-logo">
          <Image src="/images/logo.png" alt="" width={200} height={100} />
        </div>

        <div className="navbar-links">
          <ul>
            <Link href="/home" className="link">
              Home
            </Link>
            <Link href="/about" className="link">
              About Us
            </Link>
            <Link href="/shop" className="link">
              Shop
            </Link>
            <Link href="/gallery" className="link">
              Gallery
            </Link>
            <Link href="/contact-us" className="link">
              Contact Us
            </Link>
          </ul>
        </div>

        <div className="navbar-icon">
          <div className="navbar-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>

          <div className="navbar-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z" />
            </svg>
            <span>My Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}
