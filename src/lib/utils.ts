import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Capitaliza cada palavra do nome completo, mantendo conectores em minúscula
export function capitalizeFullName(name: string): string {
  const connectors = ["de", "da", "do", "dos", "das", "e"];
    return name
      .trim()
      .split(" ")
      .map((word, index) => {
        const lowerWord = word.toLowerCase();
        // Mantém conectores em minúscula, exceto se for a primeira palavra
        if (index > 0 && connectors.includes(lowerWord)) {
          return lowerWord;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
}

// Extrai e capitaliza o primeiro nome
export function getFirstName(fullName: string): string {
  const firstName = fullName.trim().split(" ")[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}