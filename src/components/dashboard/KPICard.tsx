import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'primary' | 'secondary' | 'accent' | 'success';
}

const variantStyles = {
  primary: 'kpi-icon-primary',
  secondary: 'kpi-icon-secondary',
  accent: 'kpi-icon-accent',
  success: 'kpi-icon-success',
};

export const KPICard = ({ title, value, icon: Icon, trend, variant = 'primary' }: KPICardProps) => {
  return (
    <div className="kpi-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div className={cn('kpi-icon', variantStyles[variant])}>
          <Icon className="h-6 w-6" />
        </div>
        {trend && (
          <span
            className={cn(
              'text-sm font-medium',
              trend.isPositive ? 'text-success' : 'text-destructive'
            )}
          >
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
};
