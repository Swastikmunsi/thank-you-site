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
        <iframe
          src="WhatsApp Audio 2025-08-22 at 00.24.03_5eb58c15.mp3 (online-audio-converter.com) (1).mp3"
          width="0"
          height="0"
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          allow="autoplay"
        ></iframe>

        {children}
      </body>
    </html>
  );
}
