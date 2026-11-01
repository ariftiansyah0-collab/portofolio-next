import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
    return (
        <Link
            href={`/proyek/${proyek.slug}`}
            className="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <Image
                src={proyek.gambar}
                alt={`Tangkapan layar ${proyek.judul}`}
                width={460}
                height={420}
                className="aspect-video w-full object-cover"
            />

            <div className="p-3">
                <span className="rounded-full bg-latar px-3 py-1 text-xs font-semibold text-utama">{proyek.kategori}</span>
                <h3 className="mt-2 text-sm font-semibold text-utama">{proyek.judul}</h3>
                <p className="mt-1 text-xs text-gray-600">{proyek.deskripsi}
                </p>
            </div>
        </Link>
    )
}