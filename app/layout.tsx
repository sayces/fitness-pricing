import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Фитнес Тарифы',
  description: 'Выберите подходящий тариф для достижения ваших фитнес-целей',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
