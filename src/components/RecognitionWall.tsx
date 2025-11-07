import { useState } from 'react';
import { Heart, ThumbsUp, PartyPopper, MessageSquare, Search, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface RecognitionWallProps {
  onCelebration: (message: string) => void;
}

export function RecognitionWall({ onCelebration }: RecognitionWallProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const recognitions = [
    {
      id: 1,
      sender: 'Amit Patel',
      receiver: 'Priya Sharma',
      message: 'Priya went above and beyond to help our customer resolve a complex issue. Her dedication to customer satisfaction is truly inspiring!',
      tags: ['#CustomerFirst', '#TeamPlayer'],
      points: 10,
      department: 'Customer Service',
      reactions: { likes: 24, hearts: 18, celebrations: 12 },
      comments: 8,
      time: '2 hours ago',
      quote: '"Excellence is not a skill, it\'s an attitude." - Ralph Marston'
    },
    {
      id: 2,
      sender: 'Sneha Reddy',
      receiver: 'Rahul Kumar',
      message: 'Rahul\'s innovative approach to streamlining our onboarding process has saved the team countless hours. Thank you for thinking outside the box!',
      tags: ['#Innovation', '#Leadership'],
      points: 8,
      department: 'Operations',
      reactions: { likes: 31, hearts: 22, celebrations: 15 },
      comments: 5,
      time: '5 hours ago',
      quote: '"Innovation distinguishes between a leader and a follower." - Steve Jobs'
    },
    {
      id: 3,
      sender: 'Vikram Singh',
      receiver: 'Anjali Verma',
      message: 'Amazing teamwork on the Q3 presentation! Anjali coordinated everything perfectly and made sure everyone was aligned. Great job!',
      tags: ['#TeamPlayer', '#Communication'],
      points: 7,
      department: 'Marketing',
      reactions: { likes: 19, hearts: 14, celebrations: 9 },
      comments: 3,
      time: '1 day ago',
      quote: '"Alone we can do so little; together we can do so much." - Helen Keller'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Departments' },
    { id: 'customer-service', label: 'Customer Service' },
    { id: 'operations', label: 'Operations' },
    { id: 'marketing', label: 'Marketing' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2>Recognition Wall 🎉</h2>
        <p className="text-text-gray mt-1">Celebrate the amazing work of your colleagues</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
          <Input
            placeholder="Search recognitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className={selectedFilter === filter.id ? 'bg-icici-orange hover:bg-icici-orange-light' : ''}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* AI Helper Banner */}
      <Card className="dark:bg-dark-card border-2 border-dashed border-icici-blue/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-icici-blue" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="text-icici-blue">AI Message Helper:</span> Need help phrasing your appreciation? Our AI can suggest the perfect words!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recognition Feed */}
      <div className="space-y-4">
        {recognitions.map((recognition) => (
          <Card key={recognition.id} className="dark:bg-dark-card hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-icici-orange to-icici-orange-light text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {recognition.sender.split(' ')[0][0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span>{recognition.sender}</span>
                    <span className="text-text-gray">→</span>
                    <span className="text-icici-orange">{recognition.receiver}</span>
                    <Badge variant="outline" className="ml-auto border-icici-orange text-icici-orange">
                      ⭐ {recognition.points} points
                    </Badge>
                  </div>
                  <p className="text-text-gray text-sm">{recognition.department} • {recognition.time}</p>
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <p className="text-text-primary mb-3">{recognition.message}</p>
                <div className="flex gap-2 flex-wrap mb-3">
                  {recognition.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-icici-orange/10 text-icici-orange text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* AI Generated Quote */}
                <div className="p-3 bg-icici-orange-pale dark:bg-dark-bg rounded-xl border-l-4 border-icici-orange">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-icici-orange flex-shrink-0 mt-0.5" />
                    <p className="text-sm italic text-text-gray">{recognition.quote}</p>
                  </div>
                </div>
              </div>

              {/* Reactions */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center gap-2 text-text-gray hover:text-icici-blue transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{recognition.reactions.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-text-gray hover:text-error transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{recognition.reactions.hearts}</span>
                </button>
                <button 
                  className="flex items-center gap-2 text-text-gray hover:text-warning transition-colors"
                  onClick={() => onCelebration('Celebration! 🎉')}
                >
                  <PartyPopper className="w-4 h-4" />
                  <span className="text-sm">{recognition.reactions.celebrations}</span>
                </button>
                <button className="flex items-center gap-2 text-text-gray hover:text-icici-orange transition-colors ml-auto">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">{recognition.comments} comments</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
