import { useState, useRef, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DemoSection() {
  const [currentSection, setCurrentSection] = useState<string | null>("section-1");
  const [activeVideo, setActiveVideo] = useState("/videos/ohjevideo1.mp4");
  const [animationClass, setAnimationClass] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = useTranslations('DemoSection');

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

  const mobileSectionClass = "px-7 py-32"
  const mobileDivClass = "flex flex-col gap-2 pt-7";
  const mobileTitleClass = "text-xl font-semibold"

  const desktopDivClass = "flex flex-col justify-center text-balance gap-5";
  const desktopTitleClass = "text-md lg:text-2xl font-semibold";
  const desktopParagraphClass = "text-md lg:text-xl";
  return (
    <section id="demo" className="demo-section min-h-screen pt-36 lg:pt-40">
      <div className="text-center -mb-20">
        <h1 className="text-xl lg:text-3xl font-semibold">
          Miten tämä kaikki toimii?
        </h1>
      </div>
      <div className="flex">
        {/* Mobile View */}
        <div className="flex flex-col lg:hidden">
          {/* Video and Content 1 */}
          <div className={`${mobileSectionClass}`}>
            <VideoPlayer
              src="/videos/ohjevideo1.mp4"
              controls
              autoPlay
              loop
              muted
              className="shadow-md"
            />
            <div data-section-id="section-1" className={mobileDivClass}>
              <h3 className={mobileTitleClass}>{t("section_1_title")}</h3>
              <p>{t("section_1_paragraph")}</p>
            </div>
          </div>

          {/* Video and Content 2 */}
          <div className={`${mobileSectionClass}`}>
            <VideoPlayer
              src="/videos/ohjevideo2.mp4"
              controls
              autoPlay
              loop
              muted
              className="shadow-lg"
            />
            <div data-section-id="section-2" className={mobileDivClass}>
              <h3 className={mobileTitleClass}>{t("section_2_title")}</h3>
              <p>{t("section_2_paragraph")}</p>
            </div>
          </div>

          {/* Video and Content 3 */}
          <div className={`${mobileSectionClass}`}>
          <VideoPlayer
              src="/videos/ohjevideo3.mp4"
              controls
              autoPlay
              loop
              muted
              className="shadow-lg"
            />
            <div data-section-id="section-3" className={mobileDivClass}>
              <h3 className={mobileTitleClass}>{t("section_3_title")}</h3>
              <p>{t("section_3_paragraph")}</p>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row w-full max-w-screen-2xl mx-auto ">
          {/* Left Fixed Column */}
          <div className="w-1/2 mt-48 lg:mt-72 lg:-mb-26">
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
              className={desktopDivClass} data-section-id="section-1" id="demo-1"
              ref={(el: any) => (sectionRefs.current[0] = el)}
              style={{ height: "85svh" }}
            >
              <h3 className={desktopTitleClass}>{t("section_1_title")}</h3>
              <p className={desktopParagraphClass}>{t("section_1_paragraph")}</p>
            </div>

            <div
              className={desktopDivClass} data-section-id="section-2" id="demo-2"
              ref={(el: any) => (sectionRefs.current[1] = el)}
              style={{ height: "85svh" }}
            >
              <h3 className={desktopTitleClass}>{t("section_2_title")}</h3>
              <p className={desktopParagraphClass}>{t("section_2_paragraph")}</p>
            </div>
            <div
              className={desktopDivClass} data-section-id="section-3" id="demo-3"
              ref={(el: any) => (sectionRefs.current[2] = el)}
              style={{ height: "85svh" }}
            >
              <h3 className={desktopTitleClass}>{t("section_3_title")}</h3>
              <p className={desktopParagraphClass}>{t("section_3_paragraph")}</p>
            </div>
          </div>

          {/* Navigation bubbles */}
          <div>
            <div className="mt-48 lg:mt-96 lg:mb-72 sticky top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
              <Link href="#demo-1" className={`${currentSection==="section-1" ? "bg-primary" : "bg-white"} w-4 h-4 mx-4 rounded-full`} style={{border:"1px solid black"}} />
              <Link href="#demo-2" className={`${currentSection==="section-2" ? "bg-primary" : "bg-white"}  w-4 h-4 mx-4 rounded-full`} style={{border:"1px solid black"}} />
              <Link href="#demo-3" className={`${currentSection==="section-3" ? "bg-primary" : "bg-white"}  w-4 h-4 mx-4 rounded-full`} style={{border:"1px solid black"}} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}