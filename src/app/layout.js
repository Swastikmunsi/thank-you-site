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
          src="https://whyp.it/embeds/track/323173?token=jDksW"
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
