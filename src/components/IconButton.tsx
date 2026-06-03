import React from 'react';
import { Button, ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  icon: string | React.ReactNode;
}

/**
 * IconButton
 * 
 * A specialized small button for icons or single symbols.
 */
export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  const ariaLabel = props['aria-label'] || (typeof icon === 'string' ? icon : undefined);

  return (
    <Button 
      aria-label={ariaLabel}
      {...props} 
      style={{ 
        padding: '0.5rem', 
        minWidth: '44px', 
        height: '44px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        ...props.style 
      }}
    >
      {icon}
    </Button>
  );
};
