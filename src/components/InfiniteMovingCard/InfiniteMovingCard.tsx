"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CERTIFICATE } from "@/constant/index";

export default function MovingCards() {
  return (
    <div className="h-fit rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={CERTIFICATE.LIST}
        direction="right"
        speed="normal"
        pauseOnHover={true}
      />
    </div>
  );
}
