import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
//href means where is it pointing 

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container realtive z-30 py-5">
      <Link href="/">
        <Image src="/herobg.svg" alt="logo" width={100} height=
          {73} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href="/login">
          <Button
            type="button"
            title="Login"
            icon="/user-svgrepo-com.svg"
          />
        </Link>
      </div>

      {<Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block curso-pointer lg:hidden"
      />}
    </nav>
  )
}

export default Navbar