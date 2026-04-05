import Image from "next/image";

export default function Rejoins() {
  return (
    <>
      {/* Header + Form */}
      <div className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <div className="space-y-6">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#002d1c] py-1 border-b-2 border-[#002d1c]">
                  Recrutement
                </span>
                <h1
                  className="text-6xl font-extrabold leading-[1.1] tracking-tight text-[#002d1c]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Rejoins<br />l&apos;équipe.
                </h1>
                <p className="text-lg text-[#4e635a] leading-relaxed max-w-md">
                  Nous recherchons des artistes du ciseau, des passionnés de la coupe qui voient la
                  coiffure comme une architecture vivante. Intègre un studio où le brutalisme urbain
                  rencontre la sérénité botanique.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f3f4f5] p-6 rounded-xl space-y-2">
                  <span className="text-2xl">🌿</span>
                  <h3
                    className="font-bold text-[#002d1c]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Environnement Zen
                  </h3>
                  <p className="text-sm text-[#4e635a]">
                    Travailler au milieu des plantes dans un cadre épuré.
                  </p>
                </div>
                <div className="bg-[#f3f4f5] p-6 rounded-xl space-y-2">
                  <span className="text-2xl">🎨</span>
                  <h3
                    className="font-bold text-[#002d1c]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Liberté Créative
                  </h3>
                  <p className="text-sm text-[#4e635a]">
                    Nous encourageons les techniques innovantes.
                  </p>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden shadow-2xl rounded-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArRDcAdKbasKVcmISpttDHDknFk6uswHUrrbxDEPxabawIL2cC9LmhbZibpKot1pEr_TOqP0jStJTt0CeVfEf1Nm7Mrlrx8lCg_vY07VQlk1keAtK1C5-Nv0hs3s-zKMgvdJ54e1iGOCLba_B6pI6pU_grihsRDGwhkk9kbIUTAs3YGyCmwk8UAcztuuS0AgtLhtfiqB9UxpHfCXKVhA1TMYUug2Q_-dlo5hAUvhrXx_Ki8R_WXGJwNN8y6LGtg7TTV1Pe5tuOYbQ"
                  alt="Studio DM Cut"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right – Form */}
            <div className="lg:col-span-7 bg-white p-12 rounded-xl shadow-[0_24px_48px_rgba(0,45,28,0.06)] border border-[#c1c8c2]/20">
              <div className="max-w-xl mx-auto">
                <div className="mb-10">
                  <h2
                    className="text-2xl font-bold text-[#002d1c] mb-2"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Parlons de vous.
                  </h2>
                  <p className="text-[#4e635a] text-sm">
                    Remplis ce formulaire et on te contactera rapidement.
                  </p>
                </div>

                <form className="space-y-6">
                  {[
                    { id: "name", label: "Nom complet", type: "text" },
                    { id: "email", label: "Adresse email", type: "email" },
                    { id: "phone", label: "Téléphone", type: "tel" },
                    { id: "experience", label: "Années d'expérience", type: "number" },
                  ].map((field) => (
                    <div key={field.id} className="relative">
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder=" "
                        className="peer block w-full border-0 border-b-2 border-[#e7e8e9] bg-transparent py-4 px-0 text-[#191c1d] focus:border-[#002d1c] focus:outline-none placeholder-transparent transition-all"
                      />
                      <label
                        htmlFor={field.id}
                        className="absolute left-0 top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#4e635a] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#002d1c] uppercase tracking-widest font-bold"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#4e635a] mb-3">
                      Spécialité
                    </label>
                    <select className="w-full border-b-2 border-[#e7e8e9] bg-transparent py-4 text-[#191c1d] focus:border-[#002d1c] focus:outline-none transition-all">
                      <option value="">Sélectionnez...</option>
                      <option>Coupe classique</option>
                      <option>Fade / Dégradé</option>
                      <option>Barbe & Rasage</option>
                      <option>Toutes spécialités</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="motivation"
                      className="block text-xs font-bold uppercase tracking-widest text-[#4e635a] mb-3"
                    >
                      Mot de motivation
                    </label>
                    <textarea
                      id="motivation"
                      rows={4}
                      placeholder="Pourquoi DM Cut ?"
                      className="w-full border-2 border-[#e7e8e9] bg-transparent p-4 text-[#191c1d] focus:border-[#002d1c] focus:outline-none rounded-lg transition-all placeholder:text-[#4e635a]/40 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#002d1c] text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <span>Envoyer ma candidature</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vibe section */}
      <section className="bg-[#002d1c] py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2
              className="text-5xl font-extrabold tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Un studio pensé<br />comme une galerie.
            </h2>
            <div className="h-1 w-24 bg-[#00452e]" />
            <p className="text-[#76b394] text-lg leading-relaxed max-w-md">
              Nous avons créé un espace où le silence et la verdure permettent de se concentrer sur
              l&apos;essentiel : la précision. Pas de musique assourdissante, pas de superflu. Juste
              du talent et des plantes.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Matériaux Bruts", "Minimalisme", "Expertise"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-[#76b394]/30 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#f3f4f5] rounded-xl overflow-hidden relative rotate-2 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACeOaAwbpIQ4ovMZiwvMFKnjHln73zTNQdY-xewf82EGDvULXuGRo9x1Y0Z32HuJVk5gdXrJxQGw-1m9nsD7IfAaHUCZM0CRPJpXQelQNQGqczv6swv63xfyubhHRDEq_1ti6H8g7RWnzti3iP5ogwo_VD6fVQNh-Mh4QRgH3ZXhhjwGJFpqrUcUGuMZj-Kj_E9h6YnXH9U-4S94xJ4peBWmBbTAyWyANkzAbNLq7WXQp3wE0pOGrh7dI2lh_7LOg0JtKQKrx1ZB8"
                alt="Barbier en action"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
