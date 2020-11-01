import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/01 header";
import Landing from "./components/02 landing";
import About from "./components/03 about";
import Projects from "./components/04 projects";
import Contacts from "./components/05 contacts";
import Footer from "./components/06 footer";

import "./styles/app.scss";

function App() {
  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    gsap.registerPlugin(ScrollTrigger);
    // // landing animation
    let tl1 = gsap.timeline();
    tl1
      .from(".text", {
        duration: 2,
        y: 100,
        delay: 0.7,
        ease: "power4.out",
        opacity: 0,
        skewY: 4,
        stagger: {
          amount: 0.3,
        },
      })
      .to(".overlay", {
        duration: 1,
        width: "0%",
        delay: -0.5,
        ease: "power4.out",
      })
      .from(".image", {
        duration: 1.4,
        scale: 1.6,
        ease: "power4.out",
        delay: -1,
      })
      .from(".scroll", {
        duration: 0.7,
        y: 30,
        opacity: 0,
        ease: "power4.out",
      });
    // landing animation

    // about animation

    let tl2 = gsap.timeline();
    tl2
      .from(".about-text h1", {
        // scrollTrigger: {
        //   trigger: ".about-text h1",
        //   start: "top center",
        //   markers: true,
        // },
        y: 50,
        skewY: 2,
        opacity: 0,
        ease: "power2.in",
        duration: 1,
      })
      .from(".about-text p", {
        y: 50,
        opacity: 0,
        ease: "power2.in",
        duration: 1,
        delay: -0.4,
      })
      .to(".overlay2", {
        width: "0%",
        duration: 1,
        ease: "power4.out",
      })
      .from(".about-image img", {
        duration: 1.8,
        scale: 1.6,
        ease: "power4.out",
        delay: -1,
      })
      .from(".our-work-btn", {
        x: 50,
        opacity: 0,
        ease: "power4.out",
        duration: 0.7,
        delay: -0.7,
      });

    ScrollTrigger.create({
      animation: tl2,
      trigger: ".about",
      start: "top bottom",
    });
    // about animation

    // project animation

    let tl3 = gsap.timeline();

    tl3
      .from(".project-heading h1", {
        x: 30,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        ease: "power2.in",
      })
      .from(".project-heading img", {
        x: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      .to(".overlay3", {
        width: "0%",
        duration: 1,
        ease: "power4.out",
      })
      .from(".pi img", {
        duration: 1.8,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: -1,
        stagger: {
          amount: 1,
        },
      });

    ScrollTrigger.create({
      animation: tl3,
      trigger: ".projects",
      start: "top bottom",
      end: "bottom top",
    });

    // project animation

    // contact animation

    let tl4 = gsap.timeline();

    tl4
      .from(".contact-text h1", {
        duration: 0.5,
        opacity: 0,
        y: 40,
        ease: "power2.in",
        delay: 0.5,
      })
      .from(".contact-text h4", {
        duration: 0.6,
        opacity: 0,
        y: 25,
        ease: "power2.in",
        stagger: {
          amount: 0.3,
        },
      })
      .from(".contact-item", {
        y: 25,
        duration: 0.8,
        opacity: 0,
        ease: "power4.in",
        stagger: {
          amount: 0.4,
        },
      });

    ScrollTrigger.create({
      animation: tl4,
      trigger: ".contacts",
      start: "top bottom",
      end: "bottom top",
    });

    // contact animation
  }, []);

  return (
    <div className='App'>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
