import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  to,
  href,
  className = "",
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500",
    secondary:
      "bg-teal-100 hover:bg-teal-200 text-teal-800 focus:ring-teal-500",
    outline:
      "border border-white text-white hover:bg-white hover:text-teal-700 focus:ring-teal-500",
    text: "text-teal-600 hover:text-teal-800 hover:underline",
  };

  // Special variant for outline on light backgrounds
  if (variant === "outline" && !className.includes("border-white")) {
    variantClasses.outline =
      "border border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500";
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthClasses = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;

  if (as === "link" && to) {
    return (
      <Link
        to={to}
        className={classes}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a
        href={href}
        className={classes}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      tabIndex={disabled ? -1 : 0}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
