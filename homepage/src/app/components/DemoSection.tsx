import { useState, useRef, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

export default function DemoSection() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState("/videos/ohjevideo1.mp4");
  const [animationClass, setAnimationClass] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute("data-section-id");
        if (entry.isIntersecting && (sectionId !== currentSection)) {
          setAnimationClass("");
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
            setAnimationClass("show");
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

  console.log("currentSection", currentSection)

  return (
    <section id="demo" className="demo-section min-h-screen bg-slate-300 flex">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        {/* Left Fixed Column */}
        <div className="w-full md:w-1/2 
          
          md:mt-0 md:-mb-0
          lg:mt-96 lg:-mb-36"
        >
          <div className={`
            w-full sm:px-2 md:px-4 lg:px-6 px-2
            sticky top-1/2 transform -translate-y-1/2
            demo-video-container ${animationClass}
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
        <div className="scroll-container w-full md:w-1/2 flex flex-col" >
          {/* <div ref={(el: any) => (sectionRefs.current[0] = el)}
          ></div> */}
          <div
            ref={(el: any) => (sectionRefs.current[0] = el)}
            className="scroll-element" data-section-id="section-1"
          >
            <h3 className="text-xl font-semibold">Scrollable Content 1</h3>
            <p>Some scrollable content goes here. Add more content as needed.</p>
          </div>

          <div
            ref={(el: any) => (sectionRefs.current[1] = el)}
            className="scroll-element" data-section-id="section-2"
          >
            <h3 className="text-xl font-semibold">Scrollable Content 2</h3>
            <p>More scrollable content goes here. Keep adding content to test scrolling.</p>
          </div>
          <div
            ref={(el: any) => (sectionRefs.current[2] = el)}
            className="scroll-element" data-section-id="section-3"
          >
            <h3 className="text-xl font-semibold">Scrollable Content 3</h3>
            <p>Additional content to scroll. You can add images, text, etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}