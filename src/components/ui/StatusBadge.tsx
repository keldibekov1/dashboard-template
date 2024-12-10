import { cn } from '@/lib/utils';

type StatusType = 'success' | 'warning' | 'error' | 'info';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const statusStyles: Record<StatusType, string> = {
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-destructive',
  info: 'badge-primary',
};

export const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  return <span className={cn(statusStyles[status])}>{label}</span>;
};
