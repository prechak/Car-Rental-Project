import Hero from "@/components/Home/Hero";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
      </div>
    </>
  );
}
