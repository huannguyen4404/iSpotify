import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  // token exist if logged in
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = request.nextUrl

  const is_authenting = pathname.includes('/api/auth') // eg: callback urls
  const is_static = pathname.includes('/_next') // calling to next url: `/_next/static/`
  if (token || is_static || is_authenting) {
    if (pathname === '/login') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
