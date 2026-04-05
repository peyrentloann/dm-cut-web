import Image from "next/image";
import Link from "next/link";
import VideoHero from "@/components/VideoHero";
import ReviewCarousel from "@/components/ReviewCarousel";

/* ── Images ──────────────────────────────────────────────── */
const aboutImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoinMKJI96y0x64OveNmj6BupTxpsd3APvgcr1PYELgm1AqcTir9UbTwBcclM9WHHER8DBPUAPSEqWNaWUFrcGrCSIqY5oHzK5O3u8eJFN6XQ1BLwu4EZU0bgD0tcDhm1WqsCSGEPURoshhd_29RqVVp4WiCEUVsbNWIbwT4af2rUURicSMCDZx7CdR0y-aXm7VpxVT0lQ9RcvngVI06xa3cjWT7JSLPvoaGfVs6NwrRwAM2xxlU61z3htUeiz0iS0WXWPEyfhZIg";
const barberImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEuJdYWo-Nod9kk32jooQXAeCmFV-LO8Jm0JcUf52MzXPHyqi_3s0ljUHY-Jmr9fpmAjHuMQxASHJay-vISYhEZiYLRmtIbZxJNLnOU89n4KE0BP7Qc7FBvu2R5HVD5GSX17WKkv3XvSkgRwKycud62AsnX1W-wmClm5y0h_gcRe72vVE5MqnRbNBnBYpC3eTYKDgFblQr2P_DIlcjsedFOYyVG5EPzSeX4RBU_4dRp-DtapVDTSQP2RGbbQQpvp_-qicLsDG-kmQ";

const portfolioImgs = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbHmezi3dHeBbSz04QVqT0gfqqyU5XoRhlXwCHYXSMPTVMWsjxLDr4MROv32QtYKbS639wF-rLsveO8XkHRKIboWh56RVZ6vUFWWxGlItPagh3-lTFogutKR55bDHKKyLqPai8xYSc422Nk7YqWWznnxLLlUEgborGf8YwsZ9316XxU0Bmts3uUdyldAkv0XmNs1-3w0EVWFFZhTXKlTJEK4_s4YSCVfvJlnUVrgUqC6Z_8vnvgZ7kW4-Fsc4awc4PuFg8QVCyM2g", alt: "Skin fade précis", big: true },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk5ZUQdHETJah4nb6Ldwv2-Gywo94HCyHcQ50TY3X9OZDk2ThE9xNN2_Lr6nkMd0UBRhqobpriHobhf5OrO7Xzv-7qMnpRdAgkF6tg9nqD-3NfehBs9eStrkfr6GLb2PHj-4mQRIwpPARg-L5BHtoeHEXt_5WnVCDvdnA8N-_TS_2Vfk4u6o-a-BZks0Lweys2DH-J2UEDpex8UH991E8_nAmDI8y2L7pTOxNphfdK13xOZIiF-SNzv5sfTdPEPwv48Z-Mm3d3Q20", alt: "Coiffage", big: false },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnCBCCQWb0qYtqnItU3FJ63Mok4BN0Rfp4qICzvRrUuBdY1DF3ukJqOAWkkDAavd8IZpKODpgvHuI-eho7a8fTkrAM8jDemzbDQ0G40uRlctAXzv8xbS9Y2NZsmQaNymuJ4bbTAU_N3V1ixnU-AsfOFAlW_BdztQBG_KEbqEXCuibo1qqpZT0ZUBb8d-i6MxBO3mCg31BVtlKP6Bze_4pxbcyQL5BSEZKUNCf5UScvzNXfedsca0cbKxY_fRQTamaoQliiNnk0x_Y", alt: "Barbe soignée", big: false },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoinMKJI96y0x64OveNmj6BupTxpsd3APvgcr1PYELgm1AqcTir9UbTwBcclM9WHHER8DBPUAPSEqWNaWUFrcGrCSIqY5oHzK5O3u8eJFN6XQ1BLwu4EZU0bgD0tcDhm1WqsCSGEPURoshhd_29RqVVp4WiCEUVsbNWIbwT4af2rUURicSMCDZx7CdR0y-aXm7VpxVT0lQ9RcvngVI06xa3cjWT7JSLPvoaGfVs6NwrRwAM2xxlU61z3htUeiz0iS0WXWPEyfhZIg", alt: "Studio DM Cut", big: false },
];

