import React from "react";
import {
  OverviewAndSalaryDisplay,
  OverviewAndSalaryDisplayProps,
} from "../organisms/overview_salary_display";
import { UserProfileSection } from "../organisms/user_profile_section";
import { ProductCard } from "../atoms/product_card";
import { ProductType, ProfileType } from "@/pages/api/dashboard";
import { motion, AnimatePresence } from "framer-motion";
export interface MainProps {
  overviewAndSalaryDisplayProps: OverviewAndSalaryDisplayProps;
  productCard: ProductType[];
  profileCard: ProfileType[];
}
export const Main = ({
  overviewAndSalaryDisplayProps,
  productCard,
  profileCard,
}: MainProps) => (
  <main className="flex items-center justify-between min-h-screen p-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <OverviewAndSalaryDisplay {...overviewAndSalaryDisplayProps} />
        <UserProfileSection data={profileCard} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 pt-[60px] px-4 overflow-x-auto no-scrollbar"
      >
        <AnimatePresence mode="wait">
          {productCard?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <ProductCard data={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  </main>
);
