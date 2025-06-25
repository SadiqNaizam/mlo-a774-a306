import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FileText, Users, UserPlus } from 'lucide-react';

interface Stat {
  id: number;
  label: 'Posts' | 'Followers' | 'Following';
  value: string;
  icon: React.ElementType;
}

const statsData: Stat[] = [
  { id: 1, label: 'Posts', value: '938', icon: FileText },
  { id: 2, label: 'Followers', value: '3,586', icon: Users },
  { id: 3, label: 'Following', value: '2,659', icon: UserPlus },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-border">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center gap-2 p-6 text-center">
              <stat.icon className="w-7 h-7 text-primary" />
              <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
              <p className="text-sm text-secondary-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCardGrid;
