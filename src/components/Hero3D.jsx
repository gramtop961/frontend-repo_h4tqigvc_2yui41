import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, GraduationCap, Shield } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8m12V2m9m6s1l4iE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlays that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-950/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <Shield size={14} className="text-emerald-400" />
          <span>Verifiable Credentials • GDPR/FERPA-ready</span>
        </div>
        <h1 className="mt-6 font-extrabold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
          Saga-based AI Education Network
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 text-base sm:text-lg">
          Connect institutions and global learners to compose modular, industry-aligned programs.
          Orchestrated by Sagas for enrollment, credit transfer, and certification issuance.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-400"
          >
            <Rocket size={18} /> Explore Catalog
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <GraduationCap size={18} /> View Architecture
          </a>
        </div>
      </div>
    </section>
  );
}
