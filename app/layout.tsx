import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '鹿種類識別アプリ',
  description: '画像をアップロードして、鹿の種類を識別するアプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
