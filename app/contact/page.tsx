const infoCards = [
  {
    label: "Adresse",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    content: (
      <a
        href="https://maps.google.com/?q=18+Rue+Robinson+S,+Granby,+QC"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#002d1c] hover:opacity-70 transition-opacity"
      >
        18 Rue Robinson S,<br />Granby, QC J2G 7K8
      </a>
    ),
  },
  {
    label: "Téléphone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    content: (
      <a href="tel:4505784158" className="font-semibold text-[#002d1c] hover:opacity-70 transition-opacity">
        (450) 578-4158
      </a>
    ),
  },
  {
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    content: (
      <a href="mailto:studio@dmcut.ca" className="font-semibold text-[#002d1c] hover:opacity-70 transition-opacity">
        studio@dmcut.ca
      </a>
    ),
  },
  {
    label: "Horaires",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-1 text-sm">
        <div className="flex justify-between gap-8">
          <span className="text-[#4e635a]">Lun — Sam</span>
          <span className="font-bold text-[#002d1c]">8h — 20h</span>
        </div>
        <div className="flex justify-between gap-8">
          <span className="text-[#4e635a]">Dimanche</span>
          <span className="text-[#4e635a]">Fermé</span>
        </div>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4e635a]/60">
            L&apos;Atelier Botanique
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#002d1c] leading-tight mt-2 mb-8">
            Contact
          </h1>
          <p className="text-lg text-[#4e635a] max-w-2xl leading-relaxed">
            Une question ? Une demande spéciale ? On est là pour toi. Écris-nous ou prends
            directement rendez-vous en ligne.
          </p>
        </div>
      </div>

      {/* Info cards row */}
      <section className="pb-16 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map(({ label, icon, content }) => (
            <div key={label} className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#e7e8e9]">
              <div className="flex items-center gap-2 text-[#4e635a]/60 mb-3">
                {icon}
                <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
              </div>
              <div className="text-[#002d1c]">{content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="pb-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="space-y-4">
            <div className="h-72 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.781258!2d-72.73505368468655!3d45.39994497910037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb6ab8b8d6a7d4f%3A0x1234567890abcdef!2s18+Rue+Robinson+S%2C+Granby%2C+QC+J2G+7K8!5e0!3m2!1sfr!2sca!4v1712000000000!5m2!1sfr!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DM Cut sur Google Maps"
              />
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/barber.ouellette_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#002d1c] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/matisouellette"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-[#002d1c] text-[#002d1c] py-3.5 rounded-xl font-bold text-sm hover:bg-[#002d1c]/5 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-2xl border border-[#e7e8e9]">
            <h2 className="text-2xl font-black text-[#002d1c] mb-8 tracking-tighter">
              Envoyer un message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: "prenom", label: "Prénom", placeholder: "Jean", type: "text" },
                  { id: "nom", label: "Nom", placeholder: "Tremblay", type: "text" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-bold uppercase tracking-widest text-[#4e635a] mb-2">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-white border border-[#e7e8e9] px-4 py-3.5 rounded-xl text-[#191c1d] focus:outline-none focus:border-[#002d1c] transition-colors placeholder:text-[#4e635a]/30 text-sm"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#4e635a] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean@exemple.ca"
                  className="w-full bg-white border border-[#e7e8e9] px-4 py-3.5 rounded-xl text-[#191c1d] focus:outline-none focus:border-[#002d1c] transition-colors placeholder:text-[#4e635a]/30 text-sm"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-xs font-bold uppercase tracking-widest text-[#4e635a] mb-2">
                  Sujet
                </label>
                <select
                  id="sujet"
                  className="w-full bg-white border border-[#e7e8e9] px-4 py-3.5 rounded-xl text-[#191c1d] focus:outline-none focus:border-[#002d1c] transition-colors text-sm"
                >
                  <option value="">Sélectionnez un sujet...</option>
                  <option>Question sur les services</option>
                  <option>Demande de prix</option>
                  <option>Collaboration / Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#4e635a] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full bg-white border border-[#e7e8e9] px-4 py-3.5 rounded-xl text-[#191c1d] focus:outline-none focus:border-[#002d1c] transition-colors resize-none placeholder:text-[#4e635a]/30 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#002d1c] text-white py-4 rounded-xl font-black hover:opacity-90 transition-all active:scale-[0.98] tracking-wide"
              >
                Envoyer le message →
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#e7e8e9] text-center">
              <p className="text-[#4e635a] text-sm mb-4">Ou directement par rendez-vous :</p>
              <a
                href="https://www.dmcut.ca/prendre-rendez-vous"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#002d1c] text-[#002d1c] px-8 py-3 rounded-xl font-bold hover:bg-[#002d1c] hover:text-white transition-all duration-300 text-sm"
              >
                Prendre rendez-vous en ligne
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 px-6 md:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#002d1c] mb-12 tracking-tighter">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: "Faut-il réserver à l'avance ?", r: "Oui, nous recommandons de réserver en ligne pour garantir votre créneau. Les walk-ins sont acceptés selon disponibilité." },
              { q: "Combien coûte une coupe ?", r: "Les coupes débutent à 40$ pour les hommes, 30$ pour les étudiants (avec carte) et 25$ pour les enfants de moins de 12 ans." },
              { q: "Acceptez-vous les cartes de crédit ?", r: "Oui, nous acceptons toutes les cartes de crédit et de débit, ainsi que les paiements en espèces." },
              { q: "Combien de temps dure une coupe ?", r: "En moyenne 30 à 45 minutes selon le service choisi. L'expérience complète (coupe + barbe) prend environ 1h." },
            ].map(({ q, r }) => (
              <div key={q} className="bg-white p-7 rounded-2xl border border-[#e7e8e9]">
                <h3 className="font-bold text-[#002d1c] mb-3">{q}</h3>
                <p className="text-[#4e635a] text-sm leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#4e635a]">
            Vous ne trouvez pas votre réponse ?{" "}
            <a href="mailto:studio@dmcut.ca" className="text-[#002d1c] font-bold hover:opacity-70 transition-opacity">
              Écrivez-nous →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
