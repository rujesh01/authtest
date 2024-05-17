import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { API_ROUTE, Default_Redirect, authRoute, publicRoute } from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;



  // console.log(authRoute)
  const isApiAuthRoute = nextUrl.pathname.startsWith(API_ROUTE);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);
  const isPublicRoute = publicRoute.includes(nextUrl.pathname);


  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(Default_Redirect, nextUrl));
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
