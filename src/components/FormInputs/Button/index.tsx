import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import styles from "./Button.module.scss"; // Import SCSS module for styles

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span>
            <RiLoader4Fill className={styles.loaderIcon} />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
