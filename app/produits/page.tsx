import Image from "next/image";

const products = [
  {
    name: "DM Cut Atelier Tee",
    variant: "Coton Organique / Noir",
    price: "45$",
    badge: "Bestseller",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6mosl60m9AVO0KCZgW6Y6ikMyXlzhAyqslMlDrHeeK7kNKrKFZKi1__IMVZSljGbl2dIY0x4cWSsHzgaQ5cV190nRtnJH_8wnxLqAIVrdpxuZ8h-KUJAdAPox9NKjsUkHH_sJWF05XXGPQ4QwfKEYIBlvRlqgQYC--TxaE3F_zvp2f1csyAIj55c_6AvSP2PatFeZMw5PXs9Zq_IKy8AQRpt8v90AKaHf3Pt1xjxmIw7rfw4swobty7tkWGcj7MiLASRNovFHTHY",
    alt: "DM Cut Atelier Tee",
  },
  {
    name: "DM Cut Pommade",
    variant: "Finition Mat / 100ml",
    price: "28$",
    badge: null,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zy4Sko_FUTXfpBD4HGFOMMjSk0iXkopFvDpXTT2AP6JIX1bbLo8O6-AZhl8oW5pbHSViVdLrfwJ2iy5y3Gh2c2DaHuRqgIOStTA_ihhCznEcYAllDA3Wkg8maRSxCmghdfTywxQOhe5Rj9XUpHmLu-F_8YVTix6q23-i-EOkZvjOqWD3hDVUAVbargFba5E4qnApRfXFlJCTEX1US_P4wk1EqEVVgVDXBF8OTspC-0_bl98oUEA3r5zpF0ictz16r1njxdIag8E",
    alt: "DM Cut Pommade",
  },
  {
    name: "DM Cut Sea Salt Spray",
    variant: "Texture & Volume / 200ml",
    price: "32$",
    badge: "Nouveau",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3HIuzYrrKwNTKKKreVsknka6y_08q2RT-lBpmsAB1Q0legjSISynGZtbU3tAi3VIRtR-k0S91kZD3fAgvVuU4oeFukQDqvkZwjL-9LVztIKCokLt2EREqY8gh5zxDE5NDiMp-huz2TNeX3u4K2rIoPA9htvUjTUtSej9dt6qLMoNysl-3Z75GquASlRWM9e3WRh_x_a88SYB6gskY77MhCjGB0Ynacbk86Ll3zTBgVM-9qwNLFnu_POLx8cUPnBqfTtZIi0c7fI",
    alt: "DM Cut Sea Salt Spray",
  },
];

export default function Produits() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4e635a]/60">
            L&apos;Atelier Botanique
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#002d1c] leading-tight mt-2 mb-8">
            Nos Produits
          </h1>
          <p className="text-lg text-[#4e635a] max-w-2xl leading-relaxed font-light">
            Une sélection rigoureuse d&apos;essentiels pour l&apos;homme moderne, conçue au cœur de
            notre atelier avec une esthétique minimale et une performance sans compromis.
          </p>
        </div>
      </div>

      {/* Produits */}
      <section className="pb-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((p) => (
              <article key={p.name} className="group flex flex-col">
                <div className="aspect-[4/5] bg-[#f3f4f5] overflow-hidden relative mb-6 rounded-2xl">
                  {p.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[#002d1c] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {p.badge}
                    </div>
                  )}
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#002d1c]/0 group-hover:bg-[#002d1c]/8 transition-colors duration-500" />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-bold tracking-tight text-[#002d1c] uppercase">
                      {p.name}
                    </h3>
                    <span className="text-xl font-black text-[#002d1c] ml-4 flex-shrink-0">{p.price}</span>
                  </div>
                  <p className="text-xs text-[#4e635a]/60 mb-6 font-medium uppercase tracking-widest">
                    {p.variant}
                  </p>
                  <button className="mt-auto w-full bg-[#002d1c] text-white py-4 rounded-xl hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn font-bold text-sm">
                    <span className="uppercase tracking-widest">Ajouter au panier</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur visuel */}
      <div className="px-6 md:px-8 bg-white pb-8">
        <div className="max-w-7xl mx-auto border-t border-[#e7e8e9]" />
      </div>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-4">Newsletter</span>
            <h2 className="text-4xl font-black text-[#002d1c] mb-6 tracking-tighter">
              Restez connecté<br />à l&apos;atelier
            </h2>
            <p className="text-[#4e635a] mb-8 text-lg leading-relaxed">
              Inscrivez-vous pour recevoir nos sorties exclusives, nos conseils de soin et les
              actualités de DM Cut.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="votre@email.ca"
                className="flex-grow bg-white border border-[#e7e8e9] px-5 py-4 text-sm focus:outline-none focus:border-[#002d1c] rounded-xl transition-colors placeholder:text-[#4e635a]/40"
              />
              <button
                type="submit"
                className="bg-[#002d1c] text-white px-7 py-4 text-xs uppercase tracking-widest font-black hover:opacity-90 rounded-xl transition-opacity whitespace-nowrap"
              >
                S&apos;abonner
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[#edeeef] overflow-hidden rounded-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqCei-nZ7qC0irGvnbv57Vi4OzWMSlRpTsBs2DWQs1Fjti6q2NEejs7zDCGsHX7OPBUig8sVd7B9USq3-u-BsHLhATunT_dwB8FloPJ7tSq6m4fnS7P2MSGzI5fWcxsWP9ZBtkGZtV2qoXgjHV1FyN7x_TBNMacaFg2weHgwmlpSpf2LdzN_ncJOLEDPMyBwQmOuin9LcKfz-Kf_n-AIlPqb4EVir1Jpx4Vq4ue90uHcOS20QR6hr52AkRrrzvKlIWdXQ"
                alt="Détail salon"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square bg-[#edeeef] overflow-hidden rounded-2xl relative translate-y-6">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRtKHPWJiLVc_9W6J7e3VPnPtoSUGd93VB8q6DkyDQRmW1Al0SZ6bhf9fvw3liifW2h2tuLbSaAhg-t4YLlffuzlDkQifTVc4a9Ioeep5Rb1xU_YsBKTdCGb8bnSSxkC8mqq4ze-grWwzXD4lKx6E4IOLKsOdwle0J_RrLCIIl9u9JmvrxxTmpks2ExhNtQoSkDOL3B5u0DAkXeRupbH1pyCQ5kUFSmO4BJZ_iAPjl56-HXzpL5CQ3BV4ZR_dXS9xeaBztVkmcGg"
                alt="Fauteuil barbier"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
