import FormKontak from "@/components/FormKontak";

export default function Kontak() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Judul */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-utama">Hubungi Saya</h1>
          <p className="text-sm mt-2 text-gray-700">
            Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
          </p>
        </div>

        {/* Konten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Form */}
          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-5">
            <FormKontak />
            <form className="space-y-3">
              <div>
                <label className="block text-sm font-boldtext-utama dark:text-sky-200.mb-1">Nama lengkap</label>
                <input type="text" placeholder="Contoh: Budi Santoso" className="w-full border border-gray-300 rounded-md p-2 text-sm" required />
              </div>

              <div>
                <label className="block text-smtext-utama dark:text-sky-200.font-bold mb-1">Email</label>
                <input type="email" placeholder="nama@gmail.com" className="w-full border border-gray-300 rounded-md p-2 text-sm" required />
              </div>

              <div>
                <label className="block text-smtext-utama dark:text-sky-200.font-bold mb-1">Nomor HP</label>
                <input type="tel" placeholder="081234567890" className="w-full border border-gray-300 rounded-md p-2 text-sm" required />
              </div>

              <div>
                <label className="block text-smtext-utama dark:text-sky-200.font-bold mb-1">Keperluan</label>
                <select defaultValue="" required className="w-full border border-gray-300 rounded-md p-2 text-sm">
                  <option value="" disabled className="text-gray-300"> Pilih keperluan </option>
                  <option value="Kerja Sama">Kerja Sama</option>
                  <option value="Pertanyaan">Pertanyaan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-boldtext-utama dark:text-sky-200.mb-1">Pesan</label>
                <textarea rows={5} placeholder="Tulis pesanmu di sini" required className="w-full border border-gray-300 rounded-md p-2 text-sm resize-y" />
              </div>

              <button type="submit" className="bg-red-700 hover:bg-red-800 text-white font-bold text-sm px-5 py-2 rounded-md">
                Kirim Pesan
              </button>

              <p className="text-xs text-gray-500">
                Form ini belum terhubung dengan backend.
              </p>
            </form>
          </div>

          {/* Informasi Kontak */}
          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-5">
            <h2 className="text-xl font-boldtext-utama dark:text-sky-200.mb-2">Temukan Saya di</h2>
            <div className="flex flex-col gap-2 text-sm text-aksen font-semibold">
              <a href="https://github.com/ariftiansyah0-collab" target="_blank">GitHub</a>ariftiansyah0@gmail.com
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
