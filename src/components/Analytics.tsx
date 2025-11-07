import { TrendingUp, Users, Award, Target, BarChart3, Calendar, Brain, Map, Gamepad2, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { TeamMoodTracker } from './TeamMoodTracker';
import { RecognitionHeatmap } from './RecognitionHeatmap';
import { SmartSuggestions } from './SmartSuggestions';
import { Gamification } from './Gamification';

interface AnalyticsProps {
  onNavigate?: (screen: string) => void;
}

export function Analytics({ onNavigate }: AnalyticsProps) {
  const monthlyData = [
    { month: 'Jan', sent: 45, received: 52 },
    { month: 'Feb', sent: 52, received: 48 },
    { month: 'Mar', sent: 61, received: 58 },
    { month: 'Apr', sent: 58, received: 65 },
    { month: 'May', sent: 67, received: 71 },
    { month: 'Jun', sent: 73, received: 68 },
  ];

  const categoryData = [
    { name: 'Team Player', value: 30, color: '#F37021' },
    { name: 'Innovation', value: 25, color: '#00529C' },
    { name: 'Leadership', value: 20, color: '#4CAF50' },
    { name: 'Customer First', value: 15, color: '#FF9800' },
    { name: 'Others', value: 10, color: '#9E9E9E' },
  ];

  const departmentData = [
    { dept: 'Customer Service', count: 145 },
    { dept: 'Operations', count: 132 },
    { dept: 'Sales', count: 118 },
    { dept: 'IT', count: 95 },
    { dept: 'HR', count: 87 },
  ];

  const impactMetrics = [
    { label: 'Team Engagement', value: 94, change: '+12%' },
    { label: 'Recognition Rate', value: 87, change: '+8%' },
    { label: 'Participation', value: 91, change: '+15%' },
    { label: 'Employee Satisfaction', value: 89, change: '+10%' },
  ];

  const handleRecognize = (employee: string) => {
    if (onNavigate) {
      onNavigate('kudos');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="icici-gradient rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
        <div className="relative z-10">
          <h2 className="text-white flex items-center gap-2">
            <BarChart3 className="w-8 h-8" />
            Analytics & Insights Hub
          </h2>
          <p className="text-white/90 mt-1">AI-powered insights, trends, and gamification</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 max-w-4xl">
          <TabsTrigger value="overview">
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="heatmap">
            <Map className="w-4 h-4 mr-2" />
            Heatmap
          </TabsTrigger>
          <TabsTrigger value="mood">
            <Smile className="w-4 h-4 mr-2" />
            Team Mood
          </TabsTrigger>
          <TabsTrigger value="ai">
            <Brain className="w-4 h-4 mr-2" />
            AI Insights
          </TabsTrigger>
          <TabsTrigger value="gamification">
            <Gamepad2 className="w-4 h-4 mr-2" />
            Achievements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="dark:bg-dark-card border-l-4 border-icici-orange hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-text-gray text-sm">{metric.label}</p>
                    <span className="text-success text-sm">{metric.change}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl text-icici-orange">{metric.value}%</span>
                    <TrendingUp className="w-5 h-5 text-success mb-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Trends */}
            <Card className="dark:bg-dark-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-icici-orange" />
                  Recognition Trends (Last 6 Months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" stroke="#6B6B6B" />
                    <YAxis stroke="#6B6B6B" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sent" stroke="#F37021" strokeWidth={3} name="Sent" />
                    <Line type="monotone" dataKey="received" stroke="#00529C" strokeWidth={3} name="Received" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Department Performance */}
            <Card className="dark:bg-dark-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-icici-orange" />
                  Department Recognition Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={departmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="dept" stroke="#6B6B6B" angle={-15} textAnchor="end" height={80} />
                    <YAxis stroke="#6B6B6B" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#F37021" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recognition Categories */}
            <Card className="dark:bg-dark-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-icici-orange" />
                  Recognition by Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="dark:bg-dark-card icici-gradient-subtle border-2 border-icici-orange/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-icici-orange" />
                  Your Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-warning to-orange-500 rounded-full flex items-center justify-center text-2xl animate-float">
                      🏆
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1">Century Club</h3>
                      <p className="text-text-gray text-sm">100 recognitions sent</p>
                      <div className="w-full bg-gray-200 dark:bg-dark-bg rounded-full h-2 mt-2">
                        <div className="h-full bg-gradient-to-r from-icici-orange to-warning rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-text-gray mt-1">85/100 - Almost there!</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-success to-green-600 rounded-full flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1">Super Recognizer</h3>
                      <p className="text-text-gray text-sm">50 recognitions in a month</p>
                      <div className="w-full bg-gray-200 dark:bg-dark-bg rounded-full h-2 mt-2">
                        <div className="h-full bg-gradient-to-r from-success to-green-600 rounded-full" style={{ width: '34%' }}></div>
                      </div>
                      <p className="text-xs text-text-gray mt-1">17/50 this month</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-icici-blue to-blue-600 rounded-full flex items-center justify-center text-2xl">
                      💎
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1">Recognition Champion</h3>
                      <p className="text-text-gray text-sm">Top 10 in leaderboard</p>
                      <div className="w-full bg-gray-200 dark:bg-dark-bg rounded-full h-2 mt-2">
                        <div className="h-full bg-gradient-to-r from-icici-blue to-blue-600 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-success mt-1">✓ Completed!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Insights Banner */}
          <Card className="dark:bg-dark-card bg-gradient-to-r from-icici-orange/10 to-icici-blue/10 border-2 border-icici-orange/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-icici-orange text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">AI-Powered Insights</h3>
                  <p className="text-text-gray mb-3">
                    Based on your recognition patterns, you're most active on Thursdays and prefer recognizing teamwork over individual achievements. 
                    Your recognitions have a 95% positive impact rating from recipients!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-success/20 text-success text-sm rounded-full">High Engagement</span>
                    <span className="px-3 py-1 bg-icici-orange/20 text-icici-orange text-sm rounded-full">Team Builder</span>
                    <span className="px-3 py-1 bg-icici-blue/20 text-icici-blue text-sm rounded-full">Consistent Recognizer</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heatmap" className="mt-6">
          <RecognitionHeatmap />
        </TabsContent>

        <TabsContent value="mood" className="mt-6">
          <TeamMoodTracker />
        </TabsContent>

        <TabsContent value="ai" className="mt-6">
          <SmartSuggestions onRecognize={handleRecognize} />
        </TabsContent>

        <TabsContent value="gamification" className="mt-6">
          <Gamification />
        </TabsContent>
      </Tabs>
    </div>
  );
}