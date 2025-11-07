import { useState } from 'react';
import { Calendar, TrendingUp, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function RecognitionHeatmap() {
  const [selectedDay, setSelectedDay] = useState<any>(null);

  // Generate heatmap data for the last 12 weeks
  const generateHeatmapData = () => {
    const weeks = [];
    const today = new Date();
    
    for (let week = 11; week >= 0; week--) {
      const days = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(date.getDate() - (week * 7 + (6 - day)));
        const count = Math.floor(Math.random() * 15);
        days.push({
          date: date.toISOString().split('T')[0],
          count,
          day: date.toLocaleDateString('en', { weekday: 'short' }),
          intensity: count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4,
        });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const heatmapData = generateHeatmapData();
  const totalRecognitions = heatmapData.flat().reduce((sum, day) => sum + day.count, 0);
  const avgPerDay = (totalRecognitions / (12 * 7)).toFixed(1);

  const getIntensityColor = (intensity: number) => {
    switch (intensity) {
      case 0: return 'bg-gray-100 dark:bg-dark-bg';
      case 1: return 'bg-icici-orange/20';
      case 2: return 'bg-icici-orange/50';
      case 3: return 'bg-icici-orange/75';
      case 4: return 'bg-icici-orange';
      default: return 'bg-gray-100 dark:bg-dark-bg';
    }
  };

  const peakDays = [
    { day: 'Thursday', count: 47, time: '2:00 PM - 4:00 PM' },
    { day: 'Friday', count: 42, time: '10:00 AM - 12:00 PM' },
    { day: 'Monday', count: 38, time: '3:00 PM - 5:00 PM' },
  ];

  const insights = [
    { icon: '🔥', title: 'Current Streak', value: '12 days', description: 'Keep it going!' },
    { icon: '🎯', title: 'Best Week', value: '45 recognitions', description: 'Week of Oct 15' },
    { icon: '⚡', title: 'Most Active Hour', value: '2:00 PM', description: 'Peak recognition time' },
    { icon: '🌟', title: 'Recognition Rate', value: '78%', description: 'Above team average' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className="dark:bg-dark-card border-2 border-icici-orange/20 hover:shadow-xl transition-all">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2">{insight.icon}</div>
              <div className="text-xs text-text-gray mb-1">{insight.title}</div>
              <div className="text-2xl text-icici-orange mb-1">{insight.value}</div>
              <div className="text-xs text-text-gray">{insight.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="dark:bg-dark-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-icici-orange" />
              Your Recognition Activity (Last 12 Weeks)
            </CardTitle>
            <div className="text-sm text-text-gray">
              <span className="text-icici-orange text-xl">{totalRecognitions}</span> total recognitions
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto pb-4">
            <div className="inline-flex flex-col gap-1 min-w-max">
              <div className="flex gap-1 ml-12">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                  <div key={month} className="text-xs text-text-gray w-20 text-center">
                    {month}
                  </div>
                ))}
              </div>
              
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayLabel, dayIndex) => (
                <div key={dayLabel} className="flex items-center gap-1">
                  <div className="w-10 text-xs text-text-gray text-right">{dayLabel}</div>
                  <div className="flex gap-1">
                    {heatmapData.map((week, weekIndex) => {
                      const dayData = week[dayIndex];
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`w-4 h-4 rounded ${getIntensityColor(dayData.intensity)} cursor-pointer hover:ring-2 hover:ring-icici-orange transition-all transform hover:scale-125`}
                          onMouseEnter={() => setSelectedDay(dayData)}
                          onMouseLeave={() => setSelectedDay(null)}
                          title={`${dayData.date}: ${dayData.count} recognitions`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 justify-end">
              <span className="text-xs text-text-gray">Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((intensity) => (
                  <div
                    key={intensity}
                    className={`w-4 h-4 rounded ${getIntensityColor(intensity)}`}
                  />
                ))}
              </div>
              <span className="text-xs text-text-gray">More</span>
            </div>
          </div>

          {selectedDay && (
            <div className="mt-4 p-4 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-xl border-2 border-icici-orange/20 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-text-gray">
                    {new Date(selectedDay.date).toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="text-2xl text-icici-orange mt-1">
                    {selectedDay.count} {selectedDay.count === 1 ? 'recognition' : 'recognitions'}
                  </div>
                </div>
                <div className="text-5xl">{selectedDay.count === 0 ? '😴' : selectedDay.count < 5 ? '😊' : selectedDay.count < 10 ? '🎉' : '🔥'}</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="dark:bg-dark-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-icici-orange" />
            Peak Recognition Times
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {peakDays.map((peak, index) => (
              <div 
                key={peak.day} 
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-xl hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                  index === 0 ? 'bg-gradient-to-br from-warning to-orange-500' :
                  index === 1 ? 'bg-gradient-to-br from-icici-orange to-orange-400' :
                  'bg-gradient-to-br from-icici-blue to-blue-500'
                }`}>
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span>{peak.day}</span>
                    <Badge variant="outline" className="text-xs">{peak.time}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 dark:bg-dark-bg rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-icici-orange to-icici-orange-light h-full rounded-full transition-all duration-1000"
                        style={{ width: `${(peak.count / 50) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-icici-orange">{peak.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-dark-card bg-gradient-to-r from-success/10 to-emerald-500/10 border-2 border-success/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-success to-emerald-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 text-2xl">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 flex items-center gap-2">
                Heatmap Insights
                <Zap className="w-5 h-5 text-warning" />
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>You're most active on <strong>Thursdays at 2 PM</strong> - this is your peak recognition time!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Your <strong>12-day streak</strong> is impressive! You're building a consistent recognition habit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Average <strong>{avgPerDay} recognitions/day</strong> - you're 56% above the team average!</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
