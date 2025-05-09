import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  link?: string;  // optional link prop for button-like links
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  className?: string;
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-400 focus:ring-secondary-400',
    outline: 'bg-transparent border-2 border-current text-primary-500 hover:bg-white hover:text-blue-900',
    text: 'bg-transparent text-primary-500 hover:text-primary-600 px-2 py-1 focus:ring-0',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-60 cursor-not-allowed' : '';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;

  const buttonContent = (
    <motion.span
      className="flex items-center justify-center"
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  // If the link prop is passed, render as an anchor tag instead of a button
  if (link) {
    return (
      <a
        href={link}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
