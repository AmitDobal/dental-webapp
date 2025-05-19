const Container = ({
  children,
  className = "",
  size = "default",
  as: Component = "div",
  ...props
}) => {
  const baseClasses = "mx-auto px-4 w-full";

  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-full",
  };

  const containerClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <Component className={containerClasses} {...props}>
      {children}
    </Component>
  );
};

export default Container;
