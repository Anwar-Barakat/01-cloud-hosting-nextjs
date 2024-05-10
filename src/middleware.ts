import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get("jwtToken");
  const token: string = jwtToken?.value as string;
  if (!token) {
    return NextResponse.json({ message: "access denied" }, { status: 401 });
  }
}

export const config = {
  matcher: ["/api/users/profile/:path*"],
};
