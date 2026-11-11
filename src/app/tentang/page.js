import SkillCard from "@/components/SkillCard";

export const metadata = {
    title: "tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Fajriel Ariftiansyah.",
};
const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain Poster dengan Canva", level: "Menengah" },
    { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
    { deskripsi: "- Bermain Game" },
    { deskripsi: "- Mendengarkan Musik" },
    { deskripsi: "- Desain Grafis" },
];

const citacita = [
    { deskripsi: "- Bekerja diperusahaan besar" },
    { deskripsi: "- Menjadi GameDeveloper" },
    { deskripsi: "- Pengusaha Otobus Pariwisata" },
    { deskripsi: "- Masinis ( Inshaallah )" },
];

const jadwal = [
    {
        hari: "Senin",
        waktu: "19:00 - 21:00",
        kegiatan: "PKK",
    },
    {
        hari: "Selasa",
        waktu: "07:00 - 12:00",
        kegiatan: "PKK"
    },
    {
        hari: "Rabu",
        waktu: "18:00 - 20:00",
        kegiatan: "IOT",
    },
];

export default function Tentang() {
    return (
        <main className="min-h-screen py-8 px-4">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-8 text-3xl font-bold 	text-primary md:text-2xl">Tentang saya</h1>
                <div className="rounded-xl border-gray-200 bg-white p-5 shadow-sm py-4">
                    <h2 className="mb-2 font-bold text-utama">Perkenalan</h2>
                    <h3 className="text-utama">saya tinggal di Pasuruan dan saya senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat web yang bermanfaat untuk sekolah dan UMKM sekitar rumah</h3>
                </div>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                    {/* Hobi */}
                    <div className="bg-white rounded-xl shadow-sm p-5">
                        <h2 className="mb-4 text-2xl font-bold text-utama">Hobi</h2>
                        {hobi.map((item, index) => (
                            <ul key={index} className="space-y-2">
                                {item.deskripsi}
                            </ul>
                        ))}
                    </div>
                    {/* Cita-Cita */}
                    <div className="bg-white rounded-xl shadow-sm p-5">
                        <h2 className="mb-4 text-2xl font-bold text-utama">Cita-Cita</h2>
                        <h3 className="text-primarypy-3">saya sangat ingin sekali menjadi seorang <strong>GameDeveloper</strong> Solo Indie:</h3>
                        {citacita.map((item, index) => (
                            <ul key={index} className="space-y-2">
                                {item.deskripsi}
                            </ul>
                        ))}
                    </div>
                </section>
                {/* Jadwal Belajar */}
                <section>
                    <div className="mb-6 bg-white p-5 rounded-xl shadow-sm">
                        <h2 className="mb-2 text-2xl font-bold text-utama">Jadwal Belajar</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse mx-auto">
                                <thead className="bg-utama text-white">
                                    <tr>
                                        <th className="px-10 py-2 text-xs font-semibold pl-4">Hari</th>
                                        <th className="px-10 py-2 text-xs font-semibold">Waktu</th>
                                        <th className="px-10 py-2 text-xs font-semibold">Kegiatan</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">{jadwal.map((item) => (
                                    <tr key={item.hari} className="border-b border-gray-200">
                                        <td className="py-1 px-1 font-normal">{item.hari}</td>
                                        <td className="py-1 px-1 font-normal">{item.waktu}</td>
                                        <td className="py-1 px-5 font-normal">{item.kegiatan}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}