/* ── Data ────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "5.0★", label: "Note Google" },
  { value: "8h–20h", label: "Lun. – Sam." },
  { value: "2+", label: "Ans d'expertise" },
];

const services = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Coupe Homme",
    desc: "Coupe personnalisée adaptée à votre morphologie et style, avec shampoing et coiffage texturé.",
    price: "À partir de 40$",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Taille de Barbe",
    desc: "Sculptage précis aux ciseaux, rasage des contours et soin hydratant pour une barbe impeccable.",
    price: "À partir de 20$",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Rasage Traditionnel",
    desc: "Le rituel complet : rasage au rasoir droit, serviette chaude et soin du visage. L'expérience authentique.",
    price: "À partir de 30$",
  },
];

const engagements = [
  {
    icon: "✦",
    title: "Précision",
    desc: "Chaque coupe est le fruit d'une attention minutieuse aux détails et à votre style unique.",
  },
  {
    icon: "◈",
    title: "Respect",
    desc: "Votre temps est précieux. Ponctualité et professionnalisme à chaque rendez-vous.",
  },
  {
    icon: "❋",
    title: "Ambiance",
    desc: "Un espace conçu pour le calme : plantes, lumière naturelle et musique douce.",
  },
];

const infoBlocks = [
  {
    label: "Adresse",
    content: <p className="font-semibold text-[#002d1c]">18 Rue Robinson S,<br />Granby, QC J2G 7K8</p>,
  },
  {
    label: "Horaires",
    content: (
      <ul className="space-y-1 text-sm font-medium text-[#002d1c]">
        <li className="flex justify-between gap-6"><span>Lun — Sam</span><strong>8h — 20h</strong></li>
        <li className="flex justify-between gap-6"><span>Dimanche</span><span className="text-[#4e635a]">Fermé</span></li>
      </ul>
    ),
  },
  {
    label: "Contact",
    content: (
      <div className="space-y-1">
        <a href="tel:4505784158" className="block font-semibold text-[#002d1c] hover:opacity-70 transition-opacity">(450) 578-4158</a>
        <a href="mailto:studio@dmcut.ca" className="block text-sm text-[#4e635a] hover:text-[#002d1c] transition-colors">studio@dmcut.ca</a>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ── 1. Hero vidéo ──────────────────────────────────── */}
      <VideoHero />

      {/* ── 2. Stats band ──────────────────────────────────── */}
      <section id="stats" className="bg-[#002d1c] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center reveal reveal-delay-${i + 1}`}>
                <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                <p className="text-[#95d4b3]/70 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Nos engagements ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {engagements.map((e, i) => (
              <div
                key={e.title}
                className={`p-10 reveal reveal-delay-${i + 1} ${i < 2 ? "md:border-r border-[#f0f0f0]" : ""}`}
              >
                <span className="text-3xl text-[#002d1c]/20 font-black block mb-5">{e.icon}</span>
                <h3 className="text-xl font-black text-[#002d1c] mb-3 tracking-tight">{e.title}</h3>
                <p className="text-[#4e635a] leading-relaxed text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Services ────────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl reveal">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-3">
                Services
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#002d1c] mb-6">
                Expertise &amp; Précision
              </h2>
              <p className="text-lg text-[#4e635a]">
                Des soins méticuleux adaptés à votre morphologie et à votre style. Chaque détail
                compte.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`bg-white p-10 rounded-2xl group hover:bg-[#002d1c] transition-all duration-500 reveal reveal-delay-${i + 1}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[#002d1c] group-hover:text-[#95d4b3] transition-colors">
                    {s.icon}
                  </span>
                  <span className="text-4xl font-black text-[#e7e8e9] group-hover:text-white/10 transition-colors select-none leading-none">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#002d1c] group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#4e635a] group-hover:text-[#95d4b3]/80 mb-10 transition-colors leading-relaxed text-sm">
                  {s.desc}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black text-[#002d1c] group-hover:text-white transition-colors">
                    {s.price}
                  </span>
                  <Link
                    href="/services"
                    className="text-[#002d1c] group-hover:text-white transition-all text-xl font-bold group-hover:translate-x-1 inline-block"
                    aria-label={`En savoir plus — ${s.title}`}
                  >
                    →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[#002d1c] text-[#002d1c] px-8 py-4 rounded-xl font-bold hover:bg-[#002d1c] hover:text-white transition-all duration-300"
            >
              Voir tous les services &amp; tarifs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Portfolio ───────────────────────────────────── */}
      <section className="py-32 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-3">
                Galerie
              </span>
              <h2 className="text-4xl font-black tracking-tighter text-[#002d1c]">Le Portfolio</h2>
            </div>
            <Link
              href="/galerie"
              className="text-sm font-bold text-[#002d1c]/60 hover:text-[#002d1c] transition-colors flex items-center gap-1 flex-shrink-0"
            >
              Voir tout →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
            {portfolioImgs.map((img, i) => (
              <div
                key={i}
                className={`relative bg-[#e7e8e9] rounded-2xl overflow-hidden group reveal reveal-delay-${i + 1} ${
                  img.big ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d1c]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-sm font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 bg-[#002d1c] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Voir toute la galerie →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. À propos ────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image src={aboutImg} alt="Barbier DM Cut" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#cee5d9] rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#f3f4f5] rounded-2xl -z-10" />
          </div>

          <div className="reveal reveal-delay-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-6">
              À propos
            </span>
            <h2 className="text-5xl font-black tracking-tighter text-[#002d1c] mb-8">
              L&apos;Art de<br />l&apos;Humain.
            </h2>
            <div className="space-y-5 text-[#4e635a] leading-relaxed">
              <p>
                DM Cut n&apos;est pas qu&apos;un simple rendez-vous, c&apos;est un moment de
                reconnexion. Dans un espace où la brutalité de l&apos;urbain rencontre la douceur
                du végétal, nous travaillons avec intention.
              </p>
              <p>
                Chaque style est pensé pour s&apos;adapter à votre quotidien, avec une attention
                particulière portée à l&apos;expérience : calme, précision, et café de qualité.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5 p-6 bg-[#f8f9fa] rounded-2xl">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                <Image src={barberImg} alt="Dany M." fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-[#002d1c] text-base leading-tight">Dany M.</h4>
                <p className="text-[#4e635a] text-sm">Fondateur &amp; Maître Barbier</p>
              </div>
              <Link
                href="/rejoins"
                className="ml-auto text-xs font-bold text-[#002d1c]/50 hover:text-[#002d1c] transition-colors uppercase tracking-widest"
              >
                Rejoins l&apos;équipe →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Reviews carousel ────────────────────────────── */}
      <ReviewCarousel />

      {/* ── 8. CTA Réservation ─────────────────────────────── */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto reveal">
          <div
            className="relative p-12 md:p-20 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
            style={{
              background: "linear-gradient(135deg, #002d1c 0%, #00452e 50%, #003d24 100%)",
            }}
          >
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#95d4b3]/10 pointer-events-none" />

            <div className="max-w-xl text-center md:text-left relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight tracking-tighter">
                Prends ton rendez-vous en 30 secondes.
              </h2>
              <p className="text-lg text-[#95d4b3]/70 mb-3">
                Accède à notre calendrier et choisis ton créneau.
              </p>
              <a
                href="tel:4505784158"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Ou appelle le (450) 578-4158
              </a>
            </div>
            <a
              href="https://www.dmcut.ca/prendre-rendez-vous"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 bg-white text-[#002d1c] px-10 py-5 rounded-xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl whitespace-nowrap flex-shrink-0"
            >
              Book maintenant →
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. Localisation ────────────────────────────────── */}
      <section className="py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-3">
              Nous trouver
            </span>
            <h2 className="text-4xl font-black tracking-tighter text-[#002d1c]">L&apos;Atelier</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-3 reveal">
              {infoBlocks.map(({ label, content }) => (
                <div key={label} className="bg-white p-6 rounded-2xl border border-[#e7e8e9]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 mb-3">{label}</p>
                  {content}
                </div>
              ))}
            </div>

            <div className="md:col-span-8 h-[460px] rounded-2xl overflow-hidden shadow-lg reveal reveal-delay-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.781258!2d-72.73505368468655!3d45.39994497910037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb6ab8b8d6a7d4f%3A0x1234567890abcdef!2s18+Rue+Robinson+S%2C+Granby%2C+QC+J2G+7K8!5e0!3m2!1sfr!2sca!4v1712000000000!5m2!1sfr!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DM Cut sur Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
