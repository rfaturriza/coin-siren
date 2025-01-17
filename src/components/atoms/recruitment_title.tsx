// 최고의 실력을 가진
// 외국인 인재를 찾고 계신가요?

import { motion } from "framer-motion";

export const RecruitmentTitle = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl md:text-5xl font-bold">
      최고의 실력을 가진
      <br />
      외국인 인재를 찾고 계신가요?
    </h1>
  </motion.div>
);
