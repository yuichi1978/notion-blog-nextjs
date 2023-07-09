import { WrappedBuildError } from "next/dist/server/base-server";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 lg:w-2/4">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/" className="text-2xl font-medium">
          Notion_Site
        </Link>
        <div>
          <ul className="flex items-center text-sm py-4">
            <li>
              <Link href="/" className="block px-1 md:px-4 py-2 hover:text-teal-200 transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-1 md:px-4 py-2 hover:text-teal-200 transition-all duration-300">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-1 md:px-4 py-2 hover:text-teal-200 transition-all duration-300">
                Qiita
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;