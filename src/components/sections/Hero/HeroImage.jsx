import portrait from "../../../assets/images/hero-portrait.png";

function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[544px] pt-12 xl:pt-0">
      <div className="pointer-events-none absolute inset-0 m-auto h-[540px] w-[540px] rounded-full bg-blue-600/25 blur-[120px]" />

      <div className="relative z-10 mx-auto aspect-[0.814] w-[88%] overflow-hidden rounded-[32px] border border-white/20 bg-[#07142f] shadow-[0_24px_80px_rgba(0,43,154,0.24)] xl:h-[588px]">
        <img
          src={portrait}
          alt="Portrait of Hamzeh Al-Bawaneh"
          className="h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)]"
        />
      </div>
    </div>
  );
}

export default HeroImage;
