"use client";

import Image from "next/image";
import { useState } from "react";

export default function LogoBrand() {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-base">C</span>
      </div>
    );
  }

  return (
    <Image
      src="/assets/logo.svg"
      alt="Clevitek"
      width={160}
      height={160}

      onError={() => setImgFailed(true)}
    />
  );
}
