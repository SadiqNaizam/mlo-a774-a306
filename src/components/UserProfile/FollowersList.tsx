import React from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import FollowerCard, { Follower } from './FollowerCard';
import { cn } from '@/lib/utils';

// Dummy Data
const followersData: Follower[] = [
  { id: '1', name: 'Derrick Ray', location: 'Namibia', avatarUrl: 'https://i.pravatar.cc/150?u=derrick', isFollowed: false },
  { id: '2', name: 'Eula Peterson', location: 'Peru', avatarUrl: 'https://i.pravatar.cc/150?u=eula', isFollowed: false },
  { id: '3', name: 'Leila Jefferson', location: 'Jordan', avatarUrl: 'https://i.pravatar.cc/150?u=leila', isFollowed: true },
  { id: '4', name: 'Hallie Nelson', location: "Côte d'Ivoire", avatarUrl: 'https://i.pravatar.cc/150?u=hallie', isFollowed: false },
  { id: '5', name: 'John Doe', location: 'USA', avatarUrl: 'https://i.pravatar.cc/150?u=john', isFollowed: true },
  { id: '6', name: 'Jane Smith', location: 'Canada', avatarUrl: 'https://i.pravatar.cc/150?u=jane', isFollowed: false },
];

interface FollowersListProps {
  className?: string;
}

const FollowersList: React.FC<FollowersListProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredFollowers = followersData.filter(follower =>
    follower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    follower.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={cn("w-full space-y-6", className)}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-foreground">Followers</h2>
          <Badge variant="secondary" className="bg-sidebar/80 text-sidebar-foreground">{followersData.length}</Badge>
        </div>
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search Followers..."
            className="pl-10 bg-card border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredFollowers.length > 0 ? (
          filteredFollowers.map((follower) => (
            <FollowerCard key={follower.id} follower={follower} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 p-8 text-center bg-card rounded-lg">
            <p className="text-secondary-foreground">No followers found for "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowersList;
