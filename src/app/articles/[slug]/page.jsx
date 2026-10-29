import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/articles/${slug}`, {
    version: "published",
  });

  return (
    <div className='container mx-auto p-4'>
      <StoryblokStory story={data.story} />
    </div>
  );
}
