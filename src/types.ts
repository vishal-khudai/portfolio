export interface Project {
  id: string;
  title: string;
  category: "Merge Games" | "Puzzles" | "Tower Defense" | "UI/Logos" | "Arcade" | "Merge" | "Puzzle & Sort" | "Idle & Tycoon";
  image: string;
  tools: string[];
  description?: string;
  link?: string;
}

export interface Tool {
  name: string;
  icon: string; // Lucide icon name or image URL
  color?: string;
  description?: string;
}

export interface FeaturedWorld {
  id: string;
  title: string;
  image: string;
  video?: string;
  description: string;
  link?: string;
}
