export function AboutVideoHero() {
  return (
    <section className="relative flex h-[90vh] min-h-[550px] w-full items-center justify-center overflow-hidden text-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/about-hero-poster.jpg"
      >
        <source src="/videos/about-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Reimagining Medicine with AI</h1>
        <p className="mt-4 text-lg font-light sm:text-2xl">
          Innovating early breast cancer detection with VitaIntel
        </p>
      </div>
    </section>
  );
}
