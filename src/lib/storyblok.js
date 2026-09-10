import Page from "@/src/components/storyblok/Page";
import Hero from "@/src/components/storyblok/Hero";
import ArticleList from "@/src/components/storyblok/ArticleList";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    article_list: ArticleList,
  },
  apiOptions: {
    region: "eu",
  },
});
