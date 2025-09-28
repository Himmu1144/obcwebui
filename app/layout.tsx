import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Only Big Cars - Ghaziabad',
  description: 'Premium Car Service and Care',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}