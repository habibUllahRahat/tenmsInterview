import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const defaultLocale = "en";
const locale = ["en", "bn"];

function getLocale(req: NextRequest) {
	const acceptedLanguageByClient = req.headers.get("accept-language") ?? undefined;
	const headers = {
		"accept-language": acceptedLanguageByClient,
	};
	const languages = new Negotiator({
		headers,
	}).languages();

	return match(languages, locale, defaultLocale);
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocales = locale.every(
		(lang) => !pathname.startsWith(`/${lang}`) && !pathname.startsWith(`/${lang}/`)
	);
	if (pathnameIsMissingLocales) {
		const lang = getLocale(request);
		console.log(pathname, lang);
		return NextResponse.redirect(new URL(`/${lang}/${pathname}`, request.url));
	}
	return NextResponse.next();
}
export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)"],
};
