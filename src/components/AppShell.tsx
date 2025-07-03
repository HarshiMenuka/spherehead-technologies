"use client";
import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Loading from '@/components/ui/loading';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Let the Loading component handle its own timing, but we need to hide content until it's done
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
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