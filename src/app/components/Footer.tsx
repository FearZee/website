import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" flex gap-4 justify-end px-6  py-2">
      <Link href="/impressum">Impressum</Link>
      <Link href="/datenschutz">Datenschutz</Link>
    </footer>
  );
};
