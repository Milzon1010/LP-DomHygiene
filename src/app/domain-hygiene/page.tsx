/* cspell:disable */
/* eslint-disable */

"use client";

import { useEffect, useState } from "react";

const FORM_URL = "https://forms.gle/B6TyZERjNVNfEi7o9";
const MAILTO =
  "mailto:hello.info@allanraytechsight.co.id?subject=Domain%20Hygiene%20link%20whatsapp";

type Theme = "light" | "dark";

export default function DomainHygieneLanding() {
  const [slotText] = useState<
    "AVAILABLE TODAY" | "FULLY BOOKED — Next Slot: Besok 10:00 WIB"
  >("AVAILABLE TODAY");

  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = (localStorage.getItem("dh-theme") as Theme | null) ?? null;
    if (saved) setTheme(saved);
    else {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("dh-theme", next);
  };

  return (
    <main className={`page ${theme === "dark" ? "dark" : ""}`}>
      {/* header mini */}
      <header className="header">
        <div className="container hdr">
          <div className="brand">
            <span className="logoDot" /> Domain Hygiene
          </div>
          <button className="btn btnGhost sm" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="heroStripe" />
        <div className="container">
          <div className="topRow">
            <span className="badge">{slotText}</span>
          </div>

          <h1 className="title">
            Email sering nyasar ke <span className="txtGrad">Spam</span>? Jangan cek satu-satu{" "}
            <span className="nowrap txtGrad2">Domain Hygiene</span> kami audit DNS-mu end-to-end
            dan bantu <span className="nowrap">Inbox-rate</span> naik — cepat, rapi, tanpa akses ke kotak masuk.
          </h1>

          <p className="lead">
            Fokus di DNS & autentikasi pengirim (SPF, DKIM, DMARC, MX, PTR, TLS).
            <strong> Tanpa</strong> minta password email.
          </p>

          <div className="ctaRow">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
            >
              Mulai Audit — Rp55.000 / 336 jam
            </a>
            <a href={MAILTO} className="btn btnOutline">
              Hubungi via Email
            </a>
            <a href="#faq" className="btn btnOutline">
              FAQ & Privasi
            </a>
          </div>

          <p className="note">
            Harga market luar: <strong>USD 50–100 / 48 jam</strong>. Kita:{" "}
            <strong>Rp55.000 / domain / 336 jam (~2 minggu)</strong> layanan aktif.
          </p>

          <div className="grid3">
            <div className="card accent-cyan">
              <h3 className="h3">Inbox-first</h3>
              <p className="muted">
                Perbaiki sinyal ke provider (Google/Microsoft/Yahoo) via record & alignment.
              </p>
            </div>
            <div className="card accent-pink">
              <h3 className="h3">DNS-only & aman</h3>
              <p className="muted">Kami tidak menyentuh isi email / akun pengguna.</p>
            </div>
            <div className="card accent-amber">
              <h3 className="h3">Cepat & transparan</h3>
              <p className="muted">Ringkasan audit + langkah perbaikan prioritas.</p>
            </div>
          </div>

          <div className="center">
            <a href="#report-sample" className="btn btnGhost sm">
              Lihat Contoh Laporan
            </a>
          </div>
        </div>
      </section>

      {/* ===== VISUAL STORY (EMBED) ===== */}
      <section className="section">
        <div className="container">
          <div className="card accent-blue">
            <h2 className="h2" style={{ marginBottom: 12 }}>Visual Story</h2>
            <div className="iframeWrap">
              <iframe
                src="/story/email-hygiene-story.html"
                title="Email Domain Hygiene — Visual Story"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== REPORT ===== */}
      <section id="report-sample" className="section">
        <div className="container narrow">
          <div className="card accent-violet">
            <h2 className="h2">Contoh Laporan (ringkas)</h2>
            <ul className="list">
              <li>SPF: multiple includes, ~all → rekomendasi -all.</li>
              <li>DKIM: 1024-bit → rekomendasi 2048-bit, rotasi 6 bulan.</li>
              <li>DMARC: p=none → quarantine → reject (bertahap).</li>
              <li>MX: prioritas & target diverifikasi, fallback OK.</li>
              <li>PTR/Reverse DNS: selaras dengan HELO/EHLO.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="h2 centerText">FAQ</h2>
        </div>
        <div className="container">
          <div className="grid2">
            {[
              {
                q: "Apa itu Domain Hygiene?",
                a: "Audit & perbaikan konfigurasi DNS pengirim: SPF, DKIM, DMARC (policy, rua/ruf), MX, PTR/Reverse DNS, TLS/MTA-STS, BIMI (opsional), alignment, dan reputasi dasar.",
              },
              {
                q: "Apakah aman?",
                a: "Ya. DNS-only. Kami tidak minta password email, tidak membaca isi email, dan semua perubahan dilakukan di pihak Anda.",
              },
              {
                q: "Perlu akses panel DNS?",
                a: "Tidak wajib. Jika mau, Anda lakukan sendiri; kami kirimkan record & urutan penerapan.",
              },
              { q: "Bisa untuk banyak domain?", a: "Bisa. Harga per domain." },
              {
                q: "Masa dukungan?",
                a: "Rp55.000 mencakup dukungan 336 jam (~2 minggu) sejak audit pertama.",
              },
              {
                q: "Kuota teknisi penuh?",
                a: "Order tetap diterima. Sistem memberi Next Slot terdekat.",
              },
              {
                q: "Apakah hasil instan?",
                a: "Tidak ada jaminan instan; umumnya terasa 24–72 jam setelah propagasi.",
              },
              {
                q: "Refund?",
                a: "Jika dalam 7 hari tidak ada perubahan status DNS sesuai rekomendasi kami karena faktor dari pihak kami, refund 100%.",
              },
            ].map((item, idx) => (
              <div key={idx} className="card accent-teal">
                <h3 className="h3">{item.q}</h3>
                <p className="muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRIVACY ===== */}
      <section id="privacy" className="section">
        <div className="container narrow">
          <div className="card accent-blue">
            <h2 className="h2">Privasi & Keamanan</h2>
            <p className="muted">
              Kami bekerja tanpa akses ke akun email Anda—hanya memeriksa & merekomendasikan record
              DNS. Kami tidak menyimpan isi email, kredensial, atau kontak. Jika diperlukan, NDA satu
              halaman tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SCRIPT ===== */}
      <section id="video-script" className="section">
        <div className="container narrow">
          <div className="card accent-orange">
            <h2 className="h2">Script Video 15 Detik</h2>
            <ol className="list decimal">
              <li>0–3s: “Email bisnis Anda nyasar ke Spam?”</li>
              <li>3–6s: “Jangan buang waktu cek satu-satu.”</li>
              <li>6–9s: “Domain Hygiene: SPF, DKIM, DMARC, MX — beres.”</li>
              <li>9–12s: “Rp55.000 / domain / 336 jam dukungan.”</li>
              <li>12–15s: “Klik Mulai Audit. DNS-only, aman.”</li>
            </ol>

            <div className="center">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
              >
                Mulai Audit Sekarang
              </a>
              <a href={MAILTO} className="btn btnOutline">
                Hubungi via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Local styles ===== */}
      <style jsx>{`
        /* ---------- THEME: LIGHT ---------- */
        .page {
          --bg: #f7f9fc;
          --ink: #0f1420;
          --muted: #667085;
          --card: #ffffff;
          --border: #e6e9ef;

          /* warna-warni */
          --c-cyan: #00c2ff;
          --c-blue: #4b6bfb;
          --c-pink: #ff3d81;
          --c-amber: #f59e0b;
          --c-violet: #8b5cf6;
          --c-teal: #14b8a6;
          --c-orange: #fb923c;

          --shadow: 0 10px 30px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.08);
          background:
            radial-gradient(1000px 380px at 15% -12%, rgba(75,107,251,.15), transparent 60%),
            radial-gradient(1000px 380px at 85% -12%, rgba(0,194,255,.18), transparent 60%),
            var(--bg);
          color: var(--ink);
        }

        /* ---------- THEME: DARK ---------- */
        .page.dark {
          --bg: #0b1220;
          --ink: #e6ebf5;
          --muted: #a5b0c2;
          --card: #0f172a;
          --border: #1f2a44;
          --shadow: 0 10px 30px rgba(0,0,0,.35), 0 1px 3px rgba(0,0,0,.5);

          background:
            radial-gradient(1000px 380px at 15% -12%, rgba(75,107,251,.25), transparent 60%),
            radial-gradient(1000px 380px at 85% -12%, rgba(0,194,255,.22), transparent 60%),
            var(--bg);
          color: var(--ink);
        }

        .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .container.narrow { max-width: 900px; }

        .header { position: sticky; top: 0; z-index: 10; backdrop-filter: blur(6px); }
        .hdr { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; }
        .brand { font-weight: 800; letter-spacing: .02em; display: inline-flex; align-items: center; gap: 8px; }
        .logoDot { width: 10px; height: 10px; border-radius: 50%;
          background-image: linear-gradient(90deg, var(--c-cyan), var(--c-pink), var(--c-amber));
          box-shadow: 0 0 12px rgba(0,194,255,.6);
        }

        .hero { position: relative; padding: 50px 0 40px; }
        .heroStripe {
          height: 68px;
          border-bottom-left-radius: 18px; border-bottom-right-radius: 18px;
          background-image: linear-gradient(90deg, var(--c-cyan), var(--c-blue), var(--c-pink), var(--c-amber));
          background-size: 200% 100%;
          animation: slide 8s linear infinite;
          box-shadow: 0 12px 28px rgba(75,107,251,.28);
        }
        @keyframes slide { 0% { background-position: 0% } 100% { background-position: 200% } }

        .topRow { display: flex; justify-content: flex-start; }
        .badge {
          margin-top: 16px;
          display: inline-flex; align-items: center;
          padding: 6px 12px; font-size: 12px; letter-spacing: .12em;
          color: #fff; border-radius: 999px;
          background-image: linear-gradient(90deg, var(--c-blue), var(--c-cyan));
          box-shadow: 0 6px 16px rgba(0, 194, 255, .35);
        }

        .title { margin: 16px 0 12px; font-weight: 900; line-height: 1.18; font-size: 32px; }
        @media (min-width: 900px) { .title { font-size: 40px; } }

        .txtGrad {
          background: linear-gradient(90deg, var(--c-pink), var(--c-amber));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .txtGrad2 {
          background: linear-gradient(90deg, var(--c-cyan), var(--c-blue));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }

        .lead { font-size: 17px; color: var(--muted); max-width: 760px; }

        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; margin: 22px 0 8px; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 16px; border-radius: 14px; text-decoration: none;
          font-weight: 700; border: 1px solid var(--border);
          transition: transform .08s ease, box-shadow .2s ease, background .2s ease, opacity .2s ease;
        }
        .btnPrimary {
          color: #fff; border: 0; box-shadow: var(--shadow);
          background-image: linear-gradient(90deg, var(--c-cyan), var(--c-blue), var(--c-pink));
          background-size: 200% 100%; animation: slide 10s linear infinite;
        }
        .btnPrimary:hover { transform: translateY(-1px); opacity: .95; }

        .btnOutline {
          background: transparent; color: var(--ink);
          border-image: linear-gradient(90deg, var(--c-amber), var(--c-pink)) 1;
        }
        .page.dark .btnOutline { color: var(--ink); }

        .btnGhost { background: transparent; color: var(--ink); }
        .btnGhost:hover { background: rgba(255,255,255,.06); }
        .btn.sm { padding: 8px 12px; font-weight: 600; }

        .note { font-size: 13px; color: var(--muted); margin-top: 6px; }

        .grid3 { display: grid; gap: 16px; margin: 26px 0 10px; grid-template-columns: 1fr; }
        @media (min-width: 760px) { .grid3 { grid-template-columns: repeat(3, 1fr); } }

        .grid2 { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 900px) { .grid2 { grid-template-columns: repeat(2, 1fr); } }

        .card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 18px; padding: 18px 18px; box-shadow: var(--shadow); position: relative;
        }
        .card:before {
          content: ""; position: absolute; inset: 0; padding: 1px; border-radius: 18px;
          background: linear-gradient(120deg, var(--c-cyan), var(--c-blue), var(--c-pink), var(--c-amber));
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; opacity: .0;
          transition: opacity .2s ease;
        }
        .card:hover:before { opacity: .9; }

        .accent-cyan  { box-shadow: 0 10px 24px rgba(0,194,255,.15); }
        .accent-pink  { box-shadow: 0 10px 24px rgba(255,61,129,.15); }
        .accent-amber { box-shadow: 0 10px 24px rgba(245,158,11,.15); }
        .accent-violet{ box-shadow: 0 10px 24px rgba(139,92,246,.15); }
        .accent-teal  { box-shadow: 0 10px 24px rgba(20,184,166,.15); }
        .accent-blue  { box-shadow: 0 10px 24px rgba(59,130,246,.15); }
        .accent-orange{ box-shadow: 0 10px 24px rgba(251,146,60,.15); }

        .h2 { font-size: 22px; font-weight: 900; margin: 2px 0 6px; }
        .h3 { font-size: 16px; font-weight: 800; margin: 0 0 6px; }
        .muted { color: var(--muted); font-size: 14px; line-height: 1.6; }

        .section { padding: 52px 0 60px; }
        .center { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; justify-content: center; margin-top: 16px; }
        .centerText { text-align: center; }

        .list { margin: 10px 0 0; color: var(--muted); }
        .list.decimal { list-style: decimal; padding-left: 20px; }
        .nowrap { white-space: nowrap; }

        /* --- iframe wrapper --- */
        .iframeWrap {
          width: 100%;
          border-radius: 18px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          overflow: hidden;
          background: var(--card);
        }
        .iframeWrap iframe {
          display: block;
          width: 100%;
          height: min(70vh, 820px);
          border: 0;
          background: #000; /* jika HTML story dark */
        }
      `}</style>
    </main>
  );
}
