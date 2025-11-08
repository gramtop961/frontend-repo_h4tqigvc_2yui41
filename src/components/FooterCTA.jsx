import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="bg-slate-900 py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Ready to design your AI education network?</h3>
            <p className="mt-1 text-slate-300">Compose programs, connect institutions, and issue verifiable credentials.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-400"
          >
            Get Started <ArrowRight size={18} />
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} SagaEd Network. All rights reserved.</p>
      </div>
    </footer>
  );
}
