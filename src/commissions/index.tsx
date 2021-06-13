import { motion, Variants } from "framer-motion";
import React from "react";
import CommissionCard, { CommissionCardProps } from "./card";
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

export default function Commission() {
  const commissionData: CommissionShowProps[] = [
    {
      title: "vTuber",
      items: [
        {
          price: 300,
          title: "Full Body",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image:
            "https://pbs.twimg.com/media/E3vXJulVoAMb-US?format=jpg&name=4096x4096",
        },
        {
          price: 150,
          title: "Half Body",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image:
            "https://pbs.twimg.com/media/E3sVndsUcAEJ8XM?format=jpg&name=large",
        },
        {
          price: 300,
          title: "Other",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image:
            "https://pbs.twimg.com/media/E3wDKcgVoAQjtFL?format=jpg&name=small",
        },
      ],
    },
    {
      title: "Arte",
      items: [
        {
          price: 100,
          title: "Full Body",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image:
            "https://pbs.twimg.com/media/E3vs-Y9VUAIeJd3?format=jpg&name=medium",
        },
        {
          price: 150,
          title: "Half Body",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image:
            "https://pbs.twimg.com/media/E3rKlOfVcAIb2N5?format=jpg&name=large",
        },
      ],
    },
  ];

  return (
    <CommissionsContainer>
      <div className="title">
        <h1>Commissions</h1>
      </div>

      {commissionData.map(({ title, items }) => (
        <motion.div
          key={title}
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          <h2>{title}</h2>

          {items.map((commissionItemData) => (
            <CommissionCard
              key={commissionItemData.title}
              {...commissionItemData}
            />
          ))}
        </motion.div>
      ))}
    </CommissionsContainer>
  );
}
