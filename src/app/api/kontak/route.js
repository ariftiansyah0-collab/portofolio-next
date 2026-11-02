import { createClient } from "@supabase/supabase-js";

const keperluanValid = ["Kerja Sama", "Pertanyaan"];

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ message: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return Response.json({ message: "Format permintaan tidak valid." }, { status: 400 });
  }

  const form = {
    nama: typeof data.nama === "string" ? data.nama.trim() : "",
    email: typeof data.email === "string" ? data.email.trim() : "",
    nomor_hp: typeof data.nomorHp === "string" ? data.nomorHp.trim() : "",
    keperluan: typeof data.keperluan === "string" ? data.keperluan : "",
    pesan: typeof data.pesan === "string" ? data.pesan.trim() : "",
  };
  const errors = {};

  if (!form.nama || form.nama.length > 100) {
    errors.nama = "Nama wajib diisi (maksimal 100 karakter).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 254) {
    errors.email = "Masukkan alamat email yang valid.";
  }
  if (form.nomor_hp.replace(/\D/g, "").length < 10 || form.nomor_hp.length > 30) {
    errors.nomorHp = "Nomor HP minimal 10 angka.";
  }
  if (!keperluanValid.includes(form.keperluan)) {
    errors.keperluan = "Pilih salah satu keperluan.";
  }
  if (form.pesan.length < 10 || form.pesan.length > 5000) {
    errors.pesan = "Pesan harus berisi 10 sampai 5000 karakter.";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { message: "Periksa kembali isian form.", errors },
      { status: 400 },
    );
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error("Supabase belum dikonfigurasi: SUPABASE_URL atau SUPABASE_ANON_KEY kosong.");
    return Response.json(
      { message: "Layanan kontak belum dikonfigurasi." },
      { status: 500 },
    );
  }

  try {
    const supabase = createClient(url, anonKey);
    const { error } = await supabase.from("pesan_kontak").insert(form);

    if (error) {
      console.error("Supabase gagal menyimpan pesan kontak:", error);
      return Response.json(
        { message: "Pesan gagal disimpan. Coba lagi nanti." },
        { status: 500 },
      );
    }

    return Response.json({ message: "Pesan berhasil disimpan." }, { status: 201 });
  } catch (error) {
    console.error("Gagal terhubung ke Supabase:", error);
    return Response.json(
      { message: "Pesan gagal disimpan. Coba lagi nanti." },
      { status: 500 },
    );
  }
}
