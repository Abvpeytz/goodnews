import { getStoryblokApi } from "@/src/lib/storyblok";

export default function StoryblokProvider({ children }) {
  getStoryblokApi();
  return children;
}
