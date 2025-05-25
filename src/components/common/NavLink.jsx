const NavLink = ({ href, label, className = "", onClick, ...props }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={`transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
      onClick={handleClick}
      tabIndex={0}
      aria-label={label}
      {...props}>
      {label}
    </a>
  );
};

export default NavLink;
