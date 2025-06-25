import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProfileHeaderProps {
  className?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ className }) => {
  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <div className="h-40 w-full relative bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200">
        {/* Abstract background SVG for visual flair like the image */}
        <svg className="absolute inset-0 w-full h-full text-card/10" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C25,100 75,0 100,50 L100,100 L0,100 Z" />
          <path d="M0,70 C30,40 70,120 100,60 L100,100 L0,100 Z" opacity="0.5" />
        </svg>
      </div>
      <CardContent className="relative flex flex-col items-center p-6 -mt-16">
        <Avatar className="w-24 h-24 border-4 border-card shadow-md">
          <AvatarImage src="https://i.pravatar.cc/150?u=davidm" alt="David McMichael" />
          <AvatarFallback>DM</AvatarFallback>
        </Avatar>
        <h1 className="mt-4 text-2xl font-bold text-card-foreground">David McMichael</h1>
        <p className="text-sm text-secondary-foreground">Designer</p>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
