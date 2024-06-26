import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.scss";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// const inter = Work_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });


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
      <body>
        <TanstackQueryProvider>
          {children}
          <ToastContainer
              toastClassName="mt-14"
              theme="colored"
              hideProgressBar={true}
              autoClose={300}
            />
        </TanstackQueryProvider>
        </body>
    </html>
  );
}
