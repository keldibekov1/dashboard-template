import { UserPlus, CreditCard, Calendar, Users } from 'lucide-react';
import { activities, Activity } from '@/data/mockData';
import { cn } from '@/lib/utils';

const getActivityIcon = (type: Activity['type']) => {
  const icons = {
    user_registered: UserPlus,
    payment_received: CreditCard,
    appointment_created: Calendar,
    employee_added: Users,
  };
  return icons[type];
};

const getActivityColor = (type: Activity['type']) => {
  const colors = {
    user_registered: 'bg-primary-light text-primary',
    payment_received: 'bg-success-light text-success',
    appointment_created: 'bg-accent-light text-accent',
    employee_added: 'bg-secondary-light text-secondary',
  };
  return colors[type];
};

export const ActivityTable = () => {
  return (
    <div className="card-elevated overflow-hidden">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-lg font-semibold">So'nggi faoliyat</h3>
      </div>
      <div className="divide-y divide-border/50">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          const colorClass = getActivityColor(activity.type);

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/30"
            >
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-full', colorClass)}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{activity.description}</p>
                {activity.user && (
                  <p className="text-sm text-muted-foreground">{activity.user}</p>
                )}
              </div>
              <span className="text-sm text-muted-foreground">{activity.timestamp.split(' ')[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
