import React from "react";
import Image from "next/image";
import { navLinks } from "@/utils/data";
import { Button } from "../ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";

const Header = () => {
  return (
    <header>
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
              <a href={item.link}>{item.name}</a>
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
