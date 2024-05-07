import prisma from "@/utils/db";
import { RegisterUserDto } from "@/utils/dto";
import { registerSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

/**
 * @method POST
 * @route ~/api/register
 * @desc Create a user
 * @access Public
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterUserDto;
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    let userExists = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (userExists) {
      return NextResponse.json(
        { message: "email already registered" },
        { status: 500 }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
      },
    });

    const token = null;

    return NextResponse.json({ ...newUser, token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "internal error" }, { status: 500 });
  }
}
