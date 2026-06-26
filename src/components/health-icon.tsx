"use client";

import { Icon, addIcon, type IconProps } from "@iconify/react";
import icons from "@/lib/health-icons.json";

// Register the bundled Healthicons offline (no runtime API fetch).
for (const [name, data] of Object.entries(icons)) {
  addIcon(name, data as Parameters<typeof addIcon>[1]);
}

export function HealthIcon(props: IconProps) {
  return <Icon {...props} />;
}
