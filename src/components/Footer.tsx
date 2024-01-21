import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { Separator } from "./ui/separator";
export default function Footer() {
  return (
    <footer className="m-4 rounded-lg  bg-white shadow dark:bg-gray-900">
      <Separator />
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Dev_Intern_logo" width={40} height={40} />
            <span className="text-xl font-bold tracking-tight">Dev Intern</span>
          </Link>

          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link
            href="https://github.com/debrajrout"
            className="hover:underline"
          >
            Debaraj
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
