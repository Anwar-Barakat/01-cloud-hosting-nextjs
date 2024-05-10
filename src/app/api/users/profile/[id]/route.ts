import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "@/utils/types";
import { verifyToken } from "@/utils/verifyToken";

interface ProfileProps {
  params: { id: string };
}

/**
 * @method DELETE
 * @route ~/api/profile/:id
 * @desc Delete a profile
 * @access Private
 */

export async function DELETE(request: NextRequest, { params }: ProfileProps) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    console.log(request.headers);

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 500 });
    }

    const userFromToken = verifyToken(request);

    if (userFromToken !== null && userFromToken.id === user.id) {
      await prisma.user.delete({ where: { id: user.id } });
      return NextResponse.json(
        { message: "user deleted successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "forbidden" }, { status: 403 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal error", error },
      { status: 500 }
    );
  }
}
