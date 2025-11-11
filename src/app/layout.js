import "./globals.css";

export const metadata = {
  title: "I Have Something to Say...",
  description:
    "This isn’t just a website. It’s something truly special, built with love — just for you. Open it and feel it unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* 🎵 Background music */}
        <audio autoPlay loop>
          <source src="src/app/WhatsApp Audio 2025-08-22 at 00.24.03_5eb58c15.mp3 (online-audio-converter.com) (1).mp3" type="audio/mpeg" />
        </audio>

        {children}
      </body>
    </html>
  );
}
