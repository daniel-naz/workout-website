export function getSiteUrl() {
  const env =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000";

  const url = env.startsWith("http") ? env : `https://${env}`;
  return url.endsWith("/") ? url.slice(0, -1) : url;
}