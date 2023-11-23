import Navbar from "@/components/navbar/navbar";
import "../styles/globals.css";

export const metadata = {
  title: "TugasPMW-W12",
  description: "D121211019 - Reza Kurniawan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
