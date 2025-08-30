import React from "react";
import Image from "next/image";
import { navLinks } from "@/utils/data";
import { Button } from "../ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center">
      <nav className="container flex items-center justify-between">
        <Image
          className="dark:invert"
          src="/images/hexpay.png"
          alt="HexPay logo"
          width={94}
          height={49.46371078491211}
          priority
        />
        <ul className="flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="font-aspekta font-normal text-base"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex">
          <Button variant="outline">
            <ArrowUpRight />
            Get Started
          </Button>
          <Button>
            <CirclePlay />
            Book a Demo
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
