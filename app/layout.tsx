import type {Metadata} from 'next';
import {Space_Mono} from 'next/font/google'
import './globals.css'
import React from 'react';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Memonize',
  description: 'Every hour is a memo. Memonize your day.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}