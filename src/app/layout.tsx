import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.scss";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { ToastContainer } from "react-toastify";
const inter = Work_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Lendsqr Frontend Test",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackQueryProvider>
          {children}
          <ToastContainer
              toastClassName="mt-14"
              theme="colored"
              hideProgressBar={true}
            />
        </TanstackQueryProvider>
        </body>
    </html>
  );
}
