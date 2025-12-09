import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 tracking-wide uppercase font-sans";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-black",
    secondary: "bg-transparent text-black border border-gray-300 hover:border-black",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    white: "bg-white text-black border border-white hover:bg-gray-100 shadow-sm"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};