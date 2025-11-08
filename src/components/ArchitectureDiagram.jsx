import React from 'react';

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">High-level architecture</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Saga-based microservices with an event bus for reliable, long-running academic transactions.
        </p>
        <pre className="mt-6 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-800">
{`flowchart LR
  subgraph Client[Frontend: React]
    A[Student / Instructor / Admin UI]
  end

  subgraph API[API Gateway / BFF]
    G[Auth & Rate Limit]
  end

  subgraph Bus[Event Bus]
    E[NATS/Kafka]
  end

  subgraph Services[Microservices]
    S1[Enrollment Service]
    S2[Program Composer]
    S3[Credential Service]
    S4[Payments]
    S5[SIS/LMS Integrations]
    S6[Tutor RAG Service]
    S7[Identity & SSO]
    S8[Audit & Ledger]
  end

  subgraph Data[Datastores]
    D1[(Postgres: OLTP)]
    D2[(MongoDB: content, sessions)]
    D3[(Object Storage: artifacts)]
    D4[(Ledger / append-only)]
    D5[(Vector DB: embeddings)]
  end

  A-->G
  G-->S1
  G-->S2
  G-->S3
  G-->S4
  G-->S6
  S1<-->E
  S2<-->E
  S3<-->E
  S4<-->E
  S5<-->E
  S6<-->E
  S7<-->E
  S8<-->E

  S1-->D1
  S2-->D1
  S3-->D1
  S3-->D4
  S6-->D5
  S6-->D2
  S5-->D2
  S4-->D1
  S8-->D4
  S3-->D3
`}
        </pre>
        <p className="mt-4 text-sm text-slate-600">
          Sagas coordinate steps like enrollment → payment → seat allocation → SIS sync → confirmation with compensating actions on failure.
        </p>
      </div>
    </section>
  );
}
