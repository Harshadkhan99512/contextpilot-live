import "./globals.css";

export const metadata = {
  title: "ContextPilot — Live",
  description: "Streaming demo without keys"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, Segoe UI, Arial, sans-serif", background: "#0f172a", color: "#e5e7eb", margin: 0 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px" }}>{children}</div>
      </body>
    </html>
  );
}
