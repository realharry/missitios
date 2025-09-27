import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "MisSitios - Directorio de Negocios de Ciudad de México",
  description: "Descubre los mejores sitios web de negocios locales en Ciudad de México. Tu directorio confiable para encontrar restaurantes, servicios y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <ThemeProvider
          defaultTheme="light"
          defaultColorTheme="default"
          storageKey="missitios-theme"
          colorStorageKey="missitios-color-theme"
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
