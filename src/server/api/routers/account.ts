import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const accountRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.object({ where: z.object({ id: z.string() }) }))
    .query(({ ctx, input }) => {
      const { id } = input.where;
      return ctx.db.account.findMany({ where: { id: id } }); // Use where clause for filtering
    }),
  // getAllBusses: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.bus.findMany();
  // }),
});
