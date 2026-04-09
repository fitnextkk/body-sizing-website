import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: '難波 パーソナルジム | JR難波駅徒歩2分 完全個室・30〜50代ボディメイク おすすめ | Body Sizing',
  description:
    '大阪難波の完全予約制パーソナルジム。30〜50代女性向けにマンツーマン指導。JR難波駅徒歩2分・完全個室で通いやすい。春のボディメイク応援キャンペーン実施中！体験・入会金無料（先着10名）。',
  keywords: [
    'パーソナルジム',
    '難波',
    'なんば',
    '心斎橋',
    'ダイエット',
    'ボディメイク',
    'パーソナルトレーニング',
    '大阪',
  ],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'Body Sizing | 難波駅前の完全予約制パーソナルジム',
    description:
      '大阪・難波駅徒歩2分の完全予約制パーソナルトレーニングジム。30〜50代のダイエット・ボディメイクに特化。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3f0' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
