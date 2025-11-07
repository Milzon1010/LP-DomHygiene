// src/app/layout.tsx
export const metadata = {
  title: "LP Domain Hygiene",
  description: "Landing sederhana untuk Domain Hygiene.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
