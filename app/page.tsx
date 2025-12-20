import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* logo */}
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
         <CardTitle className="text-center text-[#1F2050] font-bold">Welcome Back!</CardTitle>
         <CardContent>
          <form action="">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="johndoe@gmail.com" name="email"/>
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="" name="password"/>
            </div>
            <div className="flex mt-2 justify-center">
              <Button className="bg-[#1F2050]">Sign in</Button>
            </div>
          </form>
         </CardContent>
      </Card>
    </div>
    </>
  );
}
