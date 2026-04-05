"use client";

const reviews = [
  { text: "Le meilleur studio à Granby. L'ambiance est incroyable et la coupe est toujours impeccable. On s'y sent vraiment bien.", author: "Marc-Antoine P.", initials: "MP", color: "#cee5d9" },
  { text: "Attention aux détails impressionnante. L'espace avec toutes les plantes est hyper relaxant. Je recommande l'expérience premium.", author: "Samuel L.", initials: "SL", color: "#b1f0ce" },
  { text: "Enfin un barbier qui comprend le style moderne. Propre, pro et ponctuel. Dany est au top de son art.", author: "Julien V.", initials: "JV", color: "#95d4b3" },
  { text: "J'y vais depuis 2 ans et je ne changerais jamais. La qualité est constante, l'accueil toujours chaleureux.", author: "Thomas B.", initials: "TB", color: "#cee5d9" },
  { text: "Mon fils de 8 ans qui détestait aller chez le barbier adore maintenant ses visites chez DM Cut. Incroyable.", author: "Émilie R.", initials: "ER", color: "#b1f0ce" },
  { text: "Le rasage traditionnel à la serviette chaude… une expérience hors du temps. Absolument à essayer.", author: "François D.", initials: "FD", color: "#95d4b3" },
  { text: "Service impeccable, ambiance calme et professionnalisme au rendez-vous. Exactement ce que je cherchais à Granby.", author: "Kevin M.", initials: "KM", color: "#cee5d9" },
  { text: "La décoration du studio est magnifique. Les plantes, la lumière naturelle… on se sent dans un endroit unique.", author: "Maxime T.", initials: "MT", color: "#b1f0ce" },
  { text: "Dany sait exactement ce qui me convient, même quand je ne sais pas l'expliquer. C'est ça le vrai talent.", author: "Antoine G.", initials: "AG", color: "#95d4b3" },
  { text: "Ponctualité parfaite, coupe parfaite. Le meilleur endroit pour se faire chouchouter à Granby sans aucun doute.", author: "Louis-Philippe R.", initials: "LR", color: "#cee5d9" },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] mx-3 bg-white rounded-2xl p-7 border border-[#e7e8e9] shadow-sm hover:shadow-md hover:border-[#002d1c]/20 transition-all duration-300">
      {/* Stars */}
      <p className="text-[#002d1c] text-base mb-4 tracking-wide">★★★★★</p>

      {/* Review text */}
      <p className="text-[#4e635a] text-sm leading-relaxed mb-6 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#f3f4f5]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#002d1c] text-xs font-black flex-shrink-0"
          style={{ backgroundColor: review.color }}
        >
          {review.initials}
        </div>
        <div>
          <p className="font-bold text-[#002d1c] text-sm leading-tight">{review.author}</p>
          <p className="text-[10px] font-medium text-[#4e635a]/60 uppercase tracking-widest">Client vérifié</p>
        </div>
        {/* Google G icon */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto flex-shrink-0 opacity-30" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
    </div>
  );
}

export default function ReviewCarousel() {
  // Duplicate for infinite loop effect
  const track = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-14">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-3">
              05 — Témoignages
            </span>
            <h2 className="text-4xl font-black tracking-tighter text-[#002d1c]">
              Ce qu&apos;ils disent
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/DM+Cut+Granby"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#002d1c]/60 hover:text-[#002d1c] transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            Voir tous les avis Google <span>→</span>
          </a>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative w-full mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {track.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse, slightly offset) */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track-reverse">
          {[...track].reverse().map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Star summary */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center">
          <p className="text-5xl font-black text-[#002d1c] leading-none">5.0</p>
          <p className="text-[#4e635a] text-base mt-1">★★★★★</p>
          <p className="text-xs text-[#4e635a]/60 mt-1 uppercase tracking-widest font-medium">Google Reviews</p>
        </div>
        <div className="w-px h-16 bg-[#e7e8e9] hidden sm:block" />
        <div>
          <p className="text-lg font-semibold text-[#002d1c] max-w-xs">
            Des centaines de clients satisfaits à Granby depuis l&apos;ouverture.
          </p>
        </div>
      </div>
    </section>
  );
}
