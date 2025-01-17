import type { NextApiRequest, NextApiResponse } from "next";

export type SalaryInfoType = {
  id: number;
  title: string;
  subtitle: string;
};

export type ProfileType = {
  id: number;
  name: string;
  position: string;
  experience: string;
};

export type ProductType = {
  id: number;
  name: string;
};

export type DashboardType = {
  profile: ProfileType[];
  products: ProductType[];
  salaryInfo: SalaryInfoType[];
};

export type ResponseDashboard = {
  data: DashboardType;
};

const fakeSalaryInfo: SalaryInfoType[] = [
  {
    id: 1,
    title: "평균 월 120만원",
    subtitle: "임금을 해당 국가를 기준으로 계산합니다.",
  },
  {
    id: 2,
    title: "최대 3회 인력교체",
    subtitle: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
  },
  {
    id: 3,
    title: "평균 3일, 최대 10일",
    subtitle: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
  },
];

const fakeProducts: ProductType[] = [
  { id: 1, name: "해외 마케팅" },
  { id: 2, name: "퍼블리셔" },
  { id: 3, name: "캐드원(제도사)" },
  { id: 4, name: "해외 세일즈" },
  { id: 5, name: "해외 CS" },
];

const fakeProfiles: ProfileType[] = [
  { id: 1, name: "Abhishek Gupta", position: "마케팅", experience: "2y+" },
  { id: 2, name: "Arya", position: "디자이너", experience: "5y+" },
  { id: 3, name: "Bagus", position: "기획자", experience: "3y+" },
  { id: 4, name: "Ali", position: "마케터", experience: "1y+" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDashboard>
) {
  res.status(200).json({
    data: {
      profile: fakeProfiles,
      products: fakeProducts,
      salaryInfo: fakeSalaryInfo,
    },
  });
}
