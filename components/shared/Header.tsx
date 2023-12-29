import { SignUp, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";

function Header() {
  return (
    <header className="wrapper flex m-auto ">
      <Link href={"/"} className="w-36 ">
        <Image
          src={"/assets/images/logo.svg"}
          alt="logo"
          width={120}
          height={35}
        />
      </Link>

      <div>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
      </div>

      <div className="w-36 flex justify-end gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
