import { Smile, TrendingUp, Brain, Zap, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

export function TeamMoodTracker() {
  const moodData = {
    overall: 92,
    trend: 'up',
    emotions: [
      { emoji: '😊', label: 'Happy', percentage: 45, count: 156, color: 'from-success to-emerald-600' },
      { emoji: '🎉', label: 'Excited', percentage: 28, count: 97, color: 'from-icici-orange to-warning' },
      { emoji: '💪', label: 'Motivated', percentage: 18, count: 62, color: 'from-icici-blue to-blue-600' },
      { emoji: '🙏', label: 'Grateful', percentage: 9, count: 31, color: 'from-purple-500 to-pink-500' },
    ],
    departments: [
      { name: 'Sales', mood: 95, change: '+5%' },
      { name: 'Customer Service', mood: 88, change: '+3%' },
      { name: 'IT', mood: 91, change: '+7%' },
      { name: 'Operations', mood: 87, change: '+2%' },
    ],
  };

  const weeklyTrends = [
    { day: 'Mon', mood: 85 },
    { day: 'Tue', mood: 87 },
    { day: 'Wed', mood: 90 },
    { day: 'Thu', mood: 92 },
    { day: 'Fri', mood: 94 },
  ];

  return (
    <div className="space-y-6">
      {/* Overall Mood Score */}
      <Card className="dark:bg-dark-card border-2 border-icici-orange/20 overflow-hidden">
        <div className="icici-gradient h-2"></div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="flex items-center gap-2 mb-2">
                <Smile className="w-6 h-6 text-icici-orange" />
                Team Mood Score
              </h3>
              <p className="text-text-gray text-sm">Based on recognition sentiment analysis</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2 animate-float">{moodData.overall}</div>
              <div className="flex items-center gap-1 text-success text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+8% this week</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moodData.emotions.map((emotion) => (
              <div key={emotion.label} className="text-center">
                <div className="text-5xl mb-2 animate-float" style={{ animationDelay: `${Math.random() * 0.5}s` }}>
                  {emotion.emoji}
                </div>
                <div className="mb-2">{emotion.label}</div>
                <div className="text-2xl text-icici-orange mb-1">{emotion.percentage}%</div>
                <div className="text-xs text-text-gray">{emotion.count} mentions</div>
                <div className="mt-2">
                  <div className="h-2 bg-gray-200 dark:bg-dark-bg rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${emotion.color} transition-all duration-1000`}
                      style={{ width: `${emotion.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trend */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-icici-orange" />
            Weekly Mood Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-4 h-48">
            {weeklyTrends.map((day, index) => (
              <div key={day.day} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-icici-orange to-icici-orange-light rounded-t-lg transition-all duration-1000 hover:scale-105 cursor-pointer relative group"
                  style={{ 
                    height: `${day.mood}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-icici-orange text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                    {day.mood}%
                  </div>
                </div>
                <div className="mt-2 text-sm text-text-gray">{day.day}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Department Moods */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-icici-orange" />
            Department Mood Scores
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {moodData.departments.map((dept) => (
            <div key={dept.name} className="p-4 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-xl hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span>{dept.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-icici-orange">{dept.mood}%</span>
                  <span className="text-success text-sm">{dept.change}</span>
                </div>
              </div>
              <Progress value={dept.mood} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="dark:bg-dark-card bg-gradient-to-r from-icici-blue/10 to-purple-500/10 border-2 border-icici-blue/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-icici-blue to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 animate-float">
              <Brain className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 flex items-center gap-2">
                AI Mood Insights
                <Zap className="w-5 h-5 text-warning" />
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span>Team morale is at an all-time high! Recognition activity increased by 34% this month.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-icici-orange flex-shrink-0 mt-0.5" />
                  <span>Thursday is your team's happiest day - consider scheduling important announcements then!</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-icici-blue flex-shrink-0 mt-0.5" />
                  <span>Cross-department recognition increased by 45% - great job fostering collaboration!</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
