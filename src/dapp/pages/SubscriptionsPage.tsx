import React from 'react';
import { Plus, Calendar, DollarSign } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const subscriptions = [
  {
    id: 1,
    name: 'Netflix',
    amount: 15.99,
    nextPayment: '2024-04-01',
    yieldEarned: 0.42,
  },
  {
    id: 2,
    name: 'Spotify',
    amount: 9.99,
    nextPayment: '2024-04-05',
    yieldEarned: 0.28,
  },
  {
    id: 3,
    name: 'Amazon Prime',
    amount: 14.99,
    nextPayment: '2024-04-15',
    yieldEarned: 0.35,
  },
];

const SubscriptionsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Active Subscriptions</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Subscription
        </Button>
      </div>

      <div className="grid gap-6">
        {subscriptions.map((sub) => (
          <Card key={sub.id} className="transform transition-all duration-300 hover:scale-101">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-white">{sub.name}</h3>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>${sub.amount}/month</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Next payment: {sub.nextPayment}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-400">
                  +${sub.yieldEarned} earned
                </div>
                <div className="mt-4 space-x-2">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button variant="danger" size="sm">Cancel</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;