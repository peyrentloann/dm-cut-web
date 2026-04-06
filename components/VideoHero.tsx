"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FALLBACK_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJqkhnruP0lyJeitshhTKJgJOnkhNmZ7MZIJA2NsnYi2Y2KA-iAXSfX1fomv2y9XENEJfN3tY_eZMvleGqHBL-AyCeh7KMPJhgwLCWZDncWtWWSxn6Xm-y527SuVnuvb35skzUcw3IkGTtgjxMYg0xddKIEkoArVw0g7AtYeojZfZepTG8R68JoJNZucl-VyZKhTQFvTnTDkvoai3QtvVQfVsmzdRezN7J-Kff7mYHPifqWANUi7u-RqKA2viDfFSBtDczBWmRlxg";

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying((v) => !v);
  };

  const scrollToContent = () => {
    const el = document.getElementById("stats");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001a0f]">
      {/* ── Background video / fallback ── */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          poster={FALLBACK_IMG}
        />
      ) : (
        <Image
          src={FALLBACK_IMG}
          alt="DM Cut — Salon à Granby"
          fill
          className="object-cover"
          priority
        />
      )}

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a0f]/70 via-[#001a0f]/50 to-[#001a0f]/80" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <span className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase border border-white/20 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#95d4b3] inline-block" />
          Barbier à Granby, Québec
        </span>

        {/* Title */}
        <h1 className="hero-title text-6xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.88] tracking-tighter mb-8">
          DM Cut
        </h1>

        {/* Tagline */}
        <p className="hero-sub text-xl md:text-2xl text-white/70 font-light tracking-wide mb-4 max-w-2xl">
          Style &amp; Confiance — L&apos;Atelier Botanique
        </p>
        <p className="hero-sub text-base text-[#95d4b3]/80 mb-12 max-w-xl leading-relaxed">
          Une expérience de barbier urbaine nichée dans un écrin de verdure. Plus qu&apos;une coupe,
          un moment de calme et de précision.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta flex flex-wrap gap-4 justify-center mb-16">
          <Link
            href="/rdv"
            className="bg-white text-[#002d1c] px-8 py-4 rounded-xl font-black text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/30"
          >
            Prendre rendez-vous →
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm"
          >
            Voir les services
          </Link>
        </div>

        {/* Trust */}
        <div className="hero-trust flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm mb-16">
          <span className="flex items-center gap-2">
            <span className="text-[#95d4b3]">★★★★★</span>
            Avis Google
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span>+500 clients satisfaits</span>
          <span className="w-px h-4 bg-white/20" />
          <span>(450) 578-4158</span>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Défiler vers le contenu"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5 scroll-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

      {/* ── Video controls ── */}
      {!videoError && (
        <button
          onClick={togglePlay}
          className="video-pause-btn absolute bottom-8 right-8 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white/60 border border-white/20 opacity-60 hover:opacity-100"
          aria-label={playing ? "Mettre en pause" : "Lire la vidéo"}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      )}

      {/* ── Video instructions badge (shown if no video file) ── */}
      {videoError && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur-md text-white/60 text-xs px-5 py-2.5 rounded-full border border-white/20 text-center max-w-sm">
          💡 Déposez votre vidéo dans <code className="text-[#95d4b3]">public/video/hero.mp4</code>
        </div>
      )}
    </section>
  );
}
