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
        <audio id="bg-music" autoPlay loop muted>
          <source src="/bgmusic.mp3" type="audio/mpeg" />
        </audio>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', () => {
                const audio = document.getElementById('bg-music');
                if (audio) {
                  audio.muted = false;
                  audio.play().catch(() => {});
                }
              });
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
