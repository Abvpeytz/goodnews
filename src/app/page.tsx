import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import Header from "../components/layout/header";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className='page container mx-auto p-4'>
      <Header />

      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
