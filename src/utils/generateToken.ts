import jwt from "jsonwebtoken";
import { JWTPayload } from "./types";
import { serialize } from "cookie";

// Generate a token
export function generateJWT(jwtPayload: JWTPayload): string {
  const privateKey = process.env.JWT_SECRET_KEY as string;
  const token = jwt.sign(jwtPayload, privateKey, {
    expiresIn: "30d",
  });
  return token;
}

// Generate a Cookie
export function setCookie(jwtPayload: JWTPayload): string {
  const token = generateJWT(jwtPayload);
  const cookie = serialize("jwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 3600 * 24 * 30, // 30 days
  });
  return cookie;
}
