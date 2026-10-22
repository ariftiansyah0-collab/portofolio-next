export default function About({ tentang }) {
    return (
        <div className="rounded-xl border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-utama">Tentang saya</h2>
            <h3 className="">{tentang}</h3>
        </div>
    )
}