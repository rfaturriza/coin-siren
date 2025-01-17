import React from "react";
import { HeaderLeft } from "../organisms/main_left";
import { HeaderRight } from "../organisms/main_right";
import { CardProduct } from "../atoms/card_product";

export const Main = () => (
  <main className="flex items-center justify-between min-h-screen p-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <HeaderLeft />
        <HeaderRight />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-[60px] px-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  </main>
);
