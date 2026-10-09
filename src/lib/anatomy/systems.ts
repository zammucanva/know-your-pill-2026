import type { AnatomicalSystem, SystemId } from "./types";

/**
 * The 15 anatomical systems from BodyParts3D.
 *
 * These match the `system` field in each BodyParts3D part, so the
 * SystemsPanel can directly toggle visibility on the real model.
 *
 * Colors are curated for clinical display (adapted from the human-atlas project).
 */
export const systems: AnatomicalSystem[] = [
  {
    id: "skeletal",
    name: "Skeleton",
    description:
      "Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles.",
    color: "#e2d9ba",
    defaultVisible: true,
    icon: "Bone",
  },
  {
    id: "muscular",
    name: "Muscles",
    description:
      "Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints and stabilize posture.",
    color: "#a85b50",
    defaultVisible: true,
    icon: "Dumbbell",
  },
  {
    id: "cardiac",
    name: "Heart",
    description:
      "The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits.",
    color: "#b96760",
    defaultVisible: true,
    icon: "HeartPulse",
  },
  {
    id: "sensory",
    name: "Sensory Organs",
    description:
      "Structures contributing to special senses, including sight, hearing, and balance.",
    color: "#b0c8ce",
    defaultVisible: true,
    icon: "Eye",
  },
  {
    id: "arterial",
    name: "Arteries",
    description:
      "Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs.",
    color: "#c05245",
    defaultVisible: true,
    icon: "ArrowUpRight",
  },
  {
    id: "venous",
    name: "Veins",
    description:
      "Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues.",
    color: "#527c9f",
    defaultVisible: true,
    icon: "ArrowDownRight",
  },
  {
    id: "nervous",
    name: "Nervous System",
    description:
      "The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation.",
    color: "#d8b565",
    defaultVisible: true,
    icon: "Brain",
  },
  {
    id: "respiratory",
    name: "Respiratory",
    description:
      "The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood.",
    color: "#b98991",
    defaultVisible: true,
    icon: "Wind",
  },
  {
    id: "digestive",
    name: "Digestive",
    description:
      "The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward.",
    color: "#b8916b",
    defaultVisible: true,
    icon: "Sandwich",
  },
  {
    id: "urinary",
    name: "Urinary",
    description:
      "The kidneys filter blood and regulate fluid and electrolyte balance. Urine travels through the ureters to the bladder.",
    color: "#b47961",
    defaultVisible: true,
    icon: "Droplet",
  },
  {
    id: "lymphatic",
    name: "Lymphatic",
    description:
      "Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes support immune surveillance.",
    color: "#879f7c",
    defaultVisible: true,
    icon: "Shield",
  },
  {
    id: "endocrine",
    name: "Endocrine",
    description:
      "Endocrine organs release hormones into the blood to coordinate metabolism, growth, stress responses, and reproduction.",
    color: "#c5a09a",
    defaultVisible: true,
    icon: "FlaskConical",
  },
  {
    id: "reproductive",
    name: "Reproductive",
    description:
      "Male reproductive structures contributing to sperm production, maturation, and transport.",
    color: "#bda098",
    defaultVisible: false,
    icon: "Users",
  },
  {
    id: "integumentary",
    name: "Body Surface",
    description:
      "The body surface provides an outer anatomical reference. Hidden by default to reveal inner structures.",
    color: "#ba9b7d",
    defaultVisible: false,
    icon: "Hand",
  },
  {
    id: "connective",
    name: "Connective Tissue",
    description:
      "Cartilage, ligaments, and other connective tissues that support, connect, and separate structures.",
    color: "#aec3bb",
    defaultVisible: true,
    icon: "Link",
  },
];

export const getSystemById = (id: SystemId): AnatomicalSystem | undefined =>
  systems.find((s) => s.id === id);
