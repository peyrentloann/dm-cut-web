"use client";

import { useState } from "react";

/* ── Types ─────────────────────────────────────────────── */
interface BookingData {
  service: string;
  serviceLabel: string;
  servicePrice: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  note: string;
}

const INITIAL: BookingData = {
  service: "",
  serviceLabel: "",
  servicePrice: "",
  date: "",
  time: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  note: "",
};

/* ── Services data ─────────────────────────────────────── */
const SERVICES = [
  {
    id: "coupe",
    label: "Coupe Homme",
    desc: "Coupe personnalisée, shampoing et coiffage texturé.",
    price: "À partir de 40$",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: "barbe",
    label: "Taille de Barbe",
    desc: "Sculptage précis aux ciseaux et rasage des contours.",
    price: "À partir de 20$",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    id: "rasage",
    label: "Rasage Traditionnel",
    desc: "Rasoir droit, serviette chaude et soin du visage.",
    price: "À partir de 30$",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: "combo",
    label: "Coupe + Barbe",
    desc: "Le duo complet : coupe personnalisée et taille de barbe.",
    price: "À partir de 55$",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

/* ── Calendar helpers ──────────────────────────────────── */
function getAvailableDays(): Date[] {
  const days: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let d = new Date(today);
  d.setDate(d.getDate() + 1); // start tomorrow

  while (days.length < 30) {
    const dow = d.getDay(); // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    if (dow >= 3 && dow <= 6) { // Wed=3, Thu=4, Fri=5, Sat=6
      days.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function getTimeSlots(date: string): string[] {
  const d = new Date(date + "T00:00:00");
  const dow = d.getDay();
  const isSaturday = dow === 6;
  const start = isSaturday ? 9 : 10;
  const end = isSaturday ? 16 : 20;
  const slots: string[] = [];
  for (let h = start; h < end; h++) {
    slots.push(`${h}:00`);
    slots.push(`${h}:30`);
  }
  return slots;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("fr-CA", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

/* ── Step indicator ────────────────────────────────────── */
const STEP_LABELS = ["Service", "Date & Heure", "Coordonnées", "Confirmation"];

function StepBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEP_LABELS.map((label, i) => {
        const num = i + 1;
        const done = num < step;
        const active = num === step;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300 ${
                  done
                    ? "bg-[#002d1c] text-white"
                    : active
                    ? "bg-[#95d4b3] text-[#002d1c]"
                    : "bg-[#e7e8e9] text-[#4e635a]"
                }`}
              >
                {done ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  num
                )}
              </div>
              <span className={`text-[10px] font-bold tracking-wide hidden sm:block ${active ? "text-[#002d1c]" : "text-[#4e635a]/50"}`}>
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 mb-5 transition-all duration-300 ${done ? "bg-[#002d1c]" : "bg-[#e7e8e9]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Main component ────────────────────────────────────── */
export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (fields: Partial<BookingData>) => setData((d) => ({ ...d, ...fields }));

  /* ── Validation ── */
  const canNext = () => {
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.date && !!data.time;
    if (step === 3) {
      return (
        data.firstName.trim().length > 0 &&
        data.lastName.trim().length > 0 &&
        data.phone.trim().length >= 10 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
      );
    }
    return true;
  };

  const next = () => {
    if (!canNext()) {
      setError("Veuillez compléter tous les champs requis.");
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };

  const back = () => {
    setError("");
    setStep((s) => s - 1);
  };

  const confirm = () => {
    console.log("RDV confirmé :", data);
    setSubmitted(true);
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="text-center py-16 flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-[#002d1c] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-[#002d1c] tracking-tighter">Rendez-vous confirmé !</h2>
        <p className="text-[#4e635a] max-w-sm leading-relaxed">
          On a bien reçu ta demande, {data.firstName}. On te contactera au <strong>{data.phone}</strong> pour confirmer ton créneau.
        </p>
        <div className="bg-[#f8f9fa] rounded-2xl p-6 text-left w-full max-w-sm border border-[#e7e8e9] space-y-3">
          <Row label="Service" value={data.serviceLabel} />
          <Row label="Prix" value={data.servicePrice} />
          <Row label="Date" value={formatDate(data.date)} />
          <Row label="Heure" value={data.time} />
        </div>
        <button
          onClick={() => { setData(INITIAL); setStep(1); setSubmitted(false); }}
          className="mt-2 text-sm font-bold text-[#002d1c]/50 hover:text-[#002d1c] transition-colors underline underline-offset-4"
        >
          Prendre un autre rendez-vous
        </button>
      </div>
    );
  }

  const availableDays = getAvailableDays();
  const timeSlots = data.date ? getTimeSlots(data.date) : [];

  return (
    <div>
      <StepBar step={step} />

      {/* ── Étape 1 : Service ── */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-black text-[#002d1c] tracking-tighter mb-2">Quel service ?</h2>
          <p className="text-[#4e635a] text-sm mb-8">Choisissez le service qui vous convient.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s) => {
              const selected = data.service === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => set({ service: s.id, serviceLabel: s.label, servicePrice: s.price })}
                  className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 group ${
                    selected
                      ? "border-[#002d1c] bg-[#002d1c] text-white"
                      : "border-[#e7e8e9] bg-white hover:border-[#002d1c]/30"
                  }`}
                >
                  <span className={`block mb-4 ${selected ? "text-[#95d4b3]" : "text-[#002d1c]"}`}>{s.icon}</span>
                  <h3 className={`font-black text-lg mb-1 ${selected ? "text-white" : "text-[#002d1c]"}`}>{s.label}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${selected ? "text-[#95d4b3]/80" : "text-[#4e635a]"}`}>{s.desc}</p>
                  <span className={`text-base font-black ${selected ? "text-white" : "text-[#002d1c]"}`}>{s.price}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Étape 2 : Date & Heure ── */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-black text-[#002d1c] tracking-tighter mb-2">Date & Heure</h2>
          <p className="text-[#4e635a] text-sm mb-8">Disponible Mer–Ven 10h–20h et Samedi 9h–16h.</p>

          {/* Date grid */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 mb-3">Choisir une date</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-8">
            {availableDays.map((d) => {
              const val = d.toISOString().split("T")[0];
              const selected = data.date === val;
              const dayName = d.toLocaleDateString("fr-CA", { weekday: "short" });
              const dayNum = d.getDate();
              const month = d.toLocaleDateString("fr-CA", { month: "short" });
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => set({ date: val, time: "" })}
                  className={`py-3 px-2 rounded-xl border-2 text-center transition-all duration-200 ${
                    selected
                      ? "border-[#002d1c] bg-[#002d1c] text-white"
                      : "border-[#e7e8e9] bg-white hover:border-[#002d1c]/30"
                  }`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-wide ${selected ? "text-[#95d4b3]" : "text-[#4e635a]/60"}`}>{dayName}</p>
                  <p className={`text-xl font-black leading-tight ${selected ? "text-white" : "text-[#002d1c]"}`}>{dayNum}</p>
                  <p className={`text-[10px] ${selected ? "text-[#95d4b3]" : "text-[#4e635a]/60"}`}>{month}</p>
                </button>
              );
            })}
          </div>

          {/* Time slots */}
          {data.date && (
            <>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 mb-3">Choisir un créneau</p>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {timeSlots.map((t) => {
                  const selected = data.time === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => set({ time: t })}
                      className={`py-2.5 rounded-xl border-2 text-sm font-bold transition-all duration-200 ${
                        selected
                          ? "border-[#002d1c] bg-[#002d1c] text-white"
                          : "border-[#e7e8e9] bg-white hover:border-[#002d1c]/30 text-[#002d1c]"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Étape 3 : Informations ── */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-black text-[#002d1c] tracking-tighter mb-2">Vos coordonnées</h2>
          <p className="text-[#4e635a] text-sm mb-8">Nous vous contacterons pour confirmer le rendez-vous.</p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Prénom *" value={data.firstName} onChange={(v) => set({ firstName: v })} placeholder="Loann" />
              <Field label="Nom *" value={data.lastName} onChange={(v) => set({ lastName: v })} placeholder="Peyrent" />
            </div>
            <Field label="Téléphone *" value={data.phone} onChange={(v) => set({ phone: v })} placeholder="(450) 578-4158" type="tel" />
            <Field label="Courriel *" value={data.email} onChange={(v) => set({ email: v })} placeholder="vous@exemple.com" type="email" />
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 mb-2">Note (optionnel)</label>
              <textarea
                value={data.note}
                onChange={(e) => set({ note: e.target.value })}
                placeholder="Précisions sur votre style, allergies, etc."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e8e9] bg-white text-[#002d1c] placeholder-[#4e635a]/40 text-sm font-medium focus:outline-none focus:border-[#002d1c] transition-colors resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Étape 4 : Confirmation ── */}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-black text-[#002d1c] tracking-tighter mb-2">Confirmation</h2>
          <p className="text-[#4e635a] text-sm mb-8">Vérifiez les détails de votre rendez-vous.</p>

          <div className="bg-white rounded-2xl border-2 border-[#e7e8e9] p-6 space-y-4 mb-6">
            <SectionTitle>Le service</SectionTitle>
            <Row label="Service" value={data.serviceLabel} />
            <Row label="Prix" value={data.servicePrice} />
            <div className="border-t border-[#e7e8e9] pt-4">
              <SectionTitle>Quand</SectionTitle>
            </div>
            <Row label="Date" value={formatDate(data.date)} />
            <Row label="Heure" value={data.time} />
            <div className="border-t border-[#e7e8e9] pt-4">
              <SectionTitle>Qui</SectionTitle>
            </div>
            <Row label="Nom" value={`${data.firstName} ${data.lastName}`} />
            <Row label="Téléphone" value={data.phone} />
            <Row label="Courriel" value={data.email} />
            {data.note && <Row label="Note" value={data.note} />}
          </div>
        </div>
      )}

      {/* ── Error ── */}
      {error && (
        <p className="mt-4 text-sm text-red-600 font-medium">{error}</p>
      )}

      {/* ── Navigation ── */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#e7e8e9]">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-2 text-sm font-bold text-[#4e635a] hover:text-[#002d1c] transition-colors"
          >
            ← Précédent
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canNext()}
            className="bg-[#002d1c] text-white px-8 py-3.5 rounded-xl font-black text-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Suivant →
          </button>
        ) : (
          <button
            type="button"
            onClick={confirm}
            className="bg-[#002d1c] text-white px-8 py-3.5 rounded-xl font-black text-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Confirmer le rendez-vous ✓
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Small helpers ─────────────────────────────────────── */
function Field({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border-2 border-[#e7e8e9] bg-white text-[#002d1c] placeholder-[#4e635a]/40 text-sm font-medium focus:outline-none focus:border-[#002d1c] transition-colors"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-xs font-bold uppercase tracking-widest text-[#4e635a]/60 flex-shrink-0">{label}</span>
      <span className="text-sm font-semibold text-[#002d1c] text-right">{value}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-black uppercase tracking-widest text-[#002d1c]/40">{children}</p>;
}
