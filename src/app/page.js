import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
  const { data: proyekTerbaru } = await supabase
    .from ("projects")
    .select("*")
    .order("created_at", {ascending: false})
    .limit(3);
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
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
            {(proyekTerbaru ?? []).map((item) => (
            <ProyekCard
              key={item.slug}
              proyek={{ ...item, gambar_url: item.gambar_url }}
            />
            ))}
          </div>
          <Link
            href="/proyek"
            className={buttonVariants({ size: "lg", className: "mt-6"})}>
            Lihat semua proyek
          </Link>
        </section>
      </main>
    </div>
  );
}