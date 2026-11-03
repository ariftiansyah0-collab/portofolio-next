"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm";

export default function Kontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomorHp: "",
    keperluan: "",
    pesan: "",
  });
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function ubahForm(e) {
    const { name, value } = e.target;
    setForm((sebelumnya) => ({ ...sebelumnya, [name]: value }));
    setBerhasil(false);
  }

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (!form.nama.trim()) errorBaru.nama = "Nama wajib diisi.";
    if (!form.email.includes("@")) errorBaru.email = "Email harus memuat tanda @.";
    if (form.nomorHp.replace(/\D/g, "").length < 10) {
      errorBaru.nomorHp = "Nomor HP minimal 10 angka.";
    }
    if (!form.keperluan) errorBaru.keperluan = "Pilih salah satu keperluan.";
    if (form.pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

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
            <form onSubmit={kirim} noValidate className="space-y-3">
              <div>
                <label htmlFor="nama" className="mb-1 block text-sm font-bold text-utama">
                  Nama lengkap
                </label>
                <input id="nama" name="nama" value={form.nama} onChange={ubahForm} placeholder="Contoh: Budi Santoso" className={kelasInput} />
                {error.nama && <p className="mt-1 text-sm text-red-700">{error.nama}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-bold text-utama">
                  Email
                </label>
                <input id="email" name="email" type="email" value={form.email} onChange={ubahForm} placeholder="nama@gmail.com" className={kelasInput} />
                {error.email && <p className="mt-1 text-sm text-red-700">{error.email}</p>}
              </div>

              <div>
                <label htmlFor="nomorHp" className="mb-1 block text-sm font-bold text-utama">
                  Nomor HP
                </label>
                <input id="nomorHp" name="nomorHp" type="tel" value={form.nomorHp} onChange={ubahForm} placeholder="081234567890" className={kelasInput} />
                {error.nomorHp && <p className="mt-1 text-sm text-red-700">{error.nomorHp}</p>}
              </div>

              <div>
                <label htmlFor="keperluan" className="mb-1 block text-sm font-bold text-utama">
                  Keperluan
                </label>
                <select id="keperluan" name="keperluan" value={form.keperluan} onChange={ubahForm} className={kelasInput}>
                  <option value="">-- Pilih keperluan --</option>
                  <option value="Kerja Sama">Kerja Sama</option>
                  <option value="Pertanyaan">Pertanyaan</option>
                </select>
                {error.keperluan && <p className="mt-1 text-sm text-red-700">{error.keperluan}</p>}
              </div>

              <div>
                <label htmlFor="pesan" className="mb-1 block text-sm font-bold text-utama">
                  Pesan
                </label>
                <textarea id="pesan" name="pesan" rows={5} value={form.pesan} onChange={ubahForm} placeholder="Tulis pesanmu di sini" className={`${kelasInput} resize-y`} />
                {error.pesan && <p className="mt-1 text-sm text-red-700">{error.pesan}</p>}
              </div>

              <button type="submit" className="rounded-md bg-red-700 px-5 py-2 text-sm font-bold text-white hover:bg-red-800">
                Kirim Pesan
              </button>

              <p className="text-xs text-gray-500">
                Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di Minggu 15.
              </p>

              {berhasil && (
                <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
                  Terima kasih, {form.nama}! Pesanmu sudah lolos pemeriksaan.
                </p>
              )}
            </form>
          </div>

          {/* Informasi Kontak */}
          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-5">
            <h2 className="mb-2 text-xl font-bold text-utama">Temukan Saya di</h2>
            <div className="flex flex-col gap-2 text-sm text-aksen font-semibold">
              <a href="https://github.com/ariftiansyah0-collab" target="_blank">GitHub</a>ariftiansyah0@gmail.com
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
