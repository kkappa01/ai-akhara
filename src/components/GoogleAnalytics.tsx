'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  if (!gaId) {
    console.warn('Google Analytics ID not found. Please set NEXT_PUBLIC_GA_ID environment variable.');
    return null;
  }

  return <GA gaId={gaId} />;
}
