import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function AspectRatioDemo() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className='bg-muted rounded-lg'>
      <Image
        src='/placeholder.webp'
        alt='Photo by Drew Beamer'
        fill
        className='h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale'
      />
    </AspectRatio>
  );
}
