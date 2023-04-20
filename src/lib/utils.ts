import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//THIS FUNCTION WILL OVERWRITE STYLES FROM TAILWIND FOR CLEANER CODE
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
