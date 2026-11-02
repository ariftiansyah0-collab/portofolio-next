import Image from "next/image"

export default function Hero({ nama, tagline }) {
    return (
        <section className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-5 md:text-left">
            <Image 
              src="/about.jpeg"
              alt={`Foto profil ${nama}`}
              width={180}
              height={180} 
              loading="eager"   
              className="h-32 w-32 rounded-full border-4 border-aksen object-cover"
            />
            <div>
                <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Halo, saya {nama}!</h1>
                <p className="mt-1 text-sm text-gray-700 md:text-base">{tagline}</p>
            </div>
        </section>
    )
}