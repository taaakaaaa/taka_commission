import { motion, Variants } from "framer-motion";
import React from "react";
import { Empty } from "../shared/Empty";
import Title from "../shared/title";
import CommissionCard, { CommissionCardProps } from "./card/card";
import { CommissionsContainer } from "./styles";

interface CommissionShowProps {
  title: string;
  items: Array<CommissionCardProps>;
}

const containerVar: Variants = {
  hidden: { x: -150 },
  visible: {
    x: 0,
    transition: {
      bounce: 0.4,
      type: "spring",
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

export default function Commission({ data }) {
  return (
    <CommissionsContainer>
      <div className="title">
        <Title text={"Commissions"} />
      </div>

      {!data || data?.length <= 0 ? (
        <Empty />
      ) : (
        data.map(({ tag, subTags, art }) => (
          <motion.div
            key={tag.id}
            initial="hidden"
            animate="visible"
            variants={containerVar}
          >
            <motion.h2>{tag.titulo}</motion.h2>

            {subTags?.map((commissionItemData, index) => (
              <CommissionCard
                key={commissionItemData.title}
                {...commissionItemData}
              />
            ))}
          </motion.div>
        ))
      )}
    </CommissionsContainer>
  );
}
