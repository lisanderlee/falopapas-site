"use client";
import {  useEffect} from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
  useEffect(() => {
    const images = gsap.utils.toArray("img");
    const loader = document.querySelector(".loader--text");

    const updateProgress = (instance) => {
      loader.textContent = `${Math.round(
        (instance.progressedCount * 100) / images.length
      )}%`;
    };

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");
        const [x, xEnd] =
          index % 2
            ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    };

    imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);

    // Cleanup function to remove listeners when component unmounts
    return () => {
      imagesLoaded(images)
        .off("progress", updateProgress)
        .off("always", showDemo);
    };
  }, []);

  return (
    <div>
      <div className="loader df aic jcc">
        <div>
          <h1 className="text-white">Loading</h1>
          <h2 className="loader--text text-white">0%</h2>
        </div>
      </div>
      <div className="demo-wrapper">
        <section className="demo-text">
          <div className=" text-white wrapper  text">FALOPAPAS</div>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo11.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo12.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo13.jpg"
                width="1240"
              />
            </li>
         
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo21.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo22.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo23.jpg"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo31.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo32.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo33.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo34.jpg"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo41.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo42.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo43.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo44.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo45.jpg"
                width="1240"
              />
            </li>
          </ul>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo51.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo52.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo53.jpg"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo61.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo62.jpg"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo63.jpg"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section className="demo-text">
          <div className="wrapper text-white text"> ARTSTUDIO</div>
        </section>
        <footer className="df aic jcc"></footer>
      </div>
    </div>
  );
};

export default ImageGallery;
