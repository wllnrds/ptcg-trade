import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body style={{ height: "100vh", width: "100vw" }}>
        {children}
      </body>
    </html>
  );
}
