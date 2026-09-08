export type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  title: string;
  intro: string;
  meta: { label: string; value: string; accent?: boolean }[];
  heroCaption: string;
  problem: string[];
  built: { title: string; body: string; caption: string }[];
  howBuilt: string[];
  outcome: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  pfg: {
    slug: "pfg",
    name: "PFG Trading",
    kicker: "Client project · 2026",
    title: "A logistics platform for a China-to-Ghana shipping company.",
    intro:
      "Power From God Trading ships goods from China to Ghana. They ran the whole operation on spreadsheets and WhatsApp. I built them one platform that covers all of it.",
    meta: [
      { label: "Role", value: "Solo developer" },
      { label: "Timeline", value: "2026, ongoing" },
      { label: "Stack", value: "Next.js, Supabase" },
      { label: "Status", value: "Live", accent: true },
    ],
    heroCaption: "Placeholder — customer tracking dashboard",
    problem: [
      "Customers had no way to see where their shipment was without messaging the office. The warehouse logged incoming packages by hand. The team tracked payments and staff across separate spreadsheets that never quite agreed.",
      "Everything worked until it didn't — and it broke quietly, in ways nobody noticed until a customer called.",
    ],
    built: [
      {
        title: "Customer tracking portal",
        body: "Every customer gets a warehouse code and a live view of their packages — status, photos, and a full history of every step from received to delivered.",
        caption: "tracking portal",
      },
      {
        title: "Warehouse logging",
        body: "Staff receive packages on a phone, snap a photo, and the customer sees it instantly. Manifests group shipments and cascade status changes down to every package at once.",
        caption: "warehouse logging",
      },
      {
        title: "Admin & HR tools",
        body: "Procurement, exchange rates, staff, and an immutable audit log of every change — plus reports the team used to rebuild by hand each week.",
        caption: "admin & reports",
      },
    ],
    howBuilt: [
      "Next.js App Router with server components, Supabase for auth, database, and storage, deployed on Vercel. Three roles — customer, warehouse, admin — each enforced at the database with row-level security, not just hidden in the UI. A customer can't reach another customer's data by editing a URL.",
      "Package photos live in a private bucket and reach the customer through short-lived signed URLs. The schema is migration-driven, so every change is versioned and repeatable.",
    ],
    outcome: [
      "The platform is live and running the operation. It's my first client project, and the flagship piece of my portfolio — the whole customer-facing side, the warehouse tools, and the admin back office, built and shipped solo.",
    ],
  },
};
