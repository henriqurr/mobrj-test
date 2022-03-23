import React, { useRef } from "react"

type ButtonVariant = "normal" | "outline"

type ButtonColor =
  | "base"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "noborder"

type ButtonSize = "normal" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant to use
   * @default 'normal'
   */
  variant?: ButtonVariant
  /**
   * Color of the component
   * @default 'default'
   */
  color?: ButtonColor
  /**
   * Size of the component
   * @default 'normal'
   */
  size?: ButtonSize
  /**
   * Fill available width
   * @default 'false'
   */
  fullwidth?: boolean
  /**
   * Disable hover actions
   * @default 'false'
   */
  noHover?: boolean
  /**
   * Loading state
   * @default 'false'
   */
  loading?: boolean
  /**
   * Icon Rigth
   * @default 'false'
   */
  icon?: React.ReactNode
}

/**
 * Button to trigger an operation
 */
function Button({
  type = "button",
  variant = "normal",
  color = "primary",
  size = "normal",
  fullwidth = false,
  noHover = false,
  loading = false,
  icon,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <button
      ref={ref}
      type={type}
      className={`
        button-${variant}--${color}
        button--${size}
        ${fullwidth && "button--fullwidth"}
        ${noHover && "button--no-hover"}
      `}
      {...props}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {children} {icon}
        </>
      )}
    </button>
  )
}

export default Button
