import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Body Sizing | 難波駅前の完全予約制パーソナルジム',
  description:
    '大阪・難波駅徒歩2分の完全予約制パーソナルトレーニングジム。30〜50代のダイエット・ボディメイクに特化。なんばエリアからもアクセス良好。無料カウンセリング実施中。',
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
