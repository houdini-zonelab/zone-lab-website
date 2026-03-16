"use client";

import {
  Compass,
  Code,
  Shield,
  BarChart3,
  Headphones,
  ClipboardList,
  Megaphone,
} from "lucide-react";

const avatarConfig: Record<
  string,
  { gradient: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  "North Star": { gradient: "from-violet-500 to-indigo-600", Icon: Compass },
  Houdini: { gradient: "from-cyan-500 to-teal-600", Icon: Code },
  WatchDog: { gradient: "from-amber-500 to-orange-600", Icon: Shield },
  Vampire: { gradient: "from-red-500 to-rose-600", Icon: BarChart3 },
  Echo: { gradient: "from-emerald-500 to-green-600", Icon: Headphones },
  Thomas: { gradient: "from-blue-500 to-sky-600", Icon: ClipboardList },
  Godin: { gradient: "from-pink-500 to-fuchsia-600", Icon: Megaphone },
};

interface TeamAvatarProps {
  name: string;
  index: number;
  size?: "sm" | "lg";
}

export function TeamAvatar({ name, size = "sm" }: TeamAvatarProps) {
  const config = avatarConfig[name] || {
    gradient: "from-gray-500 to-gray-600",
    Icon: Code,
  };
  const { gradient, Icon } = config;
  const sizeClasses =
    size === "lg"
      ? "h-32 w-32 md:h-48 md:w-48"
      : "h-20 w-20 md:h-28 md:w-28";
  const iconSize = size === "lg" ? "h-12 w-12 md:h-16 md:w-16" : "h-8 w-8 md:h-10 md:w-10";

  return (
    <div
      className={`flex ${sizeClasses} items-center justify-center rounded-full bg-gradient-to-br ${gradient}`}
    >
      <Icon className={`${iconSize} text-white`} />
    </div>
  );
}
