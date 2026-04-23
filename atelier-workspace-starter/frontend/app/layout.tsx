import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atelier Workspace',
  description: 'A personal studio for writing, art, and experimental projects.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
