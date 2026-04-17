import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local"

const poppins = Poppins({
  weight:["100","200","400","500","600","700","800"]
});

export const bnFont = localFont({
  src:"./../fonts/mayaboti-normal.ttf"
})

export const metadata = {
  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz"
  },
  description: "Using  next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
    >
      <body className={`${poppins.className} antialiased`}>

        <header className="py-2 md:max-w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:max-w-11/12 mx-auto min-h-[calc(100vh-302px)] flex flex-col justify-between items-center">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
