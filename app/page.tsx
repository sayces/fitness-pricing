"use client";

import { useState } from "react";
import { ScreenSize } from "@/types";
import ScreenSelector from "@/components/ScreenSelector";
import PricingContainer from "@/components/PricingContainer";
import Header from "@/components/Header/Header";

export default function Home() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  return (
    <>
      <Header />
      <main className="app">
        
        
      </main>
    </>
  );
}
