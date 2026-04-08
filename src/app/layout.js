
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
import "./globals.css";
import { ThemeProvider } from "../components/ui/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <script
          // Set theme class before React hydrates to prevent flash.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'};var d=document.documentElement;d.classList.toggle('dark',t==='dark')}catch(e){}})();`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
