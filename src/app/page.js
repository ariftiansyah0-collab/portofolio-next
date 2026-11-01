import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 md:py-8">
        <Hero
          nama="Fajriel Ariftiansyah"
          tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />
        <section>
          <h2 className="mb-3 text-xl font-bold text-utama">Keahlian</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-utama">Proyek Terbaru</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {proyek.slice(-3).map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link
            href="/proyek"
            className="mt-4 inline-flex rounded-md bg-utama px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Lihat semua proyek
          </Link>
        </section>
      </main>
    </div>
  );
}