import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Root layout — just a passthrough for next-intl [locale] layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
