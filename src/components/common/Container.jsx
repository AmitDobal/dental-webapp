const Container = ({
  children,
  className = "",
  size = "default",
  // eslint-disable-next-line no-unused-vars
  as: ElementType = "div",
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
    <ElementType className={containerClasses} {...props}>
      {children}
    </ElementType>
  );
};

export default Container;
