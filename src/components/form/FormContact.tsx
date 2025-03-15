"use client";

import type React from "react";
// import type { FormContactProps } from "@/types/custom/appType";
// import { useState } from "react";
import Button from "@/components/Buttons/Button";
import { lucideIcons } from "@/icon/lucide-icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormContactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type FormContactProps = z.infer<typeof FormContactSchema>;

const FormContact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormContactProps>({
    resolver: zodResolver(FormContactSchema),
  });

  const formSubmit = (values: FormContactProps) => {
    console.log("Data yang dikirim:", values);
    reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(formSubmit)}>
      <div>
        <label htmlFor="name" className="text-md font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-gray-200 p-2 text-white placeholder-gray-500"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-600 text-sm font-bold">{errors.name?.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="email" className="text-md font-medium">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Name"
          className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-gray-200 p-2 text-white placeholder-gray-500"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-600 text-sm font-bold">{errors.email?.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="subject" className="text-md font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Enter Your Subject"
          className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-gray-200 p-2 text-white placeholder-gray-500"
          {...register("subject")}
        />
        {errors.subject && (
          <span className="text-red-600 text-sm font-bold">{errors.subject?.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="message" className="text-md font-medium">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Enter Your Message"
          className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-gray-200 p-2 h-28 text-white placeholder-gray-500"
          {...register("message")}
        />
        {errors.message && (
          <span className="text-red-600 text-sm font-bold">{errors.message?.message}</span>
        )}
      </div>
      <Button variant="loadmore" icon={<lucideIcons.Mail size={20} />} rounded={true}>
        Send Message
      </Button>
    </form>
  );
};

export default FormContact;
