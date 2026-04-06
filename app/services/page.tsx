import Link from "next/link";

const serviceGroups = [
  {
    category: "Coupes",
    number: "01",
    items: [
      { name: "Coupe Homme", price: "40$", desc: "Coupe complète adaptée à tous les styles et occasions, du classique aux tendances les plus audacieuses." },
      { name: "Dégradé / Fade", price: "45$", desc: "Dégradé précis du bas vers le haut, avec fondu parfait et ligne nette." },
      { name: "Mise en plis / Coiffage", price: "30$", desc: "Coiffage et structuration du cheveu avec des produits de qualité." },
      { name: "Coupe Étudiant (avec carte)", price: "30$", desc: "Tarif préférentiel sur présentation d'une carte étudiante valide." },
      { name: "Coupe Enfant (moins de 12 ans)", price: "25$", desc: "Coupe adaptée aux plus jeunes dans une ambiance détendue et bienveillante." },
    ],
  },
  {
    category: "Barbe & Rasage",
    number: "02",
    items: [
      { name: "Taille de Barbe / Moustache", price: "20$", desc: "Sculptage précis aux ciseaux et rasage des contours pour une barbe impeccable." },
      { name: "Rasage Traditionnel", price: "30$", desc: "Rasage au rasoir droit avec serviette chaude — l'expérience barbier authentique." },
    ],
  },
  {
    category: "Soins",
    number: "03",
    items: [
      { name: "Soin Capillaire Express", price: "20$", desc: "Traitement nourrissant pour redonner vie à vos cheveux abîmés ou secs." },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4e635a]/60">
            L&apos;Atelier Botanique
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#002d1c] leading-tight mt-2 mb-8">
            Nos Services
          </h1>
          <p className="text-lg text-[#4e635a] max-w-2xl leading-relaxed">
            Des tarifs transparents, des soins de qualité. Chaque service est une promesse
            d&apos;expertise et de précision, pensé pour sublimer votre style au quotidien.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="pb-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {serviceGroups.map((group) => (
            <div key={group.category}>
              {/* Category header */}
              <div className="flex items-baseline gap-6 mb-10 pb-4 border-b-2 border-[#002d1c]/8">
                <span className="text-5xl font-black text-[#e7e8e9] select-none leading-none">{group.number}</span>
                <h2 className="text-2xl font-black text-[#002d1c] tracking-tight">
                  {group.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-start justify-between gap-4 p-7 bg-[#f8f9fa] rounded-2xl hover:bg-[#002d1c] transition-all duration-400 cursor-default"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#002d1c] group-hover:text-white transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#4e635a] group-hover:text-[#95d4b3]/80 transition-colors leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-2xl font-black text-[#002d1c] group-hover:text-white transition-colors block">
                        {item.price}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#4e635a]/50 group-hover:text-[#95d4b3]/50 transition-colors">
                        À partir
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <div className="px-6 md:px-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#4e635a]/60 text-center border-t border-[#e7e8e9] pt-8">
            * Tous les prix sont à partir de. Le tarif final peut varier selon la longueur et la
            complexité. Taxes en sus.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 bg-[#002d1c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
                Prêt à prendre soin de toi ?
              </h2>
              <p className="text-[#95d4b3]/70 text-lg">
                Réserve ton créneau en ligne, c&apos;est rapide et gratuit.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/rdv"
                className="inline-block bg-white text-[#002d1c] px-10 py-5 rounded-xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap"
              >
                Prendre rendez-vous →
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-[#95d4b3]/40 text-[#95d4b3] px-10 py-5 rounded-xl font-bold text-lg hover:border-white hover:text-white transition-all whitespace-nowrap"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
