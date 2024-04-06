import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import QRCode from "qrcode";

export const qrRouter = createTRPCRouter({
    getQR: publicProcedure.input(z.object({
        jsonData: z.unknown(),
    })).query((opts) => {
        const { jsonData } = opts.input;
        const jsonStringData = JSON.stringify(jsonData);
        const qr = QRCode.toDataURL(jsonStringData);

        return qr;
    }),
});
