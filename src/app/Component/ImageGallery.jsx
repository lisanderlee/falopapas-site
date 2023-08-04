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
        <section class="demo-text">
          <div class=" text-white wrapper  text">FALOPAPAS</div>
        </section>
        <section class="demo-gallery">
          <ul class="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo11.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo12.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo13.png"
                width="1240"
              />
            </li>
         
          </ul>
        </section>
        <section class="demo-gallery">
          <ul class="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo21.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo22.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo23.png"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section class="demo-gallery">
          <ul class="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo31.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo32.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo33.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo34.png"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section class="demo-gallery">
          <ul class="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo41.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo42.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo43.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo44.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo45.png"
                width="1240"
              />
            </li>
          </ul>
        </section>

        <section class="demo-gallery">
          <ul class="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo51.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo52.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo53.png"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section class="demo-gallery">
          <ul class="wrapper">
            <li>
              <img
                height="874"
                src="/content-images/Photo61.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo62.png"
                width="1240"
              />
            </li>
            <li>
              <img
                height="874"
                src="/content-images/Photo63.png"
                width="1240"
              />
            </li>
          </ul>
        </section>
        <section class="demo-text">
          <div class="wrapper text-white text"> ARTSTUDIO</div>
        </section>
        <footer class="df aic jcc"></footer>
      </div>
    </div>
  );
};

export default ImageGallery;
