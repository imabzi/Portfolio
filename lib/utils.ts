import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function downloadPublicFile(path: string, filename?: string) {
  const link = document.createElement("a");

  link.href = path.startsWith("/") ? path : `/${path}`;
  link.download = filename || path.split("/").pop() || "file";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
