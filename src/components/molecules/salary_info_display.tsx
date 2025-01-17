import { SalaryInfoType } from "@/pages/api/dashboard";
import { SalaryInfo } from "../atoms/salary_info";

interface SalaryInfoDisplayProps {
  data: SalaryInfoType[];
}
import { motion } from "framer-motion";

export const SalaryInfoDisplay = ({ data }: SalaryInfoDisplayProps) => {
  return (
    <div className="flex justify-between items-center">
      {data?.map((salaryInfo) => (
        <motion.div
          key={salaryInfo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SalaryInfo title={salaryInfo.title} subtitle={salaryInfo.subtitle} />
        </motion.div>
      ))}
    </div>
  );
};
