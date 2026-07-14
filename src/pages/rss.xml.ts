import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { SITE } from "../consts";

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.desc,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>${SITE.language}</language>`,
  });
};
