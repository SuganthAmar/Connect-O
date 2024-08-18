import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeAgo = (dateString: string): string => {
  const now = new Date();
  const postDate = new Date(dateString);
  const seconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
  };

  for (const [unit, value] of Object.entries(intervals)) {
      const amount = Math.floor(seconds / value);
      if (amount >= 1) {
          return `${amount} ${unit}${amount > 1 ? 's' : ''} ago`;
      }
  }

  return "just now";
}

export const checkIsLiked=(likes: string[], userId: string): boolean => {
  return likes.includes(userId);
}