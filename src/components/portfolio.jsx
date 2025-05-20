import React from "react";
import Image from "next/image";

const MasonryGrid = () => {
  const images = [
    '/images/img2.jpg',
    '/images/img1.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
    '/images/img9.jpg',
  ];

  const links = [
    '#', '#', '#', '#', '#', '#', '#', '#', '#'
  ];

  const gridItems = [
    { cols: 3, rows: 2 },
    { cols: 1, rows: 2 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 1, rows: 2 },
    { cols: 3, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
  ];

  

  return (
    <div className="grid grid-cols-4 gap-2 p-4 mx-10 auto-rows-[200px]">
      {images.map((src, index) => (
        <a
          key={index}
          href={links[index]}
          className={`col-span-${gridItems[index].cols} row-span-${gridItems[index].rows} group overflow-hidden rounded-[12px]`}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 group-hover:scale-105"
            width={800}
            height={600}
          />
        </a>
      ))}
    </div>
  );
};

export default MasonryGrid;
