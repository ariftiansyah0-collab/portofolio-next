import Link from "next/link";

export const metadata = {
  title: "Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center px-4 py-16 text-center">
      <div>
        <p className="text-6xl font-bold text-aksen md:text-7xl">404</p>
        <h1 className="mt-4 text-2xl font-boldtext-utama dark:text-sky-200.md:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-4 text-base text-gray-700 md:text-xl">
          Alamat yang kamu buka tidak ada atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-lg bg-utama px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
