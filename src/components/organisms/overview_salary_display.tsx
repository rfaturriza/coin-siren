import { SalaryInfoDisplay } from "../molecules/salary_info_display";
import { RecruitmentOverview } from "../molecules/recruitment_overview";
import { SalaryInfoType } from "@/pages/api/dashboard";

export interface OverviewAndSalaryDisplayProps {
  salaryInfo: SalaryInfoType[];
}

export const OverviewAndSalaryDisplay = ({
  salaryInfo,
}: OverviewAndSalaryDisplayProps) => (
  <div className="flex flex-col items-start justify-center gap-16">
    <RecruitmentOverview />
    <div className="hidden md:block">
      <SalaryInfoDisplay data={salaryInfo} />
    </div>
  </div>
);
