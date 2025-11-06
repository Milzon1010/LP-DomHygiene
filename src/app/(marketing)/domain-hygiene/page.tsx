// src/app/(marketing)/domain-hygiene/page.tsx
// FIX-ONLY: tanpa dep baru, Tailwind utility saja.
"use client";

import Link from "next/link";
import { useState } from "react";

const FORM_URL =
  "https://forms.gle/B6TyZERjNVNfEi7o9";
const MAILTO =
  "mailto:hello.info@allanraytechsight.co.id?subject=Domain%20Hygiene%20link%20whatsapp";

export default function DomainHygieneLanding() {
  // Badge manual (ganti teks sesuai kapasitas harian)
  const [slotText] = useState<"AVAILABLE TODAY" | "FULLY BOOKED — Next Slot: Besok 10:00 WIB">(
    "AVAILABLE TODAY"
  );

  return (
    <main className="bg-[#F8FAFC] text-[#141823]">
      {<section className="relative overflow-hidden">
  {/* top gradient bar */}
  <div className="h-16 bg-gradient-to-r from-[#00C2FF] to-[#4B6BFB]" />

  <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
    <p className="mb-3 text-xs tracking-widest text-white/80">
      <span className="rounded bg-[#161923] px-2 py-1 text-white">
        AVAILABLE TODAY
      </span>
    </p>

    <h1 className="text-[28px] leading-[1.2] md:text-[34px] font-semibold">
      Email sering nyasar ke <span className="underline underline-offset-4">Spam</span>?{" "}
      Jangan cek satu-satu. <span className="whitespace-nowrap">Domain Hygiene</span> kami audit DNS-mu
      end-to-end dan bantu <span className="whitespace-nowrap">Inbox-rate</span> naik—cepat, rapi,
      tanpa akses ke kotak masuk.
    </h1>

    <p className="mt-4 max-w-3xl text-[16px] md:text-[18px] text-[#6E7681]">
      Fokus di DNS & autentikasi pengirim (SPF, DKIM, DMARC, MX, PTR, TLS).
      <strong> Tanpa</strong> minta password email.
    </p>

    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <a
        href={FORM_URL}
        className="inline-flex items-center justify-center rounded-xl bg-[#161923] px-5 py-3 text-white"
      >
        Mulai Audit Sekarang — Rp55.000 / domain / 336 jam
      </a>
      <a
        href={MAILTO}
        className="inline-flex items-center justify-center rounded-xl border px-5 py-3"
      >
        Hubungi via Email
      </a>
      <a
        href="#faq"
        className="inline-flex items-center justify-center rounded-xl border px-5 py-3"
      >
        FAQ & Privasi
      </a>
    </div>

    <p className="mt-3 text-sm text-[#6E7681]">
      Harga market luar: <strong>USD 50–100 / 48 jam</strong>. Kita:{" "}
      <strong>Rp55.000 / domain / 336 jam (~2 minggu)</strong> layanan aktif.
    </p>

    {/* highlight 3 poin */}
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border bg-white p-4">
        <h3 className="font-semibold">Inbox-first</h3>
        <p className="mt-1 text-sm text-[#6E7681]">
          Perbaiki sinyal ke provider (Google/Microsoft/Yahoo) via record & alignment.
        </p>
      </div>
      <div className="rounded-2xl border bg-white p-4">
        <h3 className="font-semibold">DNS-only & aman</h3>
        <p className="mt-1 text-sm text-[#6E7681]">Kami tidak menyentuh isi email / akun pengguna.</p>
      </div>
      <div className="rounded-2xl border bg-white p-4">
        <h3 className="font-semibold">Cepat & transparan</h3>
        <p className="mt-1 text-sm text-[#6E7681]">Ringkasan audit + langkah perbaikan prioritas.</p>
      </div>
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href="#report-sample"
        className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm"
      >
        Lihat Contoh Laporan (placeholder)
      </a>
    </div>
  </div>
</section>
    }
      <section className="relative overflow-hidden">
        {/* top gradient bar */}
        <div className="h-16 bg-gradient-to-r from-[#00C2FF] to-[#4B6BFB]" />

        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <p className="mb-3 text-xs tracking-widest text-white/80">
            {/* badge slot (manual) */}
            <span className="rounded bg-[#161923] px-2 py-1 text-white">{slotText}</span>
          </p>

          <h1 className="text-[28px] leading-[1.2] md:text-[34px] font-semibold">
            Email sering nyasar ke <span className="underline underline-offset-4">Spam</span>?{" "}
            Jangan cek satu-satu. <span className="whitespace-nowrap">Domain Hygiene</span> kami
            audit DNS-mu end-to-end dan bantu <span className="whitespace-nowrap">Inbox-rate</span> naik
            — cepat, rapi, tanpa akses ke kotak masuk.
          </h1>

          <p className="mt-4 max-w-3xl text-[16px] md:text-[18px] text-[#6E7681]">
            Fokus di DNS & autentikasi pengirim (SPF, DKIM, DMARC, MX, PTR, TLS).{" "}
            <strong>Tanpa</strong> minta password email.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={FORM_URL}
              className="inline-flex items-center justify-center rounded-xl bg-[#161923] px-5 py-3 text-white"
            >
              Mulai Audit Sekarang — Rp55.000 / domain / 336 jam
            </Link>
            <Link
              href={MAILTO}
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3"
            >
              Hubungi via Email
            </Link>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3"
            >
              FAQ & Privasi
            </a>
          </div>

          <p className="mt-3 text-sm text-[#6E7681]">
            Harga market luar: <strong>USD 50–100 / 48 jam</strong>. Kita:{" "}
            <strong>Rp55.000 / domain / 336 jam (~2 minggu)</strong> layanan aktif.
          </p>

          {/* highlight 3 poin */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold">Inbox-first</h3>
              <p className="mt-1 text-sm text-[#6E7681]">
                Perbaiki sinyal ke provider (Google/Microsoft/Yahoo) via record & alignment.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold">DNS-only & aman</h3>
              <p className="mt-1 text-sm text-[#6E7681]">
                Kami tidak menyentuh isi email / akun pengguna.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold">Cepat & transparan</h3>
              <p className="mt-1 text-sm text-[#6E7681]">
                Ringkasan audit + langkah perbaikan prioritas.
              </p>
            </div>
          </div>

          {/* tombol sekunder */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#report-sample"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm"
            >
              Lihat Contoh Laporan (placeholder)
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="text-[24px] font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Apa itu Domain Hygiene?",
              a: "Audit & perbaikan konfigurasi DNS pengirim: SPF, DKIM, DMARC (policy, rua/ruf), MX, PTR/Reverse DNS, TLS/MTA-STS, BIMI (opsional), alignment, dan reputasi dasar.",
            },
            {
              q: "Apakah aman?",
              a: "Ya. DNS-only. Kami tidak minta password email, tidak membaca isi email, dan semua perubahan dilakukan di pihak Anda (kami beri instruksi atau record siap tempel).",
            },
            {
              q: "Apakah butuh akses panel DNS?",
              a: "Tidak. Jika mau, Anda lakukan sendiri; kami kirimkan record & urutan penerapan.",
            },
            {
              q: "Bisa untuk banyak domain?",
              a: "Bisa. Harga per domain; masukkan semua domain pengirim yang dipakai.",
            },
            {
              q: "Berapa lama berlaku?",
              a: "Paket Rp55.000 mencakup dukungan 336 jam (~2 minggu) sejak audit pertama (termasuk 1–2 siklus revisi ringan).",
            },
            {
              q: "Jika kuota teknisi sedang penuh?",
              a: "Anda tetap bisa order. Sistem kami akan memberi Next Slot terdekat atau otomatis menjadwalkan pengerjaan berikutnya.",
            },
            {
              q: "Bagaimana saya tahu ini bukan scam?",
              a: "Kami tidak meminta akses email. Hanya DNS record yang memang bersifat konfigurasi publik. Seluruh langkah dan perubahan terdokumentasi; Anda cek dan terapkan sendiri.",
            },
            {
              q: "Output yang saya terima?",
              a: "1) Laporan audit (temuan & prioritas), 2) Record siap tempel, 3) Checklist verifikasi (digunakan untuk uji Inbox, TLS, alignment).",
            },
            {
              q: "Apakah masalah langsung 100% hilang?",
              a: "Tidak ada jaminan instan. Tapi hygiene & alignment benar adalah prasyarat utama meningkatkan deliverability; biasanya hasil mulai terasa 24–72 jam setelah propagasi DNS.",
            },
            {
              q: "Refund?",
              a: "Jika dalam 7 hari tidak ada perubahan status DNS (SPF/DKIM/DMARC/MX) sesuai rekomendasi kami karena faktor dari pihak kami, refund 100%.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-5">
              <h3 className="font-medium">{item.q}</h3>
              <p className="mt-1 text-sm text-[#6E7681]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRIVACY ===== */}
      <section id="privacy" className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-[24px] font-semibold">Privasi & Keamanan</h2>
        <p className="mt-3 max-w-3xl text-[15px] text-[#6E7681]">
          Kami bekerja tanpa akses ke akun email Anda—hanya memeriksa & merekomendasikan record DNS.
          Kami tidak menyimpan isi email, kredensial, atau kontak. Jika diperlukan, NDA satu halaman
          tersedia.
        </p>
      </section>

      {/* ===== VIDEO SCRIPT (untuk tim konten) ===== */}
      <section id="video-script" className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-[24px] font-semibold">Script Video 15 Detik</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm text-[#6E7681]">
          <li>0–3s: “Email bisnis Anda nyasar ke Spam?”</li>
          <li>3–6s: “Jangan buang waktu cek satu-satu.”</li>
          <li>6–9s: “Domain Hygiene: SPF, DKIM, DMARC, MX — beres.”</li>
          <li>9–12s: “Rp55.000 / domain / 336 jam dukungan.”</li>
          <li>12–15s: “Klik Mulai Audit. DNS-only, aman.”</li>
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={FORM_URL}
            className="inline-flex items-center justify-center rounded-xl bg-[#161923] px-5 py-3 text-white"
          >
            Mulai Audit Sekarang — Rp55.000 / domain / 336 jam
          </Link>
          <Link href={MAILTO} className="inline-flex items-center justify-center rounded-xl border px-5 py-3">
            Hubungi via Email
          </Link>
        </div>
      </section>
    </main>
  );
}
