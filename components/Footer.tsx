import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#002d1c] w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <span
              className="text-2xl font-black text-white block mb-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              DM Cut
            </span>
            <p className="text-[#95d4b3]/60 text-sm">L&apos;Atelier Botanique · Granby, QC</p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <p className="text-[#95d4b3]/40 text-xs font-bold uppercase tracking-widest mb-4">
                Navigation
              </p>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/services", label: "Services" },
                  { href: "/galerie", label: "Galerie" },
                  { href: "/produits", label: "Produits" },
                  { href: "/rejoins", label: "Rejoins l'équipe" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#95d4b3]/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#95d4b3]/40 text-xs font-bold uppercase tracking-widest mb-4">
                Contact
              </p>
              <ul className="space-y-3 text-sm text-[#95d4b3]/60">
                <li>18 Rue Robinson S</li>
                <li>Granby, QC J2G 7K8</li>
                <li>
                  <a href="tel:4505784158" className="hover:text-white transition-colors">
                    (450) 578-4158
                  </a>
                </li>
                <li>
                  <a href="mailto:studio@dmcut.ca" className="hover:text-white transition-colors">
                    studio@dmcut.ca
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#95d4b3]/40 text-xs font-bold uppercase tracking-widest mb-4">
                Réseaux
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/barber.ouellette_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#95d4b3]/60 hover:text-white transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/matisouellette"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#95d4b3]/60 hover:text-white transition-colors text-sm"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#95d4b3]/40 text-xs">
            © {new Date().getFullYear()} DM Cut. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-[#95d4b3]/40 hover:text-white text-xs transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="text-[#95d4b3]/40 hover:text-white text-xs transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
