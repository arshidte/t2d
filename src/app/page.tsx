import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs/app-beta";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {isAuth && (
        <div className="absolute top-5 right-5 p-2 bg-white rounded-md flex justify-center items-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold text-white">
              Talk to your PDF
            </h1>
          </div>

          <div className="flex mt-8">
            {isAuth && <Button variant={"secondary"}>Go to chats</Button>}
          </div>

          <p className="max-w-xl mt-2 text-lg text-white">
            Get Quick, Accurate Responses to Your Questions, Revolutionizing the
            Way You Interact with Your Documents.
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button variant={"secondary"}>
                  Login to get started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
