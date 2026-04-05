import Image from "next/image";

const images = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbHmezi3dHeBbSz04QVqT0gfqqyU5XoRhlXwCHYXSMPTVMWsjxLDr4MROv32QtYKbS639wF-rLsveO8XkHRKIboWh56RVZ6vUFWWxGlItPagh3-lTFogutKR55bDHKKyLqPai8xYSc422Nk7YqWWznnxLLlUEgborGf8YwsZ9316XxU0Bmts3uUdyldAkv0XmNs1-3w0EVWFFZhTXKlTJEK4_s4YSCVfvJlnUVrgUqC6Z_8vnvgZ7kW4-Fsc4awc4PuFg8QVCyM2g", alt: "Skin fade précis", cols: 2, rows: 2 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk5ZUQdHETJah4nb6Ldwv2-Gywo94HCyHcQ50TY3X9OZDk2ThE9xNN2_Lr6nkMd0UBRhqobpriHobhf5OrO7Xzv-7qMnpRdAgkF6tg9nqD-3NfehBs9eStrkfr6GLb2PHj-4mQRIwpPARg-L5BHtoeHEXt_5WnVCDvdnA8N-_TS_2Vfk4u6o-a-BZks0Lweys2DH-J2UEDpex8UH991E8_nAmDI8y2L7pTOxNphfdK13xOZIiF-SNzv5sfTdPEPwv48Z-Mm3d3Q20", alt: "Coiffage avec pommade", cols: 1, rows: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnCBCCQWb0qYtqnItU3FJ63Mok4BN0Rfp4qICzvRrUuBdY1DF3ukJqOAWkkDAavd8IZpKODpgvHuI-eho7a8fTkrAM8jDemzbDQ0G40uRlctAXzv8xbS9Y2NZsmQaNymuJ4bbTAU_N3V1ixnU-AsfOFAlW_BdztQBG_KEbqEXCuibo1qqpZT0ZUBb8d-i6MxBO3mCg31BVtlKP6Bze_4pxbcyQL5BSEZKUNCf5UScvzNXfedsca0cbKxY_fRQTamaoQliiNnk0x_Y", alt: "Client avec barbe soignée", cols: 1, rows: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoinMKJI96y0x64OveNmj6BupTxpsd3APvgcr1PYELgm1AqcTir9UbTwBcclM9WHHER8DBPUAPSEqWNaWUFrcGrCSIqY5oHzK5O3u8eJFN6XQ1BLwu4EZU0bgD0tcDhm1WqsCSGEPURoshhd_29RqVVp4WiCEUVsbNWIbwT4af2rUURicSMCDZx7CdR0y-aXm7VpxVT0lQ9RcvngVI06xa3cjWT7JSLPvoaGfVs6NwrRwAM2xxlU61z3htUeiz0iS0WXWPEyfhZIg", alt: "Barbier en action", cols: 1, rows: 2 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJqkhnruP0lyJeitshhTKJgJOnkhNmZ7MZIJA2NsnYi2Y2KA-iAXSfX1fomv2y9XENEJfN3tY_eZMvleGqHBL-AyCeh7KMPJhgwLCWZDncWtWWSxn6Xm-y527SuVnuvb35skzUcw3IkGTtgjxMYg0xddKIEkoArVw0g7AtYeojZfZepTG8R68JoJNZucl-VyZKhTQFvTnTDkvoai3QtvVQfVsmzdRezN7J-Kff7mYHPifqWANUi7u-RqKA2viDfFSBtDczBWmRlxg", alt: "Intérieur du salon DM Cut", cols: 2, rows: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYQ0db2zlbsi10ljBTiFPL3gDIWuxZKscOjb2mJDuVuGNtvmQmzrt-V9lPr2JEfGhojWMbG717BI_2l5cE1VbgEzRFmz7jYxvyFzHwG8WQbCQb3oNnXUC8wmEzSeIqr6vGDxR_S7Nm7cP8R-MbZG9tkFwt8N9blrLnhh6z_d9mnfPdPBEih5hlN0hvzsx__kQzRS6puT4GoRI2yrURh139ao9msVAL-KSLYG_8b9cC1mVNJOtsH1T577m44lo8X-w4_sTlLTpRDvI", alt: "Outils de barbier", cols: 1, rows: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACeOaAwbpIQ4ovMZiwvMFKnjHln73zTNQdY-xewf82EGDvULXuGRo9x1Y0Z32HuJVk5gdXrJxQGw-1m9nsD7IfAaHUCZM0CRPJpXQelQNQGqczv6swv63xfyubhHRDEq_1ti6H8g7RWnzti3iP5ogwo_VD6fVQNh-Mh4QRgH3ZXhhjwGJFpqrUcUGuMZj-Kj_E9h6YnXH9U-4S94xJ4peBWmBbTAyWyANkzAbNLq7WXQp3wE0pOGrh7dI2lh_7LOg0JtKQKrx1ZB8", alt: "Barbier avec ciseaux", cols: 1, rows: 1 },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEuJdYWo-Nod9kk32jooQXAeCmFV-LO8Jm0JcUf52MzXPHyqi_3s0ljUHY-Jmr9fpmAjHuMQxASHJay-vISYhEZiYLRmtIbZxJNLnOU89n4KE0BP7Qc7FBvu2R5HVD5GSX17WKkv3XvSkgRwKycud62AsnX1W-wmClm5y0h_gcRe72vVE5MqnRbNBnBYpC3eTYKDgFblQr2P_DIlcjsedFOYyVG5EPzSeX4RBU_4dRp-DtapVDTSQP2RGbbQQpvp_-qicLsDG-kmQ", alt: "Portrait du barbier", cols: 1, rows: 1 },
];

export default function Galerie() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4e635a]/60">
              L&apos;Atelier Botanique
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#002d1c] leading-tight mt-2 mb-4">
              Galerie
            </h1>
            <p className="text-lg text-[#4e635a] max-w-xl leading-relaxed">
              Un aperçu de notre travail. Chaque coupe est unique, chaque client est une
              œuvre en devenir.
            </p>
          </div>
          <a
            href="https://www.instagram.com/barber.ouellette_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#002d1c] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @barber.ouellette_
          </a>
        </div>
      </div>

      {/* Grid */}
      <section className="pb-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative bg-[#f3f4f5] rounded-2xl overflow-hidden group"
                style={{
                  gridColumn: `span ${Math.min(img.cols, 2)}`,
                  gridRow: `span ${img.rows}`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d1c]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 px-6 md:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#002d1c] rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-black text-white mb-3 tracking-tighter">
                Suivez notre travail au quotidien
              </h2>
              <p className="text-[#95d4b3]/70">Nouvelles coupes, coulisses, inspirations — chaque jour.</p>
            </div>
            <a
              href="https://www.instagram.com/barber.ouellette_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#002d1c] px-8 py-4 rounded-xl font-black text-base hover:scale-105 transition-transform whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Suivre sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* RDV CTA */}
      <section className="py-16 px-6 md:px-8 bg-white text-center">
        <p className="text-[#4e635a] mb-4 text-lg">Inspiré par nos coupes ?</p>
        <a
          href="https://www.dmcut.ca/prendre-rendez-vous"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#002d1c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Prendre rendez-vous →
        </a>
      </section>
    </>
  );
}
