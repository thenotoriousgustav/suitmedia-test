import { cn } from '@/lib/utils';

export default function Container({ children, className }) {
  return (
    <div className={cn('container mx-auto px-3 md:px-8', className)}>
      {children}
    </div>
  );
}
