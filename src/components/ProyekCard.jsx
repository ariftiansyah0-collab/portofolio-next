import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
    console.log("DATA PROYEK:", proyek);
    console.log("GAMBAR URL:", proyek.gambar_url);
    console.log("Data gambar:", proyek.gambar_url);
    return (
        <Link
            href={`/proyek/${proyek.slug}`}
            className="block rounded xl hover:shadow-md">
            <Card className="h-full">
                <Image
                    src={proyek.gambar_url}
                    alt={`Tangkapan layar ${proyek.judul}`}
                    width={640}
                    height={420}
                    loading="eager"
                    className="h-auto w-full"
                />
                <CardHeader>
                    <Badge>{proyek.kategori}</Badge>
                    <CardTitle className="text-lg text-primary">{proyek.judul}
                    </CardTitle>
                    <CardDescription>{proyek.deskripsi}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}