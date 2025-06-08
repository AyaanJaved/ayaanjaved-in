import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8">
            <div>
                <Link href="/" className="text-3xl font-bold font-serif">
                    Ayaan Javed.
                </Link>
            </div>
            <div>
                {
                    <ul className="flex items-center gap-8 font-bold">
                        <li>
                            <Link href="/tech">Tech</Link>
                        </li>
                        <li>
                            <Link href="/music">Music</Link>
                        </li>
                        <li>
                            <Link href="/travel">Travel</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                }</div>
            <div>
                <Link href="/contact" className="bg-black text-background py-2 px-4 rounded-full hover:brightness-90">
                    Contact
                </Link>
            </div>
        </nav>
    );
}