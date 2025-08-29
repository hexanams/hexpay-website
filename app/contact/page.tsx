import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="w-full py-16">
      <div className="container flex">
        <div className="relative h-[500px] w-[500px]">
          <Image
            src="/images/team-business.jpg"
            alt="team business"
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <h1>Contact Us</h1>
          <p>For any assistance, please contact us at support@hexpay.ai</p>
          <p>For any business inquiries, you can reach us at hello@hexpay.ai</p>
          <p>We typically reply within 24 business hours.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
