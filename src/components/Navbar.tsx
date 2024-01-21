import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Dev_Intern_logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">Dev Intern</span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Create a Job</Link>
        </Button>
      </nav>
    </header>
  );
}
