import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useEffect } from 'react';

interface ImageItemProps {
  src: string;
  alt: string;
  href: string;
}

const ImageItem = ({ src, alt, href }: ImageItemProps) => (
  <div className="overflow-hidden h-full w-full">
    <a href={href} data-fancybox="gallery">
      <img
        alt={alt}
        // className="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
        src={src}
      />
    </a>
  </div>
);

const ImageGrid = () => {
  // 初始化Fancybox（组件挂载后执行）
  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {});
  }, []);

  const images = [
    { src: './image.jpg', alt: 'rock formation', href: './image.jpg' },
    { src: './1.jpg', alt: 'rock formation', href: './1.jpg' },
    { src: './2.jpg', alt: 'rock formation', href: './2.jpg' },

    
    // 按需求补充更多图片数据...
  ];

  return (
    <section className="text-neutral-700">
      <div className="container w-full">
        <div className="flex flex-wrap w-full">
          {images.map((img, index) => (
            <div key={index} className="w-full md:w-1/2 p-1"><ImageItem {...img} /></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;