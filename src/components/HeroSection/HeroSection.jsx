import React from "react";
import HeroIMG from "../../assets/hero-img.png";
import OutlinedBtn from "../OutlinedBtn";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <section className="relative overflow-hidden w-full h-[1024px] flex flex-col justify-center items-center">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={HeroIMG}
        alt="Hero background"
      />

      <div className="absolute inset-0 bg-heroBg opacity-60"></div>

      <div className="absolute z-10 text-white text-center flex flex-col items-center justify-center gap-[20px] max-w-[1085px]  ">
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <h1 className="text-[64px] font-bold leading-[80px]">
            The chemical negatively charged
          </h1>
          <p className="text-6 font-lato leading-[32px] text-wrap w-[55%]">
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
        </div>
        <OutlinedBtn
          text="Get Started"
          className="border-white text-white bg-transparent text-[20px] leading-[34px] py-[5px] rounded-[8px]"
          onClick={() =>  scrollToSection("data-section")}
        />
      </div>
    </section>
  );
}
