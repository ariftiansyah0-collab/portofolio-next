import About from "@/components/About";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import HobiCard from "@/components/HobiCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
  { deskripsi: "- Bermain Game"},
  { deskripsi: "- Mendengarkan Musik"},
  { deskripsi: "- Desain Grafis"},
];

const citacita = [
  { deskripsi: "- Bekerja diperusahaan besar"},
  { deskripsi: "- Menjadi GameDeveloper"},
  { deskripsi: "- Pengusaha Otobus Pariwisata"},
  { deskripsi: "- Masinis ( Inshaallah )"},
];


export default function Home() {
  return (
    <main className="flex flex-col gap-10 mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Fajriel Ariftiansyah"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />
      <About
        tentang="saya tinggal di Pasuruan dan saya senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat web yang bermanfaat untuk sekolah dan UMKM sekitar rumah"
      />
      
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <h3 className=" text-utama py-3">saya sangat ingin sekali menjadi seorang <strong>GameDeveloper</strong> Solo Indie:</h3>
          {citacita.map((item, index) => (
            <ul key={index} className="space-y-2">
              {item.deskripsi}
            </ul>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>
    </main>
  );
}