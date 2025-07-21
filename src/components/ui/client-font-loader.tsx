'use client';

import dynamic from 'next/dynamic';

const FontLoader = dynamic(() => import('@/components/ui/font-loader'), {
  ssr: false,
});

export default function ClientFontLoader() {
  return <FontLoader />;
}
