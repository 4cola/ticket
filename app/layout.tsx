import { GeistSans } from "geist/font/sans";
import '@/assets/css/globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  export const dynamic = 'auto';
  export const dynamicParams = true;
  export const revalidate = 60;
  export const runtime = 'nodejs';
  export const preferredRegion = 'global';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export const viewport = {
	width: 'device-width',
	'initial-scale': 1.0,
	'minimum-scale': 1.0,
	'maximum-scale': 1.0,
	'user-scalable': 'yes',
	themeColor: 'light'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
