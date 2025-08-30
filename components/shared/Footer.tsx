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
import { ArrowRight } from "lucide-react";

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
    <footer className="w-full flex items-center justify-center">
      <div className="container flex">
        <div className="flex flex-col bg-white flex-1">
          <Image
            className="dark:invert"
            src="/images/hexpay.png"
            alt="HexPay logo"
            width={94}
            height={49.46371078491211}
            priority
          />
          <p>
            Your staff gets paid. Your taxes are filed. Your business keeps
            moving. HexPay makes payroll effortless — so you can focus on
            building your business.
          </p>
          <p>©2025 HexPay</p>
          <div className="flex items-center gap-4">
            {socialIcons.map((item, i) => (
              <Button variant="ghost" size="icon" key={i}>
                <item.icon />
              </Button>
            ))}
          </div>
        </div>
        <div className="flex bg-custom-purple flex-3">
          <div className="flex">
            <div className="flex flex-col items-center">
              <p>Company</p>
              <ul className="flex flex-col items-center gap-4">
                {companyLinks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <p>Support</p>
              <ul className="flex flex-col items-center gap-4">
                {supportLinks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <p>Legal</p>
              <ul className="flex flex-col items-center gap-4">
                {legalLinks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Stay Updated with HexPay</p>

            <Form {...form}>
              <form className="flex" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormControl>
                        <Input
                          type="email"
                          className="px-3 py-1 h-9 w-full text-foreground font-normal text-sm font-sans shadow-xs"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="" size="icon">
                  <ArrowRight />
                </Button>
              </form>
            </Form>
            <p>
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
