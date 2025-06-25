import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Follower {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
  isFollowed: boolean;
}

interface FollowerCardProps {
  follower: Follower;
  className?: string;
}

const FollowerCard: React.FC<FollowerCardProps> = ({ follower, className }) => {
  const [isFollowed, setIsFollowed] = React.useState(follower.isFollowed);

  const handleFollowToggle = () => {
    setIsFollowed((prev) => !prev);
    // In a real app, you would call a mutation here
  };

  return (
    <Card className={cn("p-4 hover:shadow-md transition-shadow", className)}>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Avatar className="w-12 h-12 flex-shrink-0">
            <AvatarImage src={follower.avatarUrl} alt={follower.name} />
            <AvatarFallback>{follower.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="font-semibold truncate text-card-foreground">{follower.name}</p>
            <div className="flex items-center text-sm text-secondary-foreground">
              <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
              <span className="truncate">{follower.location}</span>
            </div>
          </div>
        </div>
        <Button
          variant={isFollowed ? 'default' : 'outline'}
          size="sm"
          onClick={handleFollowToggle}
          className={cn(
            "w-24 flex-shrink-0",
            isFollowed && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {isFollowed ? 'Followed' : 'Follow'}
        </Button>
      </div>
    </Card>
  );
};

export default FollowerCard;
