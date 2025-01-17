import { SalaryInfoType } from "@/pages/api/dashboard";
import { SalaryInfo } from "../atoms/salary_info";

interface SalaryInfoDisplayProps {
  data: SalaryInfoType[];
}
export const SalaryInfoDisplay = ({ data }: SalaryInfoDisplayProps) => {
  return (
    <div className="flex justify-between items-center">
      {data?.map((salaryInfo) => (
        <SalaryInfo
          key={salaryInfo.id}
          title={salaryInfo.title}
          subtitle={salaryInfo.subtitle}
        />
      ))}
    </div>
  );
};
