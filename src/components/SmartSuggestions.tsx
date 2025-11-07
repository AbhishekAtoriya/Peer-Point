import { Brain, Users, Sparkles, TrendingUp, Target, Award, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SmartSuggestionsProps {
  onRecognize: (employee: string) => void;
}

export function SmartSuggestions({ onRecognize }: SmartSuggestionsProps) {
  const aiSuggestions = [
    {
      name: 'Priya Sharma',
      reason: 'Completed 3 major projects this week',
      confidence: 95,
      lastRecognized: '14 days ago',
      department: 'Customer Service',
      suggestedPoints: 9,
      suggestedMessage: 'Amazing work on completing three major projects this week! Your dedication and efficiency are truly remarkable.',
      tags: ['#Excellence', '#Dedication'],
      priority: 'high',
      insights: ['High impact work', 'Long time since last recognition'],
    },
    {
      name: 'Rahul Kumar',
      reason: 'Helped 5 team members this week',
      confidence: 88,
      lastRecognized: '7 days ago',
      department: 'IT',
      suggestedPoints: 7,
      suggestedMessage: 'Thank you for being such a supportive team member! Helping 5 colleagues this week shows your amazing collaborative spirit.',
      tags: ['#TeamPlayer', '#Helpful'],
      priority: 'medium',
      insights: ['Strong collaboration', 'Peer favorite'],
    },
    {
      name: 'Anjali Verma',
      reason: 'Birthday today! 🎂',
      confidence: 100,
      lastRecognized: '21 days ago',
      department: 'Sales',
      suggestedPoints: 5,
      suggestedMessage: 'Happy Birthday! 🎉 Wishing you a wonderful day filled with joy and celebration. Thank you for being an amazing colleague!',
      tags: ['#Birthday', '#Celebration'],
      priority: 'high',
      insights: ['Special occasion', 'Overdue recognition'],
    },
    {
      name: 'Amit Patel',
      reason: 'Achieved 120% of sales target',
      confidence: 92,
      lastRecognized: '10 days ago',
      department: 'Sales',
      suggestedPoints: 10,
      suggestedMessage: 'Incredible achievement reaching 120% of your sales target! Your hard work and dedication are paying off brilliantly.',
      tags: ['#Excellence', '#Achievement'],
      priority: 'high',
      insights: ['Outstanding performance', 'Goal exceeded'],
    },
  ];

  const collaborationSuggestions = [
    {
      employee: 'Vikram Singh',
      reason: 'You both worked on Project Phoenix',
      connectionStrength: 'Strong',
      sharedProjects: 3,
    },
    {
      employee: 'Sneha Reddy',
      reason: 'Same department, never recognized',
      connectionStrength: 'Medium',
      sharedProjects: 0,
    },
  ];

  const trendingTopics = [
    { topic: '#Innovation', count: 45, trend: '+23%' },
    { topic: '#CustomerFirst', count: 38, trend: '+15%' },
    { topic: '#TeamPlayer', count: 32, trend: '+8%' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'from-error to-red-600';
      case 'medium': return 'from-warning to-orange-500';
      case 'low': return 'from-success to-emerald-600';
      default: return 'from-icici-orange to-icici-orange-light';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-error/20 text-error';
      case 'medium': return 'bg-warning/20 text-warning';
      case 'low': return 'bg-success/20 text-success';
      default: return 'bg-icici-orange/20 text-icici-orange';
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Suggestion Header */}
      <Card className="dark:bg-dark-card border-2 border-icici-blue/20 bg-gradient-to-r from-icici-blue/10 to-purple-500/10">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-icici-blue to-purple-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 animate-float">
              <Brain className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 flex items-center gap-2">
                AI-Powered Recognition Suggestions
                <Badge className="bg-success text-white">NEW</Badge>
              </h3>
              <p className="text-text-gray text-sm mb-3">
                Our AI analyzes team activity, project completion, peer interactions, and special occasions to suggest meaningful recognitions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  Real-time analysis
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Target className="w-3 h-3 mr-1" />
                  95% accuracy
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  Personalized messages
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <div>
        <h3 className="mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-icici-orange" />
          Who You Should Recognize Now
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {aiSuggestions.map((suggestion) => (
            <Card 
              key={suggestion.name} 
              className="dark:bg-dark-card border-2 border-l-4 hover:shadow-2xl transition-all group"
              style={{ borderLeftColor: suggestion.priority === 'high' ? '#F44336' : suggestion.priority === 'medium' ? '#FF9800' : '#4CAF50' }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-icici-orange to-icici-orange-light text-white rounded-full flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {suggestion.name.split(' ')[0][0]}{suggestion.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{suggestion.name}</span>
                        <Badge className={getPriorityBadge(suggestion.priority)} variant="outline">
                          {suggestion.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-text-gray">{suggestion.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-icici-orange">{suggestion.confidence}%</div>
                    <p className="text-xs text-text-gray">confidence</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-success to-emerald-600 rounded-lg flex items-center justify-center text-white">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{suggestion.reason}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-gray">
                    <Clock className="w-3 h-3" />
                    <span>Last recognized: {suggestion.lastRecognized}</span>
                  </div>
                </div>

                <div className="p-3 bg-icici-orange-pale dark:bg-dark-bg rounded-lg mb-4">
                  <p className="text-sm text-text-gray italic">"{suggestion.suggestedMessage}"</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestion.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-icici-orange/20 text-icici-orange text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-warning/20 text-warning text-xs rounded-full">
                    ⭐ {suggestion.suggestedPoints} points
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-text-gray mb-2">AI Insights:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestion.insights.map((insight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {insight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-icici-orange to-icici-orange-light hover:from-icici-orange-light hover:to-icici-orange text-white"
                  onClick={() => onRecognize(suggestion.name)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Recognize Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Collaboration Suggestions */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-icici-orange" />
            Build New Connections
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-gray text-sm mb-4">
            Recognize colleagues you haven't connected with recently to strengthen team bonds
          </p>
          <div className="space-y-3">
            {collaborationSuggestions.map((suggestion) => (
              <div 
                key={suggestion.employee} 
                className="flex items-center justify-between p-4 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-icici-blue to-blue-600 text-white rounded-full flex items-center justify-center">
                    {suggestion.employee.split(' ')[0][0]}{suggestion.employee.split(' ')[1][0]}
                  </div>
                  <div>
                    <div>{suggestion.employee}</div>
                    <p className="text-xs text-text-gray">{suggestion.reason}</p>
                    {suggestion.sharedProjects > 0 && (
                      <p className="text-xs text-icici-orange mt-1">{suggestion.sharedProjects} shared projects</p>
                    )}
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-icici-orange text-icici-orange hover:bg-icici-orange hover:text-white"
                  onClick={() => onRecognize(suggestion.employee)}
                >
                  Recognize
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card className="dark:bg-dark-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-icici-orange" />
            Trending Recognition Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-gray text-sm mb-4">
            Popular topics this week - use these to stay aligned with team focus areas
          </p>
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <div 
                key={topic.topic} 
                className="flex items-center gap-4 p-3 bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-lg"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                  index === 0 ? 'bg-gradient-to-br from-warning to-orange-500' :
                  index === 1 ? 'bg-gradient-to-br from-icici-orange to-orange-400' :
                  'bg-gradient-to-br from-icici-blue to-blue-500'
                }`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span>{topic.topic}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-success text-sm">{topic.trend}</span>
                      <Badge variant="outline">{topic.count} uses</Badge>
                    </div>
                  </div>
                  <div className="bg-gray-200 dark:bg-dark-bg rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-icici-orange to-icici-orange-light h-full rounded-full transition-all duration-1000"
                      style={{ width: `${(topic.count / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
