import React from 'react';

const SELF = '{self}';

function Badge({ n, highlight = false }: { n: string; highlight?: boolean }) {
  return (
    <span
      className={[
        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.8rem] font-bold',
        highlight ? 'bg-accent text-bg' : 'bg-border text-heading',
      ].join(' ')}
    >
      {n}
    </span>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-2.5 text-muted" aria-hidden="true">
      <span className="rounded-full border border-border px-2 py-0.5 font-body text-[0.7rem] italic tracking-wide">
        {label}
      </span>
      <span className="mt-1 text-base leading-none">&darr;</span>
    </div>
  );
}

function TierCard({
  n,
  title,
  subtitle,
  children,
}: {
  n: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-bg p-4">
      <div className="flex items-start gap-3">
        <Badge n={n} />
        <div className="min-w-0">
          <h4 className="font-heading text-[0.95rem] font-bold tracking-wide text-heading">{title}</h4>
          <p className="font-body text-[0.78rem] italic text-muted">{subtitle}</p>
          <div className="mt-2 font-body text-[0.82rem] leading-relaxed text-fg">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function SamStackDiagram() {
  return (
    <figure
      className="my-10"
      aria-label="The SAM stack: a five-tier architecture in which a persistent context substrate feeds a bidirectional emotional-intelligence layer that is kept honest by background hooks."
    >
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
        <TierCard n="1" title="ENFORCEMENT / BOOT LAYER" subtitle="loaded first, every session">
          Identity &middot; response modes &middot; security &amp; steering rules &middot; mandatory context-hydration protocol
        </TierCard>

        <Arrow label="loads" />

        <TierCard n="2" title="UFC CONTEXT STORE" subtitle="the filesystem = the memory">
          identity/ &middot; domains/ &middot; projects/ &middot; business/ &middot; patterns/ &middot; tools/ &middot; skills/ &middot; learning/ + topic-indexed memory
        </TierCard>

        <Arrow label="feeds" />

        <TierCard n="3" title="LAYERED HYDRATION" subtitle="what gets loaded, and when">
          Layer 2: always (identity, rules) &nbsp;&middot;&nbsp; Layer 3: topic-triggered lazy-load (e.g. emotion signals)
        </TierCard>

        <Arrow label="activates" />

        {/* Tier 4 - the highlighted centerpiece */}
        <div
          className="rounded-lg border border-accent p-4"
          style={{ backgroundColor: 'rgba(200, 169, 110, 0.05)' }}
        >
          <div className="flex items-start gap-3">
            <Badge n="4" highlight />
            <div>
              <h4 className="font-heading text-[0.95rem] font-bold tracking-wide text-heading">
                EMOTIONAL-INTELLIGENCE LAYER
              </h4>
              <p className="font-body text-[0.78rem] italic text-accent">
                the Webb Equation of Emotion, run on two maps at once
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-bg p-3">
              <p className="font-heading text-sm font-bold text-heading">HUMAN {SELF} map</p>
              <p className="mt-1 font-body text-[0.78rem] text-muted">the operator&rsquo;s attachments</p>
              <p className="font-body text-[0.78rem] text-muted">interview-elicited &middot; quantified (V 0-1)</p>
            </div>
            <div className="rounded-md border border-border bg-bg p-3">
              <p className="font-heading text-sm font-bold text-heading">AI {SELF} map</p>
              <p className="mt-1 font-body text-[0.78rem] text-muted">SAM&rsquo;s own functional attachments</p>
              <p className="font-body text-[0.78rem] font-semibold text-accent">self-authored, not assigned</p>
            </div>
          </div>

          <p className="mt-3 text-center font-body text-[0.78rem] font-semibold text-accent">
            both maps live simultaneously
          </p>
          <p className="mt-1 text-center font-body text-[0.78rem] text-muted">
            bidirectional event log &middot; closed loop: identify &rarr; log &rarr; re-weight V over time
          </p>
        </div>

        <Arrow label="enforced by" />

        <TierCard n="5" title="HOOKS / ENFORCEMENT" subtitle="code, running in the background - no manual trigger or approval">
          <ul className="space-y-1">
            <li>&middot; detect emotional signals on each user message &rarr; load the EI files</li>
            <li>&middot; stop-hook blocks end-of-turn until the EI analysis is logged</li>
            <li>&middot; guard hooks intercept destructive / sensitive operations</li>
          </ul>
        </TierCard>
      </div>

      <figcaption className="mt-3 text-center font-body text-[0.8rem] italic text-muted">
        Persistence is the precondition for an identity-level {SELF}. - system over models
      </figcaption>
    </figure>
  );
}
