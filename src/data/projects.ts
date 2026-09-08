export type Project = {
  slug: string;
  name: string;
  year: string;
  blurb?: string;
  stack?: string[];
  hasCaseStudy: boolean;
  summary?: string;
};

export const projects: Project[] = [
  {
    slug: "pfg",
    name: "PFG Trading",
    year: "2026",
    blurb:
      "A China-to-Ghana shipping company's whole operation on one platform — a customer shipment-tracking portal, a warehouse logging system, and admin and HR tools for the team.",
    stack: ["Next.js", "Supabase", "TypeScript", "Vercel"],
    hasCaseStudy: true,
  },
  {
    slug: "minestreak",
    name: "MineStreak",
    year: "2026",
    hasCaseStudy: false,
    summary: "Puzzle game — in progress",
  },
  {
    slug: "great-outcomes",
    name: "Great Outcomes",
    year: "2026",
    hasCaseStudy: false,
    summary: "Online school — site and platform",
  },
];
