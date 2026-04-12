export default function StoryHero({ hero }) {
  return (
    <section className="relative">
      <div className="h-[55vh] w-full overflow-hidden">
        <img
          src={hero.image}
          alt="Story hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <div className="text-white/90 tracking-[0.25em] text-sm md:text-base">
            {hero.kicker}
          </div>
          <h1 className="mt-3 text-white text-4xl md:text-6xl font-semibold">
            {hero.title}
          </h1>
        </div>
      </div>
    </section>
  );
}

