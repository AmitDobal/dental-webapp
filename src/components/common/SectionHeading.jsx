const SectionHeading = ({
  title,
  subtitle = "",
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  ...props
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const alignClass = alignmentClasses[align];

  return (
    <div className={`mb-10 ${alignClass} ${className}`} {...props}>
      <h2
        className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
