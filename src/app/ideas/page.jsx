import Banner from '@/components/banner';
import ListPost from '@/components/list-post';
import getPosts from '@/lib/getPosts';

export default async function IdeasPage() {
  const posts = await getPosts();

  return (
    <>
      <div>
        <Banner />

        <ListPost posts={posts} />
      </div>
    </>
  );
}
