import React from 'react';
import Image from 'next/image';

// `size` controls the LAYOUT BOX (how much space the logo takes in the parent flex/row).
// `imgSize` (optional, in px) controls the RENDERED image size — it can be larger than
// the layout box, in which case the image overflows visually but does NOT push the
// parent's height. This is what lets the navbar stay compact even when you want a
// visually bigger logo.
const HEIGHT_MAP = { sm: 40, md: 48, lg: 64 };

const Logo = ({ size = 'md', imgSize, className = '' }) => {
  const h = HEIGHT_MAP[size] || HEIGHT_MAP.md;
  const px = imgSize || h;
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: `${Math.max(h, px)}px`, height: `${h}px` }}
    >
      <Image
        src="/logo.png"
        alt="SEBI RA Varun Kumar"
        width={px}
        height={px}
        priority={size !== 'lg'}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none object-contain"
      />
    </div>
  );
};

export default Logo;
