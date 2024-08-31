import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pet Details App",
  description: "Discover amazing pet breeds!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Pet Details App</title>
        <meta name="description" content="Discover amazing pet breeds!" />
        <meta property="og:title" content="Pet Details App" />
        <meta
          property="og:description"
          content="Discover amazing pet breeds!"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
