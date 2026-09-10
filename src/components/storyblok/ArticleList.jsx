import { getStoryblokApi } from "@/src/lib/storyblok";
import ArticleCardList from "@/src/components/blog/ArticleCardList";

export default async function ArticleList({ blok }) {
  const storyblokApi = getStoryblokApi();
  let articles = await storyblokApi.getAll("cdn/stories", {
    version: "draft",
    content_type: "article",
  });

  return (
    <section>
      <h2 className='text-2xl font-bold font-mono'>{blok.title}</h2>

      <ArticleCardList articles={articles} />
    </section>
  );
}
