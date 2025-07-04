"use client";
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Loading from '@/components/ui/loading';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Nav />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
} 