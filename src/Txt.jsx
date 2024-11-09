import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Text } from 'react-font';
import { useScroll } from 'framer-motion';

const Txt = ({ dispWord, showProjectText }) => {
  const projectTextRef = useRef(null);

  useEffect(() => {
    if (showProjectText) {
      gsap.to(projectTextRef.current, { opacity: 1, y: 0, duration: 1 });
    }
  }, [showProjectText]);

  const [images, setImages] = useState([
    { url: "img1.jpg", top: "140%", left: "50%", isA: false },
    { url: "img2.jpg", top: "150%", left: "80%", isA: false },
    { url: "img3.jpg", top: "130%", left: "32%", isA: false },
    { url: "img4.jpg", top: "158%", left: "32%", isA: false },
    { url: "img0.jpg", top: "190%", left: "58%", isA: false }
  ]);

  const { scrollYProgress } = useScroll();

  const imga = (arr) => {
    setImages((prev) =>
      prev.map((item, index) =>
        arr.indexOf(index) === -1
          ? { ...item, isA: false }
          : { ...item, isA: true }
      )
    );
  };

  scrollYProgress.on("change", (progress) => {
    switch (Math.floor(progress * 50)) {
      case 0:
        imga([]);
        break;
      case 1:
        imga([0]);
        break;
      case 2:
        imga([0, 1]);
        break;
      case 3:
        imga([0, 1, 2]);
        break;
      case 4:
        imga([0, 1, 2, 3]);
        break;
      case 5:
        imga([0, 1, 2, 3, 4]);
        break;
      case 6:
        imga([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="App relative flex flex-col justify-center items-center h-[84vh] bg-black pb-50 ">
      <Text id="animatedText" family="Roboto" weight={400} className="text-[28vh] text-white">
        {dispWord}
      </Text>
      <div className="top-0 w-60 h-60 absolute">
        {images.map((elem, index) =>
          elem.isA ? (
            <img
              key={index}
              className="rounded-lg absolute w-full h-full -translate-x-[50%] -translate-y-[50%]"
              src={elem.url}
              style={{ top: elem.top, left: elem.left }}
              alt=""
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Txt;
