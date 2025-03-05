import "./globals.css";

export const metadata = {
  title: "IELTS Community",
  description: "Connect with fellow IELTS test-takers and experts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
