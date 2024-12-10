import { Users, CalendarCheck, UserCog, Wallet } from 'lucide-react';
import { KPICard } from '@/components/dashboard/KPICard';
import { UsersChart } from '@/components/dashboard/UsersChart';
import { PaymentsChart } from '@/components/dashboard/PaymentsChart';
import { ActivityTable } from '@/components/dashboard/ActivityTable';
import { dashboardStats, formatCurrency } from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Umumiy foydalanuvchilar"
          value={dashboardStats.totalUsers}
          icon={Users}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <KPICard
          title="Bugungi tashriflar"
          value={dashboardStats.todayVisits}
          icon={CalendarCheck}
          variant="secondary"
          trend={{ value: 8, isPositive: true }}
        />
        <KPICard
         title="Oylik foydalanuvchilar"
          value={dashboardStats.monthUsers}
          icon={UserCog}
          variant="accent"
        />
        <KPICard
          title="Bugungi daromad"
          value={formatCurrency(dashboardStats.todayRevenue)}
          icon={Wallet}
          variant="success"
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <UsersChart />
        <PaymentsChart />
      </div>

      <ActivityTable />
    </div>
  );
};

export default Dashboard;
