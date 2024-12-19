import React from 'react';
import { cn } from '@/utils/cn';
import { ButtonProps } from './types';
import { buttonStyles as styles } from './styles';
import { LoadingSpinner } from './LoadingSpinner';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  hasGlow = false,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
  ...props
}, ref) => {
  // Remove custom props from being spread to DOM
  const { href, ...domProps } = props;

  // Common props for button
  const commonProps = {
    className: cn(
      styles.base,
      styles.variants[variant],
      styles.sizes[size],
      isLoading && styles.states.loading,
      hasGlow && styles.states.glow,
      className
    ),
    ref,
    disabled: isLoading || disabled,
    onClick,
    ...domProps
  };

  // Content to be rendered inside button
  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  // If href is provided, render as link
  if (href) {
    return (
      <a href={href} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {content}
    </button>
  );
});

Button.displayName = 'Button';