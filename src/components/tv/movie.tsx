import Image from 'next/image';
import Link from 'next/link';

interface ImageProps {
  src: string;
  href: string;
}

export function Movie() {
  const images: ImageProps[] = [
    { src: '/assets/ariaplus.svg', href: '/link1' }
    // Add more images as needed
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
      {images.map((image, index) => (
        <Link key={index} href={image.href}>
          <a className='relative h-40 overflow-hidden rounded-lg'>
            <Image
              src={image.src}
              layout='fill'
              objectFit='cover'
              alt={`Grid Image ${index + 1}`}
            />
          </a>
        </Link>
      ))}
    </div>
  );
}
