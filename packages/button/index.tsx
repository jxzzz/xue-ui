import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?:
    | 'default'
    | 'tertiary'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
}
export default function Button({
  children,
  disabled,
  type = 'default',
  ...props
}: ButtonProps) {
  return (
    <button className={`${type} mt-4`} disabled={disabled}>
      {children}
    </button>
  );
}
