import Link from "next/link";

const menu = [ 
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/proyek", label: "Proyek" },
    { href: "/kontak", label: "Kontak" },
];

export default function Navbar () {
    return (
        <header className="bg-utama text-white">
            <nav className="sticky top-0 z-50 mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="text-xl font-bold">Fajriel Ariftiansyah</Link>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {menu.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-gray-200 hover:text-white">
                            {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}