import { Chat } from "@/components/home/chat";
import { Hero } from "@/components/home/hero";
import { Meet } from "@/components/home/meet";
import { Dusk, HomeScene, Night, Passport, Paths } from "@/components/home/scenes";

export default function HomePage() {
  return (
    <div className="tp-page">
      <Hero />
      <Meet />
      <Paths />
      <Chat />
      <Passport />
      <Dusk />
      <Night />
      <HomeScene />
    </div>
  );
}
