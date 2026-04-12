export default function StoryBlocks({ blocks }) {
    return (
        <>
            {blocks.map((b, idx) => (
                <div key={idx} className="py-10">
                    {b.type === "image" ? (
                        <div className="overflow-hidden rounded-2xl bg-black/30 aspect-[9/16] w-full max-w-3xl mx-auto">
                            <img
                                src={b.src}
                                alt={b.alt || "Story image"}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <section className="border-b border-white/10">
                            <div className="text-orange-400 font-semibold tracking-[0.2em] text-sm">
                                {b.titleSmall}
                            </div>

                            <h2 className="mt-4 text-2xl md:text-4xl font-semibold">
                                {b.titleBig}
                            </h2>

                            <p className="mt-5 text-white/80 leading-8 text-lg">
                                {b.text}
                            </p>
                        </section>
                    )}
                </div>
            ))}
        </>
    );
}
