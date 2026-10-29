export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="w-full bg-utama px-4 py-5 text-center text-sm text-white">
                &copy; {new Date().getUTCFullYear()} Fajriel Ariftiansyah. All right reserved.
            </div>
        </footer>
    )
}