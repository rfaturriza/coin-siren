import { DeveloperInquiry } from "../atoms/developer_inquiry";
import { RecruitmentSubtitle } from "../atoms/recruitment_subtitle";
import { RecruitmentTitle } from "../atoms/recruitment_title";
import { JobTypeTooltip } from "../atoms/job_type_tooltip";

export const RecruitmentOverview = () => (
  <div className="flex flex-col items-start justify-center gap-4">
    <JobTypeTooltip />
    <RecruitmentTitle />
    <RecruitmentSubtitle />

    <div className="hidden md:block">
      <DeveloperInquiry />
    </div>
  </div>
);
