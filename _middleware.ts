// import { NextResponse } from 'next/server';
// import { decode } from 'jsonwebtoken';

// import type { NextRequest } from 'next/server';
// import type { HsDecodedJWT } from '@/types/auth';
// import { refreshAccessToken } from './auth/tokens';

// import {
//   deleteSession,
//   readSession,
//   updateSession
// } from './auth/session';

// export default async function middleware (request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const { accessToken, refreshToken } = await readSession();

//   const decodedAccessToken = accessToken
//     ? decode(accessToken) as HsDecodedJWT
//     : undefined;

//   const isAccessTokenExpired = decodedAccessToken?.exp
//     ? Date.now() > decodedAccessToken.exp * 1000
//     : true;

//   if (accessToken && pathname === '/login') {
//     return NextResponse.redirect(new URL('/home', request.url));
//   }

//   if ((!accessToken || isAccessTokenExpired) && pathname !== '/login') {
//     if (!refreshToken) {
//       return NextResponse.redirect(new URL('/login', request.url));
//     }

//     const newAccessToken = await refreshAccessToken(refreshToken);

//     if (!newAccessToken) {
//       deleteSession();
//       return NextResponse.redirect(new URL('/login', request.url));
//     }

//     return await updateSession(newAccessToken);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!api/|.*\\.).*)',
//   ],
// };
