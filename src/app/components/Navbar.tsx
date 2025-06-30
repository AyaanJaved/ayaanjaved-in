'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between py-4 px-4 md:px-8 relative">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="text-3xl font-bold font-serif">
                    Ayaan Javed.
                </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-bold">
                <Link href="/tech">Tech</Link>
                <Link href="/music">Music</Link>
                <Link href="/travel">Travel</Link>
                <Link href="/about">About</Link>
                <Link href="/contact" className="bg-black text-background py-2 px-4 rounded-full hover:brightness-90 ml-4">
                    Contact
                </Link>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <button
                className="md:hidden flex items-center justify-center p-2 focus:outline-none"
                aria-label="Open menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full right-4 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 flex flex-col items-stretch md:hidden animate-fade-in">
                    <Link href="/tech" className="px-6 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Tech</Link>
                    <Link href="/music" className="px-6 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Music</Link>
                    <Link href="/travel" className="px-6 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Travel</Link>
                    <Link href="/about" className="px-6 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/contact" className="m-3 bg-black text-background py-2 px-4 rounded-full hover:brightness-90 text-center" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}