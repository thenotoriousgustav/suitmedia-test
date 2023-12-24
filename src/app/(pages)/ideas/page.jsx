import Banner from '@/components/banner';
import ListPost from '@/components/list-post';
import PaginationControls from '@/components/pagination-controls';
import SkeletonCard from '@/components/skeleton-card';

import getPosts from '@/lib/getPosts';
import { Suspense } from 'react';

export default async function IdeasPage() {
  const posts = await getPosts();

  return (
    <>
      <Banner />
      <Suspense fallback={<SkeletonCard />}>
        <ListPost posts={posts} />
      </Suspense>

      <PaginationControls />
    </>
  );
}
