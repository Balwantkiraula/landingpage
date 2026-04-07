
import "./globals.css";



export const metadata = {
  title: {
    default: "FlowPilot — Ship faster with a modern SaaS platform",
    template: "%s — FlowPilot",
  },
  description:
    "FlowPilot helps teams automate workflows, track performance, and collaborate securely — built for speed and simplicity.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "FlowPilot",
    description:
      "Ship faster with a modern SaaS platform for teams. Automations, analytics, and collaboration in one place.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

    >
      <body>{children}</body>
    </html>
  );
}
