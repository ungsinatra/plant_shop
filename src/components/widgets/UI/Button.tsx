import React from "react";

interface ButtonProps {
  onClick(): void;
  className: string;
  disable: boolean;
  children?: React.ReactNode;
  // onDislable:{}
}

const Button: React.FC<ButtonProps> = ({
  className,
  disable,
  onClick,
  children,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
