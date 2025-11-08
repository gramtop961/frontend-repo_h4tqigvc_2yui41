import React from 'react';
import Hero3D from './components/Hero3D';
import FeatureGrid from './components/FeatureGrid';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import FooterCTA from './components/FooterCTA';

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">SagaEd</a>
        <nav className="hidden gap-6 text-sm text-slate-200 sm:flex">
          <a className="hover:text-white" href="#catalog">Catalog</a>
          <a className="hover:text-white" href="#architecture">Architecture</a>
          <a className="hover:text-white" href="#">Docs</a>
        </nav>
        <a href="#" className="rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-emerald-400">Sign in</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <main className="flex flex-col">
        <Hero3D />
        <FeatureGrid />
        <ArchitectureDiagram />
      </main>
      <FooterCTA />
    </div>
  );
}
