"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";
import InputWithIcon from "@/components/ui/inputWithIcon";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Login Data:", data);
    router.push("/dashboard");
  };

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="col-span-1 relative lg:block hidden">
        <Image
          src="/loginImage.jpg"
          alt="Login Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-white flex flex-col items-center col-span-2 lg:col-span-1 p-6 md:p-20 xl:p-32 gap-6 justify-center">
        <div className="rounded-2xl bg-primary p-6 md:p-10 w-full">
          <p className="text-lg md:text-3xl text-white text-center font-extrabold">
            VitaCare
          </p>
          <p className=" text-md md:text-lg text-white text-center mt-1">
            Medical Software{" "}
          </p>
        </div>
        <p className="text-center text-black text-md md:text-lg ">
          Welcome to VitaCare
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <InputWithIcon
                    className="p-6 rounded-3xl pl-10"
                    label="Email"
                    field={field}
                    placeholder="Enter your email"
                    type="email"
                    icon={Mail}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <InputWithIcon
                    field={field}
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    icon={Lock}
                    showPasswordToggle={true}
                    className="p-6 rounded-3xl pl-10"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant={"default"} className="w-full">
              Submit
            </Button>
          </form>
        </Form>

        <div className="space-y-4">
          <p className="text-center text-black text-sm">Or Login with</p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" className="w-9 h-9">
              <Image
                src="/googleIcon.svg"
                alt="Google"
                width={24}
                height={24}
              />
            </Button>
            <Button variant="outline" size="icon" className="w-9 h-9">
              <Image src="/fbIcon.svg" alt="Facebook" width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
