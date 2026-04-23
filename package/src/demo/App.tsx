import React, { useState } from "react";
import { Button } from "../Button/Button";
import "../../src/tokens/_tokens.scss";
import "./App.scss";

/* ── Inline SVG icons ─────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Download = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2v9m0 0l-4-4m4 4l4-4M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const X = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Trash = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 4h10M6 4V3h4v1M5 4v8a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Section wrapper ──────────────────────────────────────────── */
function Section({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section className="demo-section">
      <div className="demo-section__header">
        <h2 className="demo-section__title">{title}</h2>
        {sub && <span className="demo-section__sub">{sub}</span>}
      </div>
      <div className="demo-section__body">{children}</div>
    </section>
  );
}

/* ── Row helper ───────────────────────────────────────────────── */
function Row({ children }: { children: React.ReactNode }) {
  return <div className="demo-row">{children}</div>;
}

/* ── Main app ─────────────────────────────────────────────────── */
export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [saving, setSaving] = useState(false);

  const toggleTheme = () =>
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });

  const handleSave = () => {
    if (saving) return;
    setSaving(true);
    setTimeout(() => setSaving(false), 1800);
  };

  return (
    <div className="demo-app">
      {/* ── Header ── */}
      <header className="demo-header">
        <div>
          <p className="demo-eyebrow">Wimbledon Design System</p>
          <h1 className="demo-title">Button</h1>
        </div>
        <Button hierarchy="secondary" size="sm" onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </Button>
      </header>

      {/* ── 01 · Hierarchy ── */}
      <Section title="01 · Hierarchy" sub="Default state across all four levels">
        <Row>
          <Button hierarchy="primary">Primary</Button>
          <Button hierarchy="secondary">Secondary</Button>
          <Button hierarchy="tertiary">Tertiary</Button>
          <Button hierarchy="ghost">Ghost</Button>
        </Row>
      </Section>

      {/* ── 02 · Sizes ── */}
      <Section title="02 · Sizes" sub="sm 32 · md 44 · lg 52 (px height)">
        <Row>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Row>
      </Section>

      {/* ── 03 · States ── */}
      <Section title="03 · States">
        <Row>
          <Button hierarchy="primary">Default</Button>
          <Button hierarchy="primary" disabled>Disabled</Button>
          <Button hierarchy="primary" loading={saving} onClick={handleSave}>
            {saving ? "Saving…" : "Save changes"}
          </Button>
        </Row>
        <Row>
          <Button hierarchy="secondary">Default</Button>
          <Button hierarchy="secondary" disabled>Disabled</Button>
          <Button hierarchy="tertiary">Default</Button>
          <Button hierarchy="tertiary" disabled>Disabled</Button>
        </Row>
      </Section>

      {/* ── 04 · Icons ── */}
      <Section title="04 · Icon slots" sub="leading · trailing · icon-only">
        <Row>
          <Button hierarchy="primary" leadingIcon={<ArrowRight />}>Continue</Button>
          <Button hierarchy="primary" trailingIcon={<ArrowRight />}>Continue</Button>
          <Button hierarchy="primary" iconOnly leadingIcon={<ArrowRight />} aria-label="Next" />
        </Row>
        <Row>
          <Button hierarchy="secondary" leadingIcon={<Plus />}>Add item</Button>
          <Button hierarchy="secondary" trailingIcon={<Download />}>Download</Button>
          <Button hierarchy="ghost" iconOnly leadingIcon={<X />} aria-label="Close" />
        </Row>
      </Section>

      {/* ── 05 · Danger ── */}
      <Section title="05 · Danger" sub="Destructive modifier — combinable with any hierarchy">
        <Row>
          <Button hierarchy="primary" danger leadingIcon={<Trash />}>Delete</Button>
          <Button hierarchy="secondary" danger>Delete</Button>
          <Button hierarchy="tertiary" danger>Delete</Button>
          <Button hierarchy="ghost" danger>Delete</Button>
        </Row>
      </Section>

      {/* ── 06 · Block ── */}
      <Section title="06 · Block &amp; Form">
        <div className="demo-card">
          <Button hierarchy="primary" block>Sign in</Button>
          <Button hierarchy="secondary" block>Create account</Button>
          <Button hierarchy="ghost" block>Continue as guest</Button>
        </div>
      </Section>
    </div>
  );
}
