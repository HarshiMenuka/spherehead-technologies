'use client';
import React, { Suspense, lazy } from 'react';
import Loading from '../../components/ui/loading';
import './page.css';

// Lazy load components
const BlogPosts = lazy(() => import('../../components/BlogPosts'));
const JoinUs = lazy(() => import('../../components/Joinus'));

function Blogs() {
  return (
    <main className="bg-[#111] min-h-screen">
      <Suspense fallback={<Loading size="large" />}>
        <BlogPosts />
      </Suspense>
      
      <Suspense fallback={<Loading size="large" fullScreen={false} />}>
        <JoinUs />
      </Suspense>
    </main>
  );
}

export default Blogs;