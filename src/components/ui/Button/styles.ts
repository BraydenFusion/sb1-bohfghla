import { ButtonVariant, ButtonSize } from './types';

const base = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-medium',
  'rounded-lg',
  'transition-all',
  'duration-200',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-offset-background'
].join(' ');

const variants: Record<ButtonVariant, string> = {
  primary: [
    'bg-primary',
    'hover:bg-primary-hover',
    'text-white',
    'shadow-lg',
    'shadow-primary-glow/50',
    'focus:ring-primary/50'
  ].join(' '),
  secondary: [
    'bg-white/10',
    'hover:bg-white/20',
    'text-white',
    'backdrop-blur-sm',
    'focus:ring-white/50'
  ].join(' '),
  ghost: [
    'hover:bg-white/10',
    'text-white',
    'focus:ring-white/50'
  ].join(' ')
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

const states = {
  loading: 'opacity-50 cursor-not-allowed',
  glow: [
    'relative',
    'after:absolute',
    'after:inset-0',
    'after:rounded-lg',
    'after:bg-gradient-to-r',
    'after:from-accent-neon',
    'after:to-primary',
    'after:opacity-0',
    'after:transition-opacity',
    'after:-z-10',
    'hover:after:opacity-20'
  ].join(' ')
};

export const buttonStyles = { base, variants, sizes, states };