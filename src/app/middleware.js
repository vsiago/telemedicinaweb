// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // Supondo que use algum pacote de JWT

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
