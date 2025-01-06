import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Responsive Dashboard | @Senthilkumar',
    default: 'Responsive Dashboard by @Senthilkumar',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-kohl-beta-94.vercel.app/'),
  authors: [{name: 'Mario Gonzalez', url:'https://www.linkedin.com/in/senkumar20'}],
  keywords: ['Next.js 14', 'Responsive', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'Responsive Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    url: 'https://nextjs-dashboard-kohl-beta-94.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
