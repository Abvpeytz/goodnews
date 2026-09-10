import { getStoryblokApi } from "@/src/lib/storyblok";
import Logo from "./logo";

export default async function Header() {
  const { data } = await fetchSiteSettings();

  const settings = data.story.content;

  return (
    <header className='flex flex-row items-center gap-4 p-5 bg-background mb-4 rounded-lg shadow-lg'>
      <Logo src={settings.logo} />

      <h2 className='font-mono text-2xl font-bold'>{settings.title}</h2>
    </header>
  );
}

export async function fetchSiteSettings() {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get("cdn/stories/config/site-settings");
}
