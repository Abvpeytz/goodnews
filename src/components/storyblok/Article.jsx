import { storyblokEditable, StoryblokServerRichText } from "@storyblok/react/rsc";

export default function Article({ blok }) {
  return (
    <div className='article' {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
      <StoryblokServerRichText doc={blok.content} />
    </div>
  );
}
