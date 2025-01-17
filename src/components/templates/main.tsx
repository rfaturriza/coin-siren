import React from "react";
import {
  OverviewAndSalaryDisplay,
  OverviewAndSalaryDisplayProps,
} from "../organisms/overview_salary_display";
import { UserProfileSection } from "../organisms/user_profile_section";
import { ProductCard } from "../atoms/product_card";
import { ProductType } from "@/pages/api/dashboard";
export interface MainProps {
  overviewAndSalaryDisplayProps: OverviewAndSalaryDisplayProps;
  productCard: ProductType[];
}
export const Main = ({
  overviewAndSalaryDisplayProps,
  productCard,
}: MainProps) => (
  <main className="flex items-center justify-between min-h-screen p-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <OverviewAndSalaryDisplay {...overviewAndSalaryDisplayProps} />
        <UserProfileSection />
      </div>
      <div className="flex gap-4 pt-[60px] px-4 overflow-x-auto no-scrollbar">
        {productCard?.map((productCard) => (
          <ProductCard key={productCard.id} data={productCard} />
        ))}
      </div>
    </div>
  </main>
);
