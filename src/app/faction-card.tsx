"use client";
import Image from "next/image";

import { css } from "@/styles/css";

import { Faction } from "./factions-data";

type FactionCardProps = {
  faction: Faction;
  onClick: () => void;
  isActive: boolean;
};

export const FactionCard = ({
  faction,
  isActive,
  onClick,
}: FactionCardProps) => {
  return (
    <div data-active={isActive} onClick={onClick} className={styles.root}>
      <h2 className={styles.heading}>{faction.name}</h2>
      <p className={styles.text}>{faction.description}</p>
      <Image
        className={css({
          justifySelf: "center",
          filter: "auto",
          saturate: isActive ? 1 : 0,
        })}
        src={faction.logo}
        alt={`${faction.name} logo`}
        width={55}
        height={55}
      />
    </div>
  );
};

const styles = {
  root: css({
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    bgColor: "rgb(2, 7, 12)",
    padding: "24px",
    height: "200px",
    border: "1px solid rgb(34, 36, 42)",
    fontSize: "13px",
    "&:is(:hover, [data-active=true])": {
      transition: "scale 0.2s",
      scale: 1.05,
    },
    "&[data-active=true]": {
      bgColor: "rgb(20, 22, 28)",
      "& :is(h2, p)": {
        color: "rgb(176, 178, 182)",
      },
    },
  }),
  heading: css({
    textTransform: "uppercase",
    color: "rgb(107, 111, 117)",
    marginBottom: "5px",
  }),
  text: css({
    color: "rgb(54, 60, 64)",
  }),
};

// colors
// text: rgb(176, 178, 182) // hover, prose
// rgb(107, 111, 117) // card heading text
// rgb(54, 60, 64) // muted text
