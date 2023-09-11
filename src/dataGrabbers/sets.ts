import axios from "axios";
import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger.js";

const prisma = new PrismaClient();

interface ISetResponse {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
    expanded: string;
    standard: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

interface ISetsResponse {
  data: ISetResponse[];
}

export const handler: AWSLambda.ScheduledHandler = async () => {
  logger.info("Getting Sets");

  const sets = await axios.get<ISetsResponse>(
    "https://api.pokemontcg.io/v2/sets",
  );

  logger.info(sets.data);

  await Promise.all(
    sets.data.data.map(async (set) => {
      await prisma.set.upsert({
        where: {
          id: set.id,
        },
        update: {
          name: set.name,
          series: set.series,
          printedTotal: set.printedTotal,
          actualTotal: set.total,
          standardLegal: set.legalities.standard === "Legal",
          expandedLegal: set.legalities.expanded === "Legal",
          unlimitedLegal: set.legalities.unlimited === "Legal",
          releaseDate: new Date(set.releaseDate),
          logoImageUrl: set.images.logo,
          symbolImageUrl: set.images.symbol,
        },
        create: {
          id: set.id,
          name: set.name,
          series: set.series,
          printedTotal: set.printedTotal,
          actualTotal: set.total,
          standardLegal: set.legalities.standard === "Legal",
          expandedLegal: set.legalities.expanded === "Legal",
          unlimitedLegal: set.legalities.unlimited === "Legal",
          releaseDate: new Date(set.releaseDate),
          logoImageUrl: set.images.logo,
          symbolImageUrl: set.images.symbol,
        },
      });
    }),
  );
};
