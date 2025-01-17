// 법률 및 인사관리 부담없이
// 1주일 이내에 원격으로 채용해보세요.

import { motion } from "framer-motion";

export const RecruitmentSubtitle = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bolds">
        법률 및 인사관리 부담없이 <br />
        1주일 이내에 원격으로 채용해보세요.
      </h3>
    </motion.div>
  </>
);
