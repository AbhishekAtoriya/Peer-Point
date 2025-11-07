import { Award, TrendingUp, Gift, Sparkles, Mic, Zap, Users, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

interface DashboardProps {
  onNavigate: (screen: string) => void;
  onCelebration: (message: string) => void;
}

export function Dashboard({ onNavigate, onCelebration }: DashboardProps) {
  const stats = {
    peerPoints: 85,
    maxPoints: 100,
    recognitionsReceived: 24,
    topBadge: 'Team Champion',
  };

  const recentRecognitions = [
    { from: 'Priya Sharma', message: 'Amazing work on the customer onboarding project!', points: 10, tag: '#TeamPlayer' },
    { from: 'Rahul Kumar', message: 'Thanks for helping me with the presentation.', points: 5, tag: '#Helpful' },
    { from: 'Anjali Verma', message: 'Your innovative solution saved us hours!', points: 8, tag: '#Innovation' },
  ];

  const weeklyGoal = {
    current: 12,
    target: 20,
    percentage: 60,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section with Gradient */}
      <div className="icici-gradient rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <h2 className="text-white mb-2">Welcome Back! 👋</h2>
          <p className="text-white/90">Let's make today count with meaningful recognition</p>
          <div className="flex gap-3 mt-6">
            <Button 
              className="bg-white text-icici-orange hover:bg-white/90"
              onClick={() => onNavigate('kudos')}
            >
              <Gift className="w-4 h-4 mr-2" />
              Give Recognition
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('analytics')}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Peer Points Balance */}
        <Card className="border-2 border-icici-orange/20 dark:bg-dark-card overflow-hidden relative hover:shadow-2xl transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-icici-orange/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-icici-orange">
              <Award className="w-5 h-5" />
              Points Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl mb-2">{stats.peerPoints}</div>
            <p className="text-text-gray text-sm mb-3">of {stats.maxPoints} available</p>
            <Progress value={(stats.peerPoints / stats.maxPoints) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Recognitions Received */}
        <Card className="border-2 border-success/20 dark:bg-dark-card overflow-hidden relative hover:shadow-2xl transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <TrendingUp className="w-5 h-5" />
              Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl mb-2">{stats.recognitionsReceived}</div>
            <p className="text-text-gray text-sm">This month</p>
            <p className="text-success text-sm mt-2 flex items-center gap-1">
              <Zap className="w-4 h-4" />
              +15% from last month
            </p>
          </CardContent>
        </Card>

        {/* Top Badge */}
        <Card className="border-2 border-warning/20 dark:bg-dark-card overflow-hidden relative hover:shadow-2xl transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <Sparkles className="w-5 h-5" />
              Top Badge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl mb-2">🏆 {stats.topBadge}</div>
            <p className="text-text-gray text-sm">Most recent achievement</p>
          </CardContent>
        </Card>

        {/* Weekly Goal */}
        <Card className="border-2 border-icici-blue/20 dark:bg-dark-card overflow-hidden relative hover:shadow-2xl transition-all group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-icici-blue/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-icici-blue">
              <Target className="w-5 h-5" />
              Weekly Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl mb-2">{weeklyGoal.current}/{weeklyGoal.target}</div>
            <p className="text-text-gray text-sm mb-3">Recognitions sent</p>
            <Progress value={weeklyGoal.percentage} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions with Enhanced Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button 
          className="h-auto py-6 bg-gradient-to-r from-icici-orange to-icici-orange-light hover:from-icici-orange-light hover:to-icici-orange text-white shadow-lg hover:shadow-2xl transition-all"
          onClick={() => onNavigate('kudos')}
        >
          <Gift className="w-6 h-6 mr-2" />
          <div className="text-left">
            <div>Give Kudos</div>
            <div className="text-xs opacity-90">Recognize your peers</div>
          </div>
        </Button>

        <Button 
          className="h-auto py-6 bg-gradient-to-r from-icici-blue to-blue-600 hover:from-blue-600 hover:to-icici-blue text-white shadow-lg hover:shadow-2xl transition-all"
          onClick={() => onNavigate('wall')}
        >
          <Award className="w-6 h-6 mr-2" />
          <div className="text-left">
            <div>Recognition Wall</div>
            <div className="text-xs opacity-90">See celebrations</div>
          </div>
        </Button>

        <Button 
          className="h-auto py-6 bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white shadow-lg hover:shadow-2xl transition-all"
          onClick={() => onNavigate('analytics')}
        >
          <TrendingUp className="w-6 h-6 mr-2" />
          <div className="text-left">
            <div>View Analytics</div>
            <div className="text-xs opacity-90">Track your impact</div>
          </div>
        </Button>
      </div>

      {/* Voice Recognition Feature with Enhanced Design */}
      <Card className="dark:bg-dark-card border-2 border-dashed border-icici-orange/30 hover:border-icici-orange transition-all hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-icici-orange to-icici-orange-light rounded-2xl flex items-center justify-center text-white animate-float">
                <Mic className="w-8 h-8" />
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-icici-orange mb-1">
                  Voice Recognition
                  <span className="px-2 py-0.5 bg-success text-white text-xs rounded-full">NEW</span>
                </h3>
                <p className="text-text-gray text-sm">Speak your appreciation directly - hands-free recognition!</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-icici-orange text-icici-orange hover:bg-icici-orange hover:text-white transition-all"
              onClick={() => onCelebration('Voice Recognition Coming Soon!')}
            >
              Try Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Team Activity */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-icici-orange" />
              Team Activity
            </CardTitle>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-icici-orange"
              onClick={() => onNavigate('wall')}
            >
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentRecognitions.map((recognition, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-xl hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-icici-orange to-icici-orange-light text-white rounded-full flex items-center justify-center flex-shrink-0">
                {recognition.from.split(' ')[0][0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span>{recognition.from}</span>
                  <span className="px-2 py-0.5 bg-icici-orange text-white text-xs rounded-full">
                    ⭐ {recognition.points}
                  </span>
                </div>
                <p className="text-text-gray text-sm mb-2">{recognition.message}</p>
                <span className="inline-block px-2 py-1 bg-icici-orange/20 text-icici-orange text-xs rounded-full">
                  {recognition.tag}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}