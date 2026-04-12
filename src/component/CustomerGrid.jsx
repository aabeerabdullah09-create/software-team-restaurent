export default function CustomerGrid({ title, photos }) {
  return (
    <section className="pt-12">
      <div className="text-orange-400 font-semibold tracking-[0.2em] text-sm">
        {title}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-xl">
            <img
              src={p.src}
              alt={p.alt}
              className="h-44 md:h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
