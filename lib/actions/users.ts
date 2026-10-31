"use server";

import { requireRoomAdminContext } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { ActionError } from "@/lib/errors";
import { authedClient } from "@/lib/safe-action";
import { removeRoomMemberSchema, setRoomMemberRoleSchema } from "@/lib/schemas";

export const setRoomMemberRole = authedClient
  .inputSchema(setRoomMemberRoleSchema)
  .action(async ({ parsedInput, ctx }) => {
    const { roomId, userId, role } = parsedInput;
    await requireRoomAdminContext(roomId, ctx.user.id);

    if (userId === ctx.user.id && role !== "ADMIN") {
      throw new ActionError(
        "CONFLICT",
        "You cannot remove your own admin access.",
      );
    }

    const membership = await prisma.roomMembership.findUnique({
      where: { roomId_userId: { roomId, userId } },
    });
    if (!membership) {
      throw new ActionError("NOT_FOUND", "Member not found.");
    }
    if (membership.role === role) return { id: userId };

    await prisma.roomMembership.update({
      where: { id: membership.id },
      data: { role },
    });

    return { id: userId };
  });

export const removeRoomMember = authedClient
  .inputSchema(removeRoomMemberSchema)
  .action(async ({ parsedInput, ctx }) => {
    const { roomId, userId } = parsedInput;
    await requireRoomAdminContext(roomId, ctx.user.id);

    if (userId === ctx.user.id) {
      throw new ActionError("CONFLICT", "You cannot remove yourself.");
    }

    const membership = await prisma.roomMembership.findUnique({
      where: { roomId_userId: { roomId, userId } },
    });
    if (!membership) {
      throw new ActionError("NOT_FOUND", "Member not found.");
    }

    await prisma.roomMembership.delete({ where: { id: membership.id } });

    return { id: userId };
  });
