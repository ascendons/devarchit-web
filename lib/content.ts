import type { StaticImageData } from "next/image";
import valves from "@/public/assets/valves.jpg";
import electrical from "@/public/assets/electrical.jpg";
import sanitary from "@/public/assets/sanitary.jpg";

export const marqueeItems = [
  "Industrial Valves",
  "Fire Fighting Equipment",
  "Piping & Hardware",
  "Wires & Cables",
  "Switchgear",
  "Cable Trays",
  "HV Insulation",
  "HVAC & AHUs",
  "Sanitaryware",
];

export type IndustryIcon = "mining" | "hvac" | "oil" | "pharma" | "water" | "infra";

export const industries: { name: string; icon: IndustryIcon }[] = [
  { name: "Metals & Mining", icon: "mining" },
  { name: "HVAC Systems", icon: "hvac" },
  { name: "Oil & Gas", icon: "oil" },
  { name: "Pharmaceuticals", icon: "pharma" },
  { name: "Water & Wastewater", icon: "water" },
  { name: "Commercial Infra", icon: "infra" },
];

export type ProductCategory = {
  title: string;
  image: StaticImageData;
  alt: string;
  items: { name: string; description: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    title: "Industrial Valves & Piping Systems",
    image: valves,
    alt: "Row of large industrial ball valves",
    items: [
      {
        name: "Industrial Valves",
        description: "Complete range of industrial valves engineered for high-pressure operations.",
      },
      {
        name: "Fire Fighting Equipment",
        description: "Certified safety valves, fire fittings, and flow protection systems.",
      },
      {
        name: "Piping & Hardware Accessories",
        description: "MS & GI pipes, flanges, hardware fasteners, and structural steel sheets/angles.",
      },
    ],
  },
  {
    title: "Electrical & Cable Management",
    image: electrical,
    alt: "Electrical control panel with terminals and wiring",
    items: [
      {
        name: "Wires, Cables & Switchgear",
        description: "Heavy-duty industrial wires & cables. MCCBs, MCBs, contactors, relays & switches.",
      },
      {
        name: "Conduit & Cable Tray Infrastructure",
        description: "Perforated cable trays, MS conduit pipes, couplings, cable glands, and copper strips.",
      },
      {
        name: "High-Voltage Insulation Materials",
        description: "Certified 11KV & 33KV rubber sheets and high-voltage insulation protection.",
      },
    ],
  },
  {
    title: "HVAC & Premium Sanitary Solutions",
    image: sanitary,
    alt: "Matte black wall-mounted bath fixture over a white basin",
    items: [
      {
        name: "HVAC & Air Distribution",
        description: "Air Handling Units (AHUs), air distribution systems & specialized HVAC duct fittings.",
      },
      {
        name: "Sanitaryware & Bath Fixtures",
        description: "Premium CP fittings, commercial sanitary fixtures, and stainless steel sinks.",
      },
    ],
  },
];

export const contacts = [
  { label: "Call", value: "+91 76670 48330", href: "tel:+917667048330" },
  { label: "Email", value: "sid.devarchit@gmail.com", href: "mailto:sid.devarchit@gmail.com" },
  { label: "Procurement desk", value: "devarchit@crm.ascendons.in", href: "mailto:devarchit@crm.ascendons.in" },
  {
    label: "Visit",
    value: "Hosur Main Road, Singasandra, Bengaluru, Karnataka 560068",
    href: "https://maps.google.com/?q=Hosur+Main+Road+Singasandra+Bengaluru+560068",
    external: true,
  },
];
