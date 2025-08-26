import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { faqs } from "@/utils/data";

const Faq = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container flex">
        <div className="flex relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p>Have Questions? We Have Answers.</p>
          </div>

          <Image
            src="/images/office-people.jpg"
            alt="Office people"
            width={559}
            height={530}
            priority
            className="w-[559px] h-[530px] object-cover"
          />
        </div>
        <Accordion type="single" collapsible>
          {faqs.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
