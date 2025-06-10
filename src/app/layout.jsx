import { Noto_Sans_KR } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/server/Header/Header';
import { Analytics } from '@vercel/analytics/next';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: '안주환 | 포트폴리오',
  description:
    '개발자 안주환입니다. 좋아하는 것을 만들고 재밌는 것을 만듭니다.',
  openGraph: {
    title: '안주환 | 포트폴리오',
    description:
      '개발자 안주환입니다. 좋아하는 것을 만들고 재밌는 것을 만듭니다.',
    url: 'https://juhwannn.com',
    siteName: 'juhwannn.com',
    images: [
      {
        url: 'https://www.juhwannn.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'juhwannn 포트폴리오 미리보기',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
