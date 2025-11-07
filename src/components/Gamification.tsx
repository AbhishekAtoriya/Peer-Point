import { Trophy, Zap, Target, Award, Star, Flame, Crown, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function Gamification() {
  const userLevel = {
    current: 8,
    name: 'Recognition Champion',
    progress: 65,
    currentXP: 3250,
    nextLevelXP: 5000,
    totalXP: 28450,
  };

  const achievements = [
    {
      id: 1,
      icon: '🏆',
      name: 'Century Club',
      description: 'Send 100 recognitions',
      progress: 85,
      current: 85,
      target: 100,
      rarity: 'gold',
      points: 500,
      unlocked: false,
    },
    {
      id: 2,
      icon: '⚡',
      name: 'Speed Demon',
      description: 'Send 10 recognitions in one day',
      progress: 100,
      current: 12,
      target: 10,
      rarity: 'silver',
      points: 250,
      unlocked: true,
    },
    {
      id: 3,
      icon: '🔥',
      name: '30-Day Streak',
      description: 'Recognize someone for 30 consecutive days',
      progress: 40,
      current: 12,
      target: 30,
      rarity: 'platinum',
      points: 1000,
      unlocked: false,
    },
    {
      id: 4,
      icon: '🌟',
      name: 'People\'s Champion',
      description: 'Receive 50 recognitions',
      progress: 100,
      current: 67,
      target: 50,
      rarity: 'gold',
      points: 500,
      unlocked: true,
    },
    {
      id: 5,
      icon: '💫',
      name: 'Cross-Pollinator',
      description: 'Recognize people from 5 different departments',
      progress: 80,
      current: 4,
      target: 5,
      rarity: 'silver',
      points: 300,
      unlocked: false,
    },
    {
      id: 6,
      icon: '👑',
      name: 'Monthly MVP',
      description: 'Top of leaderboard for a month',
      progress: 100,
      current: 1,
      target: 1,
      rarity: 'platinum',
      points: 1500,
      unlocked: true,
    },
  ];

  const challenges = [
    {
      id: 1,
      name: 'Recognition Sprint',
      description: 'Send 5 recognitions this week',
      progress: 60,
      current: 3,
      target: 5,
      timeLeft: '3 days',
      reward: '100 XP + Special Badge',
      type: 'weekly',
    },
    {
      id: 2,
      name: 'Department Unity',
      description: 'Recognize someone from each department',
      progress: 75,
      current: 3,
      target: 4,
      timeLeft: '10 days',
      reward: '200 XP + Unity Badge',
      type: 'monthly',
    },
    {
      id: 3,
      name: 'Quality Over Quantity',
      description: 'Write 3 detailed recognitions (100+ words)',
      progress: 33,
      current: 1,
      target: 3,
      timeLeft: '5 days',
      reward: '150 XP + Writer Badge',
      type: 'weekly',
    },
  ];

  const leaderboardPosition = 3;
  const streakDays = 12;
  const maxStreak = 28;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'platinum': return 'from-purple-500 to-pink-500';
      case 'gold': return 'from-warning to-amber-600';
      case 'silver': return 'from-gray-400 to-gray-600';
      case 'bronze': return 'from-orange-600 to-orange-800';
      default: return 'from-icici-orange to-icici-orange-light';
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'platinum': return 'bg-purple-500/20 text-purple-600';
      case 'gold': return 'bg-warning/20 text-warning';
      case 'silver': return 'bg-gray-400/20 text-gray-600';
      case 'bronze': return 'bg-orange-600/20 text-orange-700';
      default: return 'bg-icici-orange/20 text-icici-orange';
    }
  };

  return (
    <div className="space-y-6">
      {/* Level Progress */}
      <Card className="dark:bg-dark-card border-2 border-icici-orange/20 overflow-hidden">
        <div className="icici-gradient h-3"></div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-warning to-amber-600 rounded-2xl flex items-center justify-center text-white text-3xl animate-float shadow-xl">
                {userLevel.current}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3>{userLevel.name}</h3>
                  <Crown className="w-5 h-5 text-warning" />
                </div>
                <p className="text-text-gray text-sm">Level {userLevel.current} Recognition Master</p>
                <div className="flex items-center gap-2 mt-2">
                  <Zap className="w-4 h-4 text-icici-orange" />
                  <span className="text-sm text-icici-orange">{userLevel.totalXP.toLocaleString()} Total XP</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-success text-white mb-2">#{leaderboardPosition} in Leaderboard</Badge>
              <div className="flex items-center gap-2 justify-end">
                <Flame className="w-4 h-4 text-error" />
                <span className="text-sm"><strong>{streakDays}</strong> day streak 🔥</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Progress to Level {userLevel.current + 1}</span>
              <span className="text-sm text-icici-orange">{userLevel.currentXP} / {userLevel.nextLevelXP} XP</span>
            </div>
            <Progress value={userLevel.progress} className="h-3" />
            <p className="text-xs text-text-gray mt-2">
              {userLevel.nextLevelXP - userLevel.currentXP} XP needed to level up
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="dark:bg-dark-card border-l-4 border-success">
          <CardContent className="p-4 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl text-success mb-1">6</div>
            <p className="text-xs text-text-gray">Achievements</p>
          </CardContent>
        </Card>
        
        <Card className="dark:bg-dark-card border-l-4 border-error">
          <CardContent className="p-4 text-center">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-2xl text-error mb-1">{streakDays}</div>
            <p className="text-xs text-text-gray">Day Streak</p>
          </CardContent>
        </Card>
        
        <Card className="dark:bg-dark-card border-l-4 border-icici-orange">
          <CardContent className="p-4 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl text-icici-orange mb-1">3250</div>
            <p className="text-xs text-text-gray">XP This Month</p>
          </CardContent>
        </Card>
        
        <Card className="dark:bg-dark-card border-l-4 border-purple-500">
          <CardContent className="p-4 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-2xl text-purple-500 mb-1">3/5</div>
            <p className="text-xs text-text-gray">Challenges</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Challenges */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-icici-orange" />
              Active Challenges
            </CardTitle>
            <Badge variant="outline">{challenges.length} active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id} 
              className="p-4 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-xl border-2 border-icici-orange/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base">{challenge.name}</h3>
                    <Badge className={challenge.type === 'weekly' ? 'bg-icici-orange/20 text-icici-orange' : 'bg-icici-blue/20 text-icici-blue'}>
                      {challenge.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-text-gray">{challenge.description}</p>
                </div>
                <Badge variant="outline" className="flex-shrink-0">
                  {challenge.timeLeft}
                </Badge>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{challenge.current} / {challenge.target}</span>
                  <span className="text-sm text-icici-orange">{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-success">
                  <Award className="w-4 h-4" />
                  <span>{challenge.reward}</span>
                </div>
                {challenge.progress === 100 && (
                  <Badge className="bg-success text-white">Completed!</Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-icici-orange" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`p-5 rounded-2xl border-2 transition-all ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card border-icici-orange/30 hover:shadow-xl' 
                    : 'bg-gray-50 dark:bg-dark-bg/50 border-gray-200 dark:border-gray-700 opacity-60'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${getRarityColor(achievement.rarity)} rounded-2xl flex items-center justify-center text-3xl ${achievement.unlocked ? 'animate-float' : 'grayscale'}`}>
                    {achievement.icon}
                  </div>
                  <Badge className={getRarityBadge(achievement.rarity)} variant="outline">
                    {achievement.rarity}
                  </Badge>
                </div>

                <h3 className="text-sm mb-1">{achievement.name}</h3>
                <p className="text-xs text-text-gray mb-3">{achievement.description}</p>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{achievement.current} / {achievement.target}</span>
                    <span className="text-xs text-icici-orange">{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} className="h-1.5" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-gray">+{achievement.points} XP</span>
                  {achievement.unlocked && (
                    <Badge className="bg-success text-white text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Unlocked
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak Tracker */}
      <Card className="dark:bg-dark-card bg-gradient-to-r from-error/10 to-orange-500/10 border-2 border-error/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-error to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 pulse-glow">
              <Flame className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 flex items-center gap-2">
                Your Recognition Streak 🔥
                <Badge className="bg-error text-white">{streakDays} days</Badge>
              </h3>
              <p className="text-text-gray text-sm mb-4">
                You're on fire! Keep recognizing peers daily to maintain your streak. Your longest streak is {maxStreak} days!
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-12 flex-1 rounded ${
                      i < streakDays % 7 ? 'bg-gradient-to-t from-error to-orange-500' : 'bg-gray-200 dark:bg-dark-bg'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-text-gray mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
