import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import ProfileHeader from '@/components/UserProfile/ProfileHeader';
import StatsCardGrid from '@/components/UserProfile/StatsCardGrid';
import FollowersList from '@/components/UserProfile/FollowersList';

/**
 * User Profile Dashboard Page
 * 
 * This is the main page for the user profile dashboard view. It orchestrates the 
 * overall layout and composes the primary feature components:
 * - ProfileHeader: Displays the user's banner, avatar, and basic info.
 * - StatsCardGrid: Shows key statistics like posts, followers, and following count.
 * - FollowersList: A searchable and interactive list of the user's followers.
 * 
 * The page uses MainAppLayout to provide the consistent sidebar and top header navigation structure.
 */
const UserProfilePage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <ProfileHeader />
        <StatsCardGrid />
        <FollowersList />
      </div>
    </MainAppLayout>
  );
};

export default UserProfilePage;
