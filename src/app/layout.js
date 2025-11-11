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
          <source
            src="https://limewire.com/d/z6Pda#Tmk3nYBspM"
            type="audio/mpeg"
          />
        </audio>

        {children}
      </body>
    </html>
  );
}
