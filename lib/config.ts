// The product app (pharmacy_management_system_client) is a separate Vite
// deployment from this marketing site, so auth routes are absolute URLs
// rather than Next.js routes. Override via NEXT_PUBLIC_APP_URL in prod.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://pharmacy-management-system-client.vercel.app";

export const APP_ROUTES = {
  login: `${APP_URL}/login`,
} as const;

export const SITE = {
  name: "PharmaSys",
  tagline: "Enterprise Suite",
  description:
    "Modern pharmacy management software for inventory, procurement, sales, and staff access control — built for Tanzanian pharmacies.",
} as const;
