import React from 'react';
import { Layers, Workflow, Cpu, ShieldCheck, BadgeCheck, Building2 } from 'lucide-react';

const features = [
  {
    icon: <Workflow className="h-5 w-5 text-emerald-400" />,
    title: 'Saga Orchestration',
    desc: 'Reliable multi-step flows for enrollment, credit transfer, and credential issuance with compensations.',
  },
  {
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    title: 'RAG Tutoring',
    desc: 'Contextual AI tutor grounded in course content, policies, and student history for safe, accurate help.',
  },
  {
    icon: <Layers className="h-5 w-5 text-emerald-400" />,
    title: 'Modular Programs',
    desc: 'Compose stackable micro-credentials into degrees with cross-institution equivalency mapping.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    title: 'Verifiable Certificates',
    desc: 'W3C VC + Open Badges with public verification, audit trails, and tamper-evident logs.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-emerald-400" />,
    title: 'Job-aligned Skills',
    desc: 'Skills graph maps labor market demand to learning paths and assessments for employability.',
  },
  {
    icon: <Building2 className="h-5 w-5 text-emerald-400" />,
    title: 'Institution Network',
    desc: 'Multi-tenant onboarding with SIS/LMS integrations and granular admin controls.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="catalog" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Key capabilities</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Production-ready foundation emphasizing reliability, interoperability, and student outcomes.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                {f.icon}
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
