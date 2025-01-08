import React from 'react';
import { Wallet, TrendingUp, Clock } from 'lucide-react';
import StatCard from '../components/stats/StatCard';
import YieldChart from '../components/charts/YieldChart';
import ActivityItem from '../components/activity/ActivityItem';
import Card from '../components/Card';

const stats = [
  { 
    label: 'Total Balance',
    value: '$5,240.50',
    icon: Wallet,
    change: '+12.5%'
  },
  {
    label: 'Total Yield Earned',
    value: '$320.75',
    icon: TrendingUp,
    change: '+8.2%'
  },
  {
    label: 'Active Subscriptions',
    value: '3',
    icon: Clock,
    change: '0%'
  },
];

const recentActivity = [
  {
    icon: TrendingUp,
    title: 'Yield Generated',
    timestamp: '2 hours ago',
    amount: '+$1.25'
  },
  {
    icon: TrendingUp,
    title: 'Yield Generated',
    timestamp: '4 hours ago',
    amount: '+$0.95'
  },
  {
    icon: TrendingUp,
    title: 'Yield Generated',
    timestamp: '6 hours ago',
    amount: '+$1.10'
  },
];

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Chart */}
      <div className="mb-8">
        <YieldChart />
      </div>

      {/* Recent Activity */}
      <Card>
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-1">
          {recentActivity.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;