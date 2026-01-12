"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const SignInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type SignInData = z.infer<typeof SignInSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInData>({ resolver: zodResolver(SignInSchema) });
  const router = useRouter();

  const onSubmit = async (data: SignInData) => {
    router.push("/dashboard");
    // Replace with your real sign-in logic (API call, etc.)
    console.log("Signing in with:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardTitle className="text-center text-[#1F2050] font-bold">Welcome Back!</CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="johndoe@gmail.com" {...register("email")} />
              {errors.email?.message && (
                <p className="text-sm text-red-600">{String(errors.email.message)}</p>
              )}

              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Your password" {...register("password")} />
              {errors.password?.message && (
                <p className="text-sm text-red-600">{String(errors.password.message)}</p>
              )}
            </div>

            <div className="flex mt-4 justify-center">
              <Button type="submit" className="bg-[#1F2050]" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
