import { storyblokEditable } from "@storyblok/react/rsc";

export default function Article({ blok }) {
  return (
    <div className='article' {...storyblokEditable(blok)}>
      <span>{blok.name}</span>
    </div>
  );
}
