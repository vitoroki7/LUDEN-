/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";

export interface ServiceItem {
  id: string;
  title: string;
  iconName: "plug" | "cpu" | "sun";
  buttonText: string;
  description: string;
  details: string[];
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  placeholderTitle: string;
  image: string;
  description: string;
  category: string;
  year: string;
}

export interface ChartPoint {
  label: string;
  value: number; // historic performance or efficiency
  efficiency: number; // gold standard Line 
  glow?: boolean;
}
