import prisma from "@/utils/db";
import { LoginUserDto } from "@/utils/dto";
import { loginSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
/**
 * @method POST
 * @route ~/api/login
 * @desc Login Form
 * @access Public
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginUserDto;
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    const user = await prisma.user.findFirst({ where: { email: body.email } });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }
    const isPasswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 500 }
      );
    }
    const token = null;
    return NextResponse.json(
      { message: "Authenticated", token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "internal error" }, { status: 500 });
  }
}
