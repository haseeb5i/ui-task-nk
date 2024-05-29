import { css } from "@/styles/css";
import Image from "next/image";

type FactionImageProps = {
  mainImage: string;
  layerImage: string;
};

export const FactionImage = ({ mainImage, layerImage }: FactionImageProps) => {
  return (
    <div className={css({ pos: "relative" })}>
      <Image
        src={layerImage}
        alt="Faction Image"
        width={566}
        height={527} // 510
      />
      <Image
        className="reveal-image"
        src={mainImage}
        alt="Faction layer Image"
        width={566}
        height={527}
      />
    </div>
  );
};
