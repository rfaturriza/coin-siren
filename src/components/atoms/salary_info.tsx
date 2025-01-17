interface SalaryInfoProps {
  title: string;
  subtitle: string;
}

export const SalaryInfo = ({ title, subtitle }: SalaryInfoProps) => (
  <div className="flex flex-col items-start justify-center gap-2 w-[160px]">
    <div className="h-[1px] bg-gray-100 w-[130px]"></div>
    <p className="text-lg font-bold">{title}</p>
    <p className="text-sm">{subtitle}</p>
  </div>
);
