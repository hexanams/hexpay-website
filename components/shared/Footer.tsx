"use client";

import React from "react";
import Image from "next/image";
import {
  companyLinks,
  legalLinks,
  socialIcons,
  supportLinks,
} from "@/utils/data";
import { Button } from "../ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema } from "@/schema/homeSchema";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { arrowRightIcon } from "@/utils/icons";

const Footer = () => {
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof subscribeSchema>) => {
    console.log({
      values,
    });
  };
  return (
    <footer className="w-full grid grid-cols-8 items-center justify-center h-[430px]">
      <div className="flex flex-col bg-white col-span-3 h-full justify-center  self-center justify-self-end mr-[100px] gap-6.5">
        <Image
          className="dark:invert"
          src="/images/hexpay.png"
          alt="HexPay logo"
          width={94}
          height={49.46371078491211}
          priority
        />
        <p className="max-w-[268px] font-aspekta font-normal text-base text-black">
          Your staff gets paid. Your taxes are filed. Your business keeps
          moving. HexPay makes payroll effortless — so you can focus on building
          your business.
        </p>
        <p className="font-aspekta font-normal text-base text-black">
          ©2025 HexPay
        </p>
        <div className="flex items-center gap-4">
          {socialIcons.map((item, i) => (
            <Button variant="ghost" size="icon" key={i}>
              <item.icon />
            </Button>
          ))}
        </div>
      </div>
      <div className="flex bg-custom-purple col-span-5 h-full items-center pl-[50px]">
        <div className="flex gap-8">
          <div className="flex flex-col items-start gap-8">
            <p className="font-aspekta font-semibold text-xl text-white">
              Company
            </p>
            <ul className="flex flex-col items-start gap-4">
              {companyLinks.map((item, i) => (
                <li
                  key={i}
                  className="font-aspekta font-normal text-sm text-custom-gray"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-8">
            <p className="font-aspekta font-semibold text-xl text-white">
              Support
            </p>
            <ul className="flex flex-col items-start gap-4">
              {supportLinks.map((item, i) => (
                <li
                  key={i}
                  className="font-aspekta font-normal text-sm text-custom-gray"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-8">
            <p className="font-aspekta font-semibold text-xl text-white">
              Legal
            </p>
            <ul className="flex flex-col items-start gap-4">
              {legalLinks.map((item, i) => (
                <li
                  key={i}
                  className="font-aspekta font-normal text-sm text-custom-gray"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-white py-8 px-[21px] w-[313px] rounded-[10px] gap-7.5">
            <p className="font-aspekta font-semibold text-base text-custom-black">
              Stay Updated with HexPay
            </p>

            <Form {...form}>
              <form className="flex" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 ">
                      <FormControl>
                        <Input
                          type="email"
                          className="px-3 py-1 h-12.5 w-full text-foreground font-normal text-sm font-sans shadow-xs rounded-none rounded-tl-[6px] rounded-bl-[6px]"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="h-12.5 w-12.5 bg-custom-dark rounded-none rounded-tr-[6px] rounded-br-[6px]"
                  size="icon"
                >
                  {arrowRightIcon()}
                </Button>
              </form>
            </Form>
            <p className="font-instrument-sans font-normal text-xs text-custom-black opacity-60">
              Get the latest updates on payroll, compliance, and smarter team
              management — straight to your inbox. No spam, just insights that
              matter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
