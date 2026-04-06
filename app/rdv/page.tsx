import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Prendre Rendez-vous — DM Cut",
  description: "Réservez votre coupe, taille de barbe ou rasage chez DM Cut à Granby.",
};

export default function RdvPage() {
  return (
    <section className="min-h-screen pt-28 pb-24 bg-[#f8f9fa]">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 block mb-3">
            Réservation
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#002d1c] mb-3">
            Prendre Rendez-vous
          </h1>
          <p className="text-[#4e635a]">
            18 Rue Robinson S, Granby · <a href="tel:4505784158" className="hover:text-[#002d1c] transition-colors">(450) 578-4158</a>
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-[#e7e8e9] shadow-sm p-8 md:p-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
