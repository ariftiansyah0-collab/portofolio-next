"use client"

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});
    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};
        if (hp.length < 10) {
            errorBaru.hp = "Nomor HP minimal 10 angka.";
        }
        if (keperluan === "") {
            errorBaru.keperluan = "Pilih salah satu keperluan.";
        }
        if (pesan.trim().length < 10) {
            errorBaru.pesan = "Pesan minimal 10 karakter.";
        }
        
    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-4">
            <div>
                <label htmlFor="nama" className="block font-semibold">
                    Nama lengkap
                </label>
                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className={kelasInput}
                />
                {error.nama && <p className="mt-1 text-sm text-aksen">{error.nama}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className={kelasInput}
                />
                {error.email && <p className="mt-1 text-sm text-aksen">{error.email}</p>}
            </div>
        </form>
    );
}

