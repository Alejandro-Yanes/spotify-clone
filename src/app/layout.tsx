import "./globals.css";

import { Figtree } from "next/font/google";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UploadModal from "@/components/modals/UploadModal";
import UserProvider from "@/providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <UploadModal />
            <Layout>{children}</Layout>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
