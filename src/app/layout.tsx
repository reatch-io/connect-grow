import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://reatch.io"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  title: {
    default: "Reatch.io — Customer Engagement Platform | Email & WhatsApp Marketing",
    template: "%s | Reatch.io",
  },
  description:
    "Connect, communicate, and convert with Reatch.io. Intelligent email and WhatsApp campaigns, advanced segmentation, real-time analytics, and powerful automation for growth-minded teams.",
  keywords: [
    "customer engagement",
    "email marketing",
    "WhatsApp marketing",
    "marketing automation",
    "campaign management",
    "multi-channel marketing",
  ],
  openGraph: {
    siteName: "Reatch.io",
    images: [{ url: "/reatch-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/reatch-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

