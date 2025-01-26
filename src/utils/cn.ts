// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names using clsx and tailwind-merge
 * @param inputs - Class names or conditional class objects
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Example usage:
const isActive = true; // or false, depending on your logic
const isDisabled = false;
const className = cn(
  "base-style", 
  isActive && "active-style",
  isDisabled ? "disabled-style" : "enabled-style",
  "custom-style"
);