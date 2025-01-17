import { SalaryInfoDisplay } from "../molecules/salary_info_display";
import { RecruitmentOverview } from "../molecules/recruitment_overview";

export const OverviewAndSalaryDisplay = () => (
  <div className="flex flex-col items-start justify-center gap-16">
    <RecruitmentOverview />
    <div className="hidden md:block">
      <SalaryInfoDisplay />
    </div>
  </div>
);
