// "use client"

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Header = () => {
//     const pathname = usePathname();

//     // Function to check if the current route matches the href
//     const isActive = (href) => pathname === href;

//     return (
//         <div>
//             <header id="header" className="header d-flex align-items-center sticky-top">
//                 <div className="container position-relative d-flex align-items-center">

//                     {/* Logo */}
//                     <Link href="/" className="logo d-flex align-items-center me-auto">
//                         <h1 className="sitename">GKELITE</h1>
//                     </Link>

//                     {/* Navigation Menu */}
//                     <nav id="navmenu" className="navmenu">
//                         <ul>
//                             <li>
//                                 <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
//                             </li>
//                             <li>
//                                 <Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link>
//                             </li>
//                             <li>
//                                 <Link href="/services" className={isActive("/services") ? "active" : ""}>Services</Link>
//                             </li>
//                             <li>
//                                 <Link href="/blog" className={isActive("/blog") ? "active" : ""}>Blog</Link>
//                             </li>
//                             <li>
//                                 <Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
//                             </li>
//                         </ul>
//                         <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
//                     </nav>

//                     {/* Social Links */}
//                     <div className="header-social-links">
//                         <a href="#" className="twitter" target="_blank"><i className="bi bi-twitter-x"></i></a>
//                         <a href="#" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
//                         <a href="#" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
//                         <a href="#" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Header;


"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to check if the current route matches the href
    const isActive = (href) => pathname === href;

    return (
        <header id="header" className={`header d-flex align-items-center ${isSticky ? "sticky-header visible" : ""}`}>
            <div className="container position-relative d-flex align-items-center">

                {/* Logo */}
                <Link href="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">GKELITE</h1>
                </Link>

                {/* Navigation Menu */}
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link>
                        </li>
                        <li>
                            <Link href="/services" className={isActive("/services") ? "active" : ""}>Services</Link>
                        </li>
                        <li>
                            <Link href="/blog" className={isActive("/blog") ? "active" : ""}>Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                {/* Social Links */}
                <div className="header-social-links">
                    <a href="#" className="twitter" target="_blank"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/gkelite_info/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
