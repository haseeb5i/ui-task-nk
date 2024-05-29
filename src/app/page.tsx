"use client";
import { useState } from "react";
import { css } from "@/styles/css";

import { FactionCard } from "./faction-card";
import { factionImages, factionsList } from "./factions-data";
import { FactionImage } from "./faction-image";

export default function Home() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <main className={css({ bgColor: "rgb(16, 18, 24)" })}>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "auto 566px",
          gap: "30px",
          maxWidth: "990px",
          marginX: "auto",
          marginY: "80px 32px", // 145
        })}
      >
        <div>
          <h1 className={css({ mb: "30px", lineHeight: "tight" })}>
            <span
              className={css({
                fontSize: "2.8rem",
                letterSpacing: "wide",
                fontWeight: "semibold",
                color: "transparent",
                WebkitTextStroke: "1px white",
              })}
            >
              CHOOSE YOUR
            </span>
            <br />
            <span
              className={css({
                fontSize: "4.3rem",
                fontWeight: "semibold",
                color: "white",
                textShadow: "0px 0px 4px white",
              })}
            >
              FACTION
            </span>
          </h1>
          <p className={css({ mb: "35px", fontSize: "lg" })}>
            Agents will be customizable, allowing you to select from among the
            various factions in the game - will you fight for a global police
            force seeking to enact a new brand of justice? Or will you battle
            alongside a secret network of deviants and outcasts?
          </p>
          <p className={css({ mb: "35px", fontSize: "lg" })}>
            Once you acquire your agent, the choice is yours. Pledging your
            allegiance is no small decision - as your agent accrues Loyalty
            Points over time, your choices truly matter.
          </p>

          <button className={styles.btn}>utility</button>
        </div>

        <FactionImage
          layerImage={factionImages[selectedIdx].layerImage}
          mainImage={factionImages[selectedIdx].mainImage}
        />
      </div>

      <div className={styles.scroller}>
        {factionsList.map((faction, idx) => (
          <FactionCard
            key={faction.name}
            faction={faction}
            onClick={() => setSelectedIdx(idx)}
            isActive={selectedIdx === idx}
          />
        ))}
      </div>
    </main>
  );
}

const styles = {
  scroller: css({
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "240px", // set size of each card
    paddingY: "50px",
    overflowX: "auto",
    overscrollBehaviorX: "contain",
    scrollbarWidth: "none",
  }),
  btn: css({
    marginLeft: "-3px",
    textTransform: "uppercase",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    bgColor: "white",
    color: "black",
    height: "35px",
    paddingX: "26px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    // TODO: add border using another clipped element inside the main button
    clipPath: "polygon(100% 0, 100% 55%, 88% 100%, 0 100%, 0 0)",
  }),
};
