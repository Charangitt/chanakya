import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import Txt from './Txt';
import Tactics from './Tactics';
import Strat from './Strat';
import Path from './Path';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './Cursor';
import { Routes, Route } from 'react-router-dom';
import Arena from './Arena';
import Home from './Home';
import Foot2 from './Foot2';
import FootApp from './FootApp';
import Quote from './Qoute';
import PathF from './PathF';

const word = "CHANAKYA";
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [dispWord, setDispWord] = useState("Welcome, Comrades");
  const [showProjectText, setShowProjectText] = useState(false);
  const totalDuration =0;
  useEffect(() => {

    setTimeout(() => {
      gsap.to("#animatedText", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          setDispWord("Let's Dive into");
          gsap.to("#animatedText", {
            duration: 1,
            opacity: 1,
            onComplete: () => {
              setTimeout(() => {
                gsap.to("#animatedText", {
                  duration: 1,
                  opacity: 0,
                  onComplete: () => {
                    setDispWord("_".repeat(word.length));
                    gsap.to("#animatedText", { duration: 1, opacity: 1 });
                    reveal();
                  }
                });
              }, 2000);
            }
          });
        }
      });
    }, 2000);

    setTimeout(() => {
      setShowProjectText(true);
      gsap.to('.project-text', { opacity: 1, y: 0, duration: 1, visibility: 'visible' });
      setTimeout(animateNavbarElements, 8000);
    }, totalDuration);
  }, []);

  const reveal = () => {
    word.split('').forEach((ltr, i) => {
      setTimeout(() => scramble(i), i * 480);
    });
  };

  const scramble = (index) => {
    let scrLtr = "_";
    const scrambleInt = setInterval(() => {
      scrLtr = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      updateWord(index, scrLtr);
    }, 50);
    setTimeout(() => {
      clearInterval(scrambleInt);
      updateWord(index, word[index]);
    }, 800);
  };

  const updateWord = (index, ltr) => {
    setDispWord(prev => prev.substring(0, index) + ltr + prev.substring(index + 1));
  };

  const animateNavbarElements = () => {
    gsap.fromTo(".navbar-item", { opacity: 0, y: -50 }, { opacity: 1, y: 0, stagger: 0.3, duration: 0.5 });
  };

  return (
    <>
    <Cursor/>
      
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <Txt dispWord={dispWord} showProjectText={showProjectText} />
            <Tactics />
            <Strat/>
            <Path/>
            <Quote/>
            <Foot2/>
            <FootApp/>
          </>
        } />
        <Route path="/pathf" element={<PathF />} />
      </Routes>

    </>
  );
}

export default App;
