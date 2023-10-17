import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "El Rincon Estancia",
  description: "Gualeguay, Entre Rios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
