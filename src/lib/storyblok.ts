import Page from "@/src/components/storyblok/Page";
import Hero from "@/src/components/storyblok/Hero";
import ArticleList from "@/src/components/storyblok/ArticleList";
import Article from "@/src/components/storyblok/Article";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  });
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    article_list: ArticleList,
    article: Article,
  },
  apiOptions: {
    region: "eu",
    fetch: cachedFetch,
  },
  enableFallbackComponent: true,
});
