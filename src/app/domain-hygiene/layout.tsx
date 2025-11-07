// server component (jangan tulis "use client")
export const metadata = {
  title: "Domain Hygiene — SPF DKIM DMARC MX | Rp55.000 / 336 jam",
  description:
    "Audit & perapihan DNS pengirim (SPF, DKIM, DMARC, MX, PTR/TLS). DNS-only, aman. Tanpa akses inbox. Rp55.000 per domain dengan dukungan 336 jam (~2 minggu).",
};

export default function DomainHygieneLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
