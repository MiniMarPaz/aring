import React, { forwardRef } from "react";
import clsx from "./clsx";
import "./Button.scss";

export type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  /** Visual hierarchy. Defaults to `"primary"`. */
  hierarchy?: ButtonHierarchy;
  /** Size preset. Defaults to `"md"`. */
  size?: ButtonSize;
  /** Danger styling for destructive actions. */
  danger?: boolean;
  /** Disable the button. */
  disabled?: boolean;
  /** Show a spinner and block interaction. */
  loading?: boolean;
  /** Expand to fill the container width. */
  block?: boolean;
  /** Optional leading icon node. */
  leadingIcon?: React.ReactNode;
  /** Optional trailing icon node. */
  trailingIcon?: React.ReactNode;
  /** When `true`, renders a square icon-only button. Provide `aria-label`. */
  iconOnly?: boolean;
  /** Button content (label). Optional when `iconOnly`. */
  children?: React.ReactNode;
}

const Spinner = () => (
  <span className="ds-btn__spinner" aria-hidden="true">
    <svg
      className="ds-btn__spinner-svg"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="ds-btn__spinner-track"
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        className="ds-btn__spinner-head"
        d="M14 8a6 6 0 0 0-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

/**
 * Button — core interactive element.
 * Variants: hierarchy × size × state, plus `danger`, `loading`, `block`, `iconOnly`.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      hierarchy = "primary",
      size = "md",
      danger = false,
      disabled = false,
      loading = false,
      block = false,
      iconOnly = false,
      leadingIcon,
      trailingIcon,
      className,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) {
    const classes = clsx(
      "ds-btn",
      `ds-btn--${hierarchy}`,
      `ds-btn--${size}`,
      danger && "ds-btn--danger",
      block && "ds-btn--block",
      iconOnly && "ds-btn--icon-only",
      className,
    );

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        aria-busy={loading || undefined}
      >
        {leadingIcon && !iconOnly && (
          <span className="ds-btn__icon ds-btn__icon--leading" aria-hidden="true">
            {leadingIcon}
          </span>
        )}
        {iconOnly ? (
          <span className="ds-btn__icon" aria-hidden="true">
            {leadingIcon ?? trailingIcon ?? children}
          </span>
        ) : (
          <span className="ds-btn__label">{children}</span>
        )}
        {trailingIcon && !iconOnly && (
          <span className="ds-btn__icon ds-btn__icon--trailing" aria-hidden="true">
            {trailingIcon}
          </span>
        )}
        {loading && <Spinner />}
      </button>
    );
  },
);

export default Button;
