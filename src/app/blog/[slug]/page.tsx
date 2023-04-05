import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPosts.map((post) => {
    return {
      slug: post.url,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);

  if (!post) return;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.url === params.slug);

  if (!post) notFound();

  const Content = getMDXComponent(post.body.code);

  return (
    <section>
      <h1>{post.title}</h1>
      <Content />
    </section>
  );
}
