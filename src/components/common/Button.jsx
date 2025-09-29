import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  icon,
  loading = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 focus:ring-primary-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
    </motion.button>
  );
};

export default Button;
