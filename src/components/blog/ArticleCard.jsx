import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article }) {
  const { content } = article;
  const filename    = content.image?.filename;
  const src         = filename?.startsWith("//") ? `https:${filename}` : filename;

  return (
    <article className='rounded-lg overflow-hidden bg-background shadow-lg'>
      {src && (
        <div className="relative w-full aspect-video">
          <Image
            src={src}
            alt={content.image.alt ?? content.title ?? ""}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
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
