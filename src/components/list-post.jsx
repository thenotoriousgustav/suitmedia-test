'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';

import Container from './container';
import formatDate from '@/lib/dateFormat';
import { useState } from 'react';

export default function ListPost({ posts }) {
  const [sortValue, setSortValue] = useState('');
  const [perPage, setPerPage] = useState(10);

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };

  const handlePerPageChange = (e) => {
    setPerPage(Number(e.target.value));
  };

  const sortBlogPostsById = () => {
    let sortedData = [...posts.data];

    if (sortValue === 'asc') {
      return posts.data.sort((a, b) => (a.id < b.id ? -1 : 1));
    } else if (sortValue === 'desc') {
      return posts.data.sort((a, b) => (a.id > b.id ? -1 : 1));
    }
    return sortedData.slice(0, perPage);
  };

  const sortedPosts = sortBlogPostsById();

  return (
    <Container className='mt-10'>
      <Filter
        sortValue={sortValue}
        perPage={perPage}
        handleSortChange={handleSortChange}
        handlePerPageChange={handlePerPageChange}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 w-full'>
        {sortedPosts.map((post) => {
          return (
            <Card className='w-[300px] shadow-xl' key={post.id}>
              <CardHeader className='p-0'>
                <Image
                  src='/img/about.jpg'
                  alt={post.title}
                  className='h-[230px] w-full rounded-md object-cover'
                  width='0'
                  height='0'
                  sizes='100vw'
                />
              </CardHeader>
              <CardContent className='mt-6'>
                <CardDescription>
                  {formatDate(post.published_at)}
                </CardDescription>
                <CardTitle className='text-ellipsis	line-clamp-3'>
                  {post.title}
                </CardTitle>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

const Filter = ({
  sortValue,
  perPage,
  handlePerPageChange,
  handleSortChange,
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='font-semibold'>Showing 1 - 10 of 100</p>
      </div>
      <div className='flex items-center space-x-20'>
        <div className='flex items-center space-x-4'>
          <p className='font-semibold'>Sort by date</p>
          <select
            value={sortValue}
            onChange={handleSortChange}
            className='border-2 rounded-full px-4  py-2'
          >
            <option value=''>Sort by date</option>
            <option value='asc'>Oldest</option>
            <option value='desc'>Newest</option>
          </select>
        </div>
        <div className='flex items-center space-x-4'>
          <p className='font-semibold'>Shows Per Page</p>
          <select
            value={perPage}
            onChange={handlePerPageChange}
            className='border-2 rounded-full px-4  py-2'
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};
