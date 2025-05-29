import { Link } from "react-router-dom";

const Button = ({
  children,
  // eslint-disable-next-line no-unused-vars
  as: ElementType = "button",
  variant = "primary",
  size = "md",
  className = "",
  to,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // If 'to' prop is provided and starts with '#', use <a> for anchor navigation with smooth scroll
  if (to && to.startsWith("#")) {
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const el = document.getElementById(to.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      if (props.onClick) {
        props.onClick(e);
      }
    };
    return (
      <a href={to} className={classes} {...props} onClick={handleAnchorClick}>
        {children}
      </a>
    );
  }

  // If 'to' prop is provided, use Link component
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <ElementType className={classes} {...props}>
      {children}
    </ElementType>
  );
};

export default Button;
