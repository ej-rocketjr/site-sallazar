import type { MetadataRoute } from "next";

export default function robots(): string {
  return "User-agent: *\nDisallow:";
}
