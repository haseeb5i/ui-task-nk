// type FactionNames =
//   | "sentinels"
//   | "celeste-group"
//   | "0x898"
//   | "patriots-division"
//   | "lebenskraft"
//   | "sanzu"
//   | "junpei"
//   | "deadeye"
//   | "seeker";

export type Faction = {
  // id : FactionNames;
  name: string;
  description: string;
  logo: string;
};

export const factionsList: Faction[] = [
  {
    name: "Sentinels",
    description: "A global peacekeeping force for the public good.",
    logo: "/logos/sentinels.svg",
  },
  {
    name: "the celeste group",
    description:
      "A conglomerate of energy firms in a joint venture with private intelligence.",
    logo: "/logos/celeste-group.svg",
  },
  {
    name: "0x898",
    description:
      "A rag tag group of dissidents and extremists, with the casue of freedom of information and equality.",
    logo: "/logos/0x898-image.svg",
  },
  {
    name: "Patriots division",
    description:
      "An American security company specializing in arms manufacturing.",
    logo: "/logos/patriots-division.svg",
  },
  {
    name: "Lebenskraft Armorers",
    description:
      "A global materials science firm that develops next-generation robots.",
    logo: "/logos/lebenskraft.svg",
  },
  {
    name: "sanzu biomedical",
    description:
      "A triumvirate of leading organizations in technology, science and government.",
    logo: "/logos/sanzu.svg",
  },
  {
    name: "junpei light & power",
    description:
      "Asia's largest multinational and specialist in fusion technology.",
    logo: "/logos/junpei-light-power.svg",
  },
  {
    name: "deadeye enforcement",
    description: "A global network composed of ex-NATO members",
    logo: "/logos/deadeye-enforcement.svg",
  },
  {
    name: "the seeker megachurch",
    description:
      "A leading media corp that is also the face of a modern neo-religion.",
    logo: "/logos/seeker.svg",
  },
];

export const factionImages = [
  {
    mainImage: "/images/sentinels_in.png",
    layerImage: "/images/sentinels.png",
  },
  {
    mainImage: "/images/celeste-group_in.png",
    layerImage: "/images/celeste-group.png",
  },
  {
    mainImage: "/images/0x898-image_in.png",
    layerImage: "/images/0x898-image.png",
  },
  {
    mainImage: "/images/patriots-division_in.png",
    layerImage: "/images/patriots-division.png",
  },
  {
    mainImage: "/images/lebenskraft_in.png",
    layerImage: "/images/lebenskraft.png",
  },
  {
    mainImage: "/images/sanzu_in.png",
    layerImage: "/images/sanzu.png",
  },
  {
    mainImage: "/images/junpei-light-power_in.png",
    layerImage: "/images/junpei-light-power.png",
  },
  {
    mainImage: "/images/deadeye-enforcement_in.png",
    layerImage: "/images/deadeye-enforcement.png",
  },
  {
    mainImage: "/images/seeker_in.png",
    layerImage: "/images/seeker.png",
  },
];
