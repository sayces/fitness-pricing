"use client";

import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="bg-gray-29 min-h-screen">
      <Header />
      <main>
        <h1>
          Выбери подходящий для себя <span className="text-golden">тариф</span>
        </h1>
      </main>
    </div>
  );
}
