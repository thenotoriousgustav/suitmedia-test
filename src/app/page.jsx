import Banner from '@/components/banner';

import getPosts from '@/lib/getPosts';

export default async function Homepage() {
  const posts = await getPosts();

  return (
    <>
      <div>
        <Banner />
      </div>
    </>
  );
}
