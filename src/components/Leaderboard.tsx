import { useState } from 'react';
import { Trophy, TrendingUp, Award, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

interface LeaderboardProps {
  onCelebration: (message: string) => void;
}

export function Leaderboard({ onCelebration }: LeaderboardProps) {
  const [selectedTab, setSelectedTab] = useState('weekly');

  const weeklyLeaders = [
    { rank: 1, name: 'Priya Sharma', department: 'Customer Service', points: 145, avatar: 'PS', badge: 'Customer Hero', trend: '+15' },
    { rank: 2, name: 'Rahul Kumar', department: 'Operations', points: 132, avatar: 'RK', badge: 'Rising Star', trend: '+22' },
    { rank: 3, name: 'Anjali Verma', department: 'Marketing', points: 128, avatar: 'AV', badge: 'Team Champion', trend: '+8' },
    { rank: 4, name: 'Amit Patel', department: 'IT', points: 115, avatar: 'AP', badge: 'Innovator', trend: '+12' },
    { rank: 5, name: 'Sneha Reddy', department: 'HR', points: 108, avatar: 'SR', badge: 'Mentor', trend: '+18' },
  ];

  const monthlyLeaders = [
    { rank: 1, name: 'Rahul Kumar', department: 'Operations', points: 542, avatar: 'RK', badge: 'Rising Star', trend: '+45' },
    { rank: 2, name: 'Priya Sharma', department: 'Customer Service', points: 520, avatar: 'PS', badge: 'Customer Hero', trend: '+38' },
    { rank: 3, name: 'Vikram Singh', department: 'Sales', points: 485, avatar: 'VS', badge: 'Leader', trend: '+52' },
    { rank: 4, name: 'Anjali Verma', department: 'Marketing', points: 468, avatar: 'AV', badge: 'Team Champion', trend: '+29' },
    { rank: 5, name: 'Amit Patel', department: 'IT', points: 445, avatar: 'AP', badge: 'Innovator', trend: '+41' },
  ];

  const branchLeaders = [
    { rank: 1, branch: 'Mumbai Central', recognitions: 892, employees: 45, avgPoints: 19.8 },
    { rank: 2, branch: 'Delhi NCR', recognitions: 847, employees: 52, avgPoints: 16.3 },
    { rank: 3, branch: 'Bangalore Tech Park', recognitions: 823, employees: 38, avgPoints: 21.7 },
    { rank: 4, branch: 'Pune Corporate', recognitions: 756, employees: 41, avgPoints: 18.4 },
    { rank: 5, branch: 'Hyderabad Hub', recognitions: 698, employees: 35, avgPoints: 19.9 },
  ];

  const getCurrentLeaders = () => {
    if (selectedTab === 'weekly') return weeklyLeaders;
    if (selectedTab === 'monthly') return monthlyLeaders;
    return [];
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="flex items-center gap-2">
          <Trophy className="w-8 h-8 text-warning" />
          Leaderboard
        </h2>
        <p className="text-text-gray mt-1">Celebrating our top performers</p>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="branch">Branch</TabsTrigger>
        </TabsList>

        {/* Weekly & Monthly Tabs */}
        <TabsContent value="weekly" className="space-y-4 mt-6">
          {getCurrentLeaders().map((leader, index) => (
            <Card 
              key={leader.rank} 
              className={`dark:bg-dark-card transition-all hover:shadow-lg ${
                leader.rank <= 3 ? 'border-2 border-warning/30' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <div className={`text-3xl w-16 text-center ${
                    leader.rank === 1 ? 'scale-110' : ''
                  }`}>
                    {getRankBadge(leader.rank)}
                  </div>

                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${
                    leader.rank === 1 ? 'bg-gradient-to-br from-warning to-orange-500' :
                    leader.rank === 2 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    leader.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    'bg-gradient-to-br from-icici-orange to-icici-orange-light'
                  }`}>
                    {leader.avatar}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={leader.rank <= 3 ? '' : ''}>{leader.name}</span>
                      <Badge variant="outline" className="border-icici-orange text-icici-orange">
                        {leader.badge}
                      </Badge>
                    </div>
                    <p className="text-text-gray text-sm">{leader.department}</p>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <div className="text-2xl text-icici-orange mb-1">{leader.points}</div>
                    <div className="flex items-center gap-1 text-success text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {leader.trend}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button 
            className="w-full mt-4 bg-gradient-to-r from-warning to-orange-500 text-white"
            onClick={() => onCelebration('Weekly Winners Announced! 🎉')}
          >
            <Award className="w-5 h-5 mr-2" />
            Celebrate Weekly Winners
          </Button>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4 mt-6">
          {getCurrentLeaders().map((leader) => (
            <Card 
              key={leader.rank} 
              className={`dark:bg-dark-card transition-all hover:shadow-lg ${
                leader.rank <= 3 ? 'border-2 border-warning/30' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`text-3xl w-16 text-center ${
                    leader.rank === 1 ? 'scale-110' : ''
                  }`}>
                    {getRankBadge(leader.rank)}
                  </div>

                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${
                    leader.rank === 1 ? 'bg-gradient-to-br from-warning to-orange-500' :
                    leader.rank === 2 ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    leader.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    'bg-gradient-to-br from-icici-orange to-icici-orange-light'
                  }`}>
                    {leader.avatar}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{leader.name}</span>
                      <Badge variant="outline" className="border-icici-orange text-icici-orange">
                        {leader.badge}
                      </Badge>
                    </div>
                    <p className="text-text-gray text-sm">{leader.department}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl text-icici-orange mb-1">{leader.points}</div>
                    <div className="flex items-center gap-1 text-success text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {leader.trend}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Branch Tab */}
        <TabsContent value="branch" className="space-y-6 mt-6">
          <Card className="dark:bg-dark-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-icici-orange" />
                Appreciation Heatmap - Branch Recognition Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {branchLeaders.map((branch) => (
                  <div key={branch.branch} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{getRankBadge(branch.rank)}</span>
                        <span>{branch.branch}</span>
                      </div>
                      <span className="text-icici-orange">{branch.recognitions} recognitions</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-bg rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-icici-orange to-icici-orange-light rounded-full transition-all"
                        style={{ width: `${(branch.recognitions / 892) * 100}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-text-gray">
                      <span>{branch.employees} employees</span>
                      <span>Avg: {branch.avgPoints} points/employee</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Predictive Star */}
          <Card className="dark:bg-dark-card border-2 border-dashed border-success/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-success flex-shrink-0" />
                <div>
                  <h3 className="text-success mb-2">Predictive Rising Talent</h3>
                  <p className="text-text-gray text-sm mb-3">
                    Based on recognition trends, these employees show exceptional growth potential:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm">
                        RK
                      </div>
                      <div>
                        <p className="text-sm">Rahul Kumar</p>
                        <p className="text-xs text-text-gray">+45% recognition growth this month</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm">
                        SR
                      </div>
                      <div>
                        <p className="text-sm">Sneha Reddy</p>
                        <p className="text-xs text-text-gray">+38% recognition growth this month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
