import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

/**
 * Neutral, brand-agnostic button. All variants drive the same token surface
 * (`--btn-*` custom properties) so the system is themeable without code changes.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button supports four hierarchies (primary / secondary / tertiary / ghost), three sizes (sm / md / lg), and six states (default / hover / focus / active / disabled / loading).",
      },
    },
  },
  argTypes: {
    hierarchy: {
      control: "inline-radio",
      options: ["primary", "secondary", "tertiary", "ghost"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    danger: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    block: { control: "boolean" },
    iconOnly: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    hierarchy: "primary",
    size: "md",
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ─── Playground ─────────────────────────────────────────────────── */
export const Playground: Story = {};

/* ─── Hierarchy ──────────────────────────────────────────────────── */
export const Primary: Story = { args: { hierarchy: "primary" } };
export const Secondary: Story = { args: { hierarchy: "secondary" } };
export const Tertiary: Story = { args: { hierarchy: "tertiary" } };
export const Ghost: Story = { args: { hierarchy: "ghost" } };

/* ─── Sizes ──────────────────────────────────────────────────────── */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

/* ─── States ─────────────────────────────────────────────────────── */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, auto)" }}>
      <Button {...args}>Default</Button>
      <Button {...args} className="is-hover">Hover</Button>
      <Button {...args} autoFocus>Focus</Button>
      <Button {...args} className="is-active">Active</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} loading>Loading</Button>
    </div>
  ),
};

/* ─── Loading ────────────────────────────────────────────────────── */
export const Loading: Story = { args: { loading: true } };

/* ─── Disabled ───────────────────────────────────────────────────── */
export const Disabled: Story = { args: { disabled: true } };

/* ─── Danger ─────────────────────────────────────────────────────── */
export const Danger: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button {...args} hierarchy="primary" danger>Delete</Button>
      <Button {...args} hierarchy="secondary" danger>Delete</Button>
      <Button {...args} hierarchy="tertiary" danger>Delete</Button>
      <Button {...args} hierarchy="ghost" danger>Delete</Button>
    </div>
  ),
};

/* ─── With Icons ─────────────────────────────────────────────────── */
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WithLeadingIcon: Story = {
  args: { leadingIcon: <Arrow />, children: "Continue" },
};
export const WithTrailingIcon: Story = {
  args: { trailingIcon: <Arrow />, children: "Continue" },
};
export const IconOnly: Story = {
  args: { iconOnly: true, "aria-label": "Next", leadingIcon: <Arrow /> },
};

/* ─── Block ──────────────────────────────────────────────────────── */
export const Block: Story = {
  args: { block: true, children: "Full-width button" },
  parameters: { layout: "padded" },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};

/* ─── Dark theme ─────────────────────────────────────────────────── */
export const DarkTheme: Story = {
  render: (args) => (
    <div
      data-theme="dark"
      style={{
        background: "oklch(0.18 0.01 250)",
        padding: 32,
        display: "flex",
        gap: 12,
      }}
    >
      <Button {...args} hierarchy="primary">Primary</Button>
      <Button {...args} hierarchy="secondary">Secondary</Button>
      <Button {...args} hierarchy="tertiary">Tertiary</Button>
      <Button {...args} hierarchy="ghost">Ghost</Button>
    </div>
  ),
};
