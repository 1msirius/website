import type { Site, NavLink, SocialLink } from "./types";

export const SITE: Site = {
  title: "Ɛpsilon",
  desc: "AI researcher, entrepreneur, and developer.",
  author: "Ɛpsilon",
  siteUrl: "https://3p5ilon.vercel.app",
  ogImage: "/favicon.svg",
  language: "en",
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "/" },
  { href: "/blog", label: "/thoughts" },
  { href: "/photos", label: "/notes" },
  { href: "/projects", label: "/projects" },
  { href: "#", label: "???" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://x.com/3p5ilon", label: "[/x]" }, 
  { href: "https://github.com/3p5ilon", label: "[/github]" },
  { href: "hi3psilon@gmail.com", label: "[/email]" },
  { href: "/rss.xml", label: "[/rss]" },
];
