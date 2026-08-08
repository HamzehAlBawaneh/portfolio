import portrait from "../../../assets/images/hero-portrait.png";

function HeroImage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[544px] justify-center xl:-translate-y-12 xl:justify-end">
      <div className="absolute top-1/2 left-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[120px]" />

      <div className="relative z-10 aspect-[0.814] w-[88%] overflow-hidden rounded-[32px] border border-white/20 bg-[#07142f] shadow-[0_24px_80px_rgba(0,43,154,0.24)] xl:w-[88%] xl:h-[588px]">
        <img
          src={portrait}
          alt="Portrait of Hamzeh Al-Bawaneh"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)]" />
      </div>
    </div>
  );
}

export default HeroImage;
