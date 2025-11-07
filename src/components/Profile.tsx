import { User, Award, TrendingUp, Edit, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

interface ProfileProps {
  currentUser: { name: string; avatar: string };
}

export function Profile({ currentUser }: ProfileProps) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bio, setBio] = useState('Passionate about delivering exceptional customer service and fostering team collaboration. Love helping colleagues succeed!');

  const userProfile = {
    name: currentUser.name,
    employeeId: 'EMP12345',
    department: 'Customer Service',
    branch: 'Mumbai Central',
    joinDate: 'January 2022',
    peerPoints: 485,
    totalRecognitions: 68,
    badges: [
      { name: 'Team Champion', icon: '🏆', earned: 'Oct 2024' },
      { name: 'Customer Hero', icon: '⭐', earned: 'Sep 2024' },
      { name: 'Rising Star', icon: '🌟', earned: 'Aug 2024' },
      { name: 'Innovator', icon: '💡', earned: 'Jul 2024' },
      { name: 'Mentor', icon: '👨‍🏫', earned: 'Jun 2024' },
      { name: '100 Club', icon: '💯', earned: 'May 2024' },
    ],
    recentActivity: [
      { type: 'received', from: 'Priya Sharma', message: 'Amazing work on the customer onboarding project!', points: 10, time: '2 days ago' },
      { type: 'sent', to: 'Rahul Kumar', message: 'Thanks for helping me with the presentation.', points: 5, time: '3 days ago' },
      { type: 'received', from: 'Anjali Verma', message: 'Your innovative solution saved us hours!', points: 8, time: '5 days ago' },
      { type: 'sent', to: 'Amit Patel', message: 'Great teamwork on the project!', points: 7, time: '1 week ago' },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2>My Profile</h2>
        <p className="text-text-gray mt-1">Manage your profile and view your achievements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card className="dark:bg-dark-card">
            <CardContent className="p-6">
              <div className="text-center">
                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-icici-orange to-icici-orange-light text-white rounded-full flex items-center justify-center text-3xl">
                    {currentUser.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-icici-orange text-white rounded-full flex items-center justify-center hover:bg-icici-orange-light transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="mb-1">{userProfile.name}</h3>
                <p className="text-text-gray text-sm mb-4">{userProfile.employeeId}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-gray">Department:</span>
                    <span>{userProfile.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-gray">Branch:</span>
                    <span>{userProfile.branch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-gray">Joined:</span>
                    <span>{userProfile.joinDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="dark:bg-dark-card">
            <CardHeader>
              <CardTitle className="text-base">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-icici-orange-pale dark:bg-dark-bg rounded-xl">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-icici-orange" />
                  <span className="text-sm">Points Balance</span>
                </div>
                <span className="text-icici-orange">{userProfile.peerPoints}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-success/10 dark:bg-success/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-sm">Total Recognitions</span>
                </div>
                <span className="text-success">{userProfile.totalRecognitions}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-warning/10 dark:bg-warning/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-warning" />
                  <span className="text-sm">Badges Earned</span>
                </div>
                <span className="text-warning">{userProfile.badges.length}</span>
              </div>
            </CardContent>
          </Card>

          {/* AR Badge Feature */}
          <Card className="dark:bg-dark-card border-2 border-dashed border-icici-blue/30">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="text-sm mb-1">AR Badge View</h3>
              <p className="text-xs text-text-gray mb-3">
                Scan your employee ID to view badges in 3D! (Mobile feature)
              </p>
              <Button size="sm" variant="outline" className="border-icici-blue text-icici-blue">
                Try AR View
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Badges and Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Section */}
          <Card className="dark:bg-dark-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>About Me</CardTitle>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsEditingBio(!isEditingBio)}
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isEditingBio ? (
                <div className="space-y-3">
                  <Textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => setIsEditingBio(false)}
                      className="bg-icici-orange hover:bg-icici-orange-light text-white"
                    >
                      Save
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsEditingBio(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-text-gray">{bio}</p>
              )}
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="dark:bg-dark-card">
            <CardHeader>
              <CardTitle>My Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {userProfile.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card border-2 border-icici-orange/20 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h3 className="text-sm mb-1">{badge.name}</h3>
                    <p className="text-xs text-text-gray">Earned {badge.earned}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="dark:bg-dark-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {userProfile.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-icici-orange-pale dark:bg-dark-bg rounded-xl"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'received' 
                      ? 'bg-success text-white' 
                      : 'bg-icici-blue text-white'
                  }`}>
                    {activity.type === 'received' ? '📨' : '📤'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {activity.type === 'received' ? (
                        <>
                          <span className="text-sm">From <strong>{activity.from}</strong></span>
                          <Badge className="bg-success text-white text-xs">
                            +{activity.points}
                          </Badge>
                        </>
                      ) : (
                        <>
                          <span className="text-sm">To <strong>{activity.to}</strong></span>
                          <Badge className="bg-icici-blue text-white text-xs">
                            -{activity.points}
                          </Badge>
                        </>
                      )}
                    </div>
                    <p className="text-text-gray text-sm mb-1">{activity.message}</p>
                    <p className="text-xs text-text-gray">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
