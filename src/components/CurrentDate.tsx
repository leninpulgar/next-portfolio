'use client';

import { useEffect, useState } from 'react';

export function CurrentDate() {
  const [date, setDate] = useState<{ day: string; month: string } | null>(null);

  useEffect(() => {
    const now = new Date();
    setDate({
      day: String(now.getDate()).padStart(2, '0'),
      month: now.toLocaleString('en-US', { month: 'short' }),
    });
  }, []);

  return (
    <>
      <p className="text-6xl md:text-8xl font-mono">
        {date ? date.day : <span className="opacity-0">00</span>}
      </p>
      <p className="text-lg md:text-xl">
        {date ? date.month : <span className="opacity-0">---</span>}
      </p>
    </>
  );
}

