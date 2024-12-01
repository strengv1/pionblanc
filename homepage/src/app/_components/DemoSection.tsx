import { useState, useRef, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

export default function DemoSection() {
  const [currentSection, setCurrentSection] = useState<string | null>("section-1");
  const [activeVideo, setActiveVideo] = useState("/videos/ohjevideo1.mp4");
  const [animationClass, setAnimationClass] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute("data-section-id");
        if (entry.isIntersecting && (sectionId !== currentSection)) {
          setAnimationClass("hide");
          setTimeout(() => {
            setCurrentSection(sectionId);
            switch (sectionId){
              case "section-1":
                setActiveVideo("/videos/ohjevideo1.mp4");
                break;
              case "section-2":
                setActiveVideo("/videos/ohjevideo2.mp4");
                break;
              case "section-3":
                setActiveVideo("/videos/ohjevideo3.mp4");
                break;
              default:
                break;
            }
            setAnimationClass("");
          }, 300)
        }
      })
    },
    {
      root: null, // Use the viewport as the root
      threshold: 0.60, // Trigger when 60% of the section in view
    })

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref); // Ensure ref is not null
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, [currentSection]);

  const mobileScrollSectionClass = "flex flex-col gap-2 pt-6 py-12";
  return (
    <section id="demo" className="demo-section min-h-screen bg-slate-300 flex">
      {/* Mobile View */}
      <div className="flex flex-col md:hidden">
        {/* Video and Content 1 */}
        <div className="w-full px-4 py-4">
          <VideoPlayer
            src="/videos/ohjevideo1.mp4"
            controls
            autoPlay
            loop
            muted
            className="shadow-md"
          />
          <div data-section-id="section-1" className={mobileScrollSectionClass}>
            <h3 className="text-xl font-semibold">Scrollable Content 1</h3>
            <p>Some scrollable content goes here. Add more content as needed.</p>
          </div>
        </div>

        {/* Video and Content 2 */}
        <div className="w-full px-4 py-4">
          <VideoPlayer
            src="/videos/ohjevideo2.mp4"
            controls
            autoPlay
            loop
            muted
            className="shadow-lg"
          />
          <div data-section-id="section-2" className={mobileScrollSectionClass}>
            <h3 className="text-xl font-semibold">Scrollable Content 2</h3>
            <p>More scrollable content goes here. Keep adding content to test scrolling.</p>
          </div>
        </div>

        {/* Video and Content 3 */}
        <div className="w-full px-4 py-4">
        <VideoPlayer
            src="/videos/ohjevideo3.mp4"
            controls
            autoPlay
            loop
            muted
            className="shadow-lg"
          />
          <div data-section-id="section-3" className={mobileScrollSectionClass}>
            <h3 className="text-xl font-semibold">Scrollable Content 3</h3>
            <p>Additional content to scroll. You can add images, text, etc.</p>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row w-full max-w-screen-2xl mx-auto ">
        {/* Left Fixed Column */}
        <div className="w-1/2 mt-48 lg:mt-96 lg:-mb-28">
          <div className={`px-4 w-full demo-video-container ${animationClass}
            sticky top-1/2 transform -translate-y-1/2
            lg:px-6
          `}>
            {activeVideo && (
              <>
              {/* {activeVideo} */}
              <VideoPlayer
                src={activeVideo}
                controls
                autoPlay
                loop
                muted
                className="rounded-md shadow-lg"
                width="100%"
                height="100%"
              />
              </>
              
            )}
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div className="scroll-container w-1/2 flex flex-col" >
          <div
            className="flex flex-col justify-center" data-section-id="section-1"
            ref={(el: any) => (sectionRefs.current[0] = el)}
            style={{ height: "85svh" }}
          >
            <h3 className="text-xl font-semibold">Scrollable Content 1</h3>
            <p>Some scrollable content goes here. Add more content as needed.</p>
          </div>

          <div
            className="flex flex-col justify-center" data-section-id="section-2"
            ref={(el: any) => (sectionRefs.current[1] = el)}
            style={{ height: "85svh" }}
          >
            <h3 className="text-xl font-semibold">Scrollable Content 2</h3>
            <p>More scrollable content goes here. Keep adding content to test scrolling.</p>
          </div>
          <div
            style={{ height: "85svh" }}
            className="flex flex-col justify-center" data-section-id="section-3"
            ref={(el: any) => (sectionRefs.current[2] = el)}
          >
            <h3 className="text-xl font-semibold">Scrollable Content 3</h3>
            <p>Additional content to scroll. You can add images, text, etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}