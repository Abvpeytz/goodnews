import Link from "next/link";
import { Image } from "next/image";

export default function ArticleCard({ article }) {
  const { content } = article;

  return (
    <article className='rounded-lg overflow-hidden bg-background shadow-lg'>
      {content.image?.filename && (
        <Image
          src={content.image.filename}
          alt={content.image.alt ?? content.title ?? ""}
          className='w-full aspect-video object-cover'
        />
      )}

      <div className='p-5'>
        <h3 className='text-xl font-bold mb-2'>{content.title}</h3>

        {content.excerpt && (
          <p className='text-muted-foreground mb-4'>{content.excerpt}</p>
        )}

        <Link
          href={`/articles/${article.slug}`}
          className='font-medium underline'
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
