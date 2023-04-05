import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Blogs</h1>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.url} href={`/blog/${post.url}`}>
            <p>{post.title}</p>
          </Link>
        ))}
    </main>
  );
}
