import type { 
  FC, 
  ReactNode, 
  FormEvent, 
  ChangeEvent,
  useState,
  useCallback
} from 'react';

// Re-export the types we need
export type {
  FC,
  ReactNode,
  FormEvent,
  ChangeEvent
};

// Re-export hooks
export { useState, useCallback };

// Add any additional custom types here
export interface BaseProps {
  children?: ReactNode;
  className?: string;
} 