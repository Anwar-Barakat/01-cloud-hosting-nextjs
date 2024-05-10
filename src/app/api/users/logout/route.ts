import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/logout
 * @desc Logout
 * @access Public
 */
export function GET(request: NextRequest) {
  try {
    cookies().delete("jwtToken");
    return NextResponse.json(
      { message: "logout successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "internal error" }, { status: 500 });
  }
}
