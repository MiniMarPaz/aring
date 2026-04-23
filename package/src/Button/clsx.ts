/** Tiny local clsx — no external dep. */
type ClassValue = string | number | false | null | undefined;
export default function clsx(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ");
}
