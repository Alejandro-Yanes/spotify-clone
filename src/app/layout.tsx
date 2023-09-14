import "./globals.css";

import { Figtree } from "next/font/google";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UploadModal from "@/components/modals/UploadModal";
import UserProvider from "@/providers/UserProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <UploadModal />
            <Layout songs={userSongs}>{children}</Layout>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
