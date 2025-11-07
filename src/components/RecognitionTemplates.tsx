import { Sparkles, Zap, Heart, Star, Trophy, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface RecognitionTemplatesProps {
  onSelectTemplate: (template: any) => void;
}

export function RecognitionTemplates({ onSelectTemplate }: RecognitionTemplatesProps) {
  const templates = [
    {
      id: 1,
      title: 'Outstanding Customer Service',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      message: 'Thank you for your exceptional customer service! Your dedication to helping our customers and going the extra mile makes a real difference. You truly embody our customer-first values.',
      tags: ['#CustomerFirst', '#Excellence'],
      points: 8,
      category: 'Customer Excellence',
    },
    {
      id: 2,
      title: 'Innovation & Problem Solving',
      icon: Zap,
      color: 'from-icici-orange to-warning',
      message: 'Your innovative solution to this challenge was brilliant! Thanks for thinking creatively and finding a way forward when we were stuck. Your problem-solving skills are truly valuable.',
      tags: ['#Innovation', '#ProblemSolver'],
      points: 9,
      category: 'Innovation',
    },
    {
      id: 3,
      title: 'Team Collaboration',
      icon: Star,
      color: 'from-purple-500 to-indigo-500',
      message: 'Your collaborative spirit makes working together a pleasure! Thank you for being such a supportive team member and always willing to help others succeed.',
      tags: ['#TeamPlayer', '#Collaboration'],
      points: 7,
      category: 'Teamwork',
    },
    {
      id: 4,
      title: 'Leadership Excellence',
      icon: Trophy,
      color: 'from-warning to-amber-600',
      message: 'Your leadership on this project was outstanding! You motivated the team, made tough decisions, and guided us to success. Thank you for being an inspiring leader.',
      tags: ['#Leadership', '#Inspiration'],
      points: 10,
      category: 'Leadership',
    },
    {
      id: 5,
      title: 'Mentorship & Support',
      icon: Sparkles,
      color: 'from-success to-emerald-600',
      message: 'Thank you for being an amazing mentor! Your guidance, patience, and willingness to share knowledge have helped me grow professionally. I truly appreciate your support.',
      tags: ['#Mentor', '#Growth'],
      points: 8,
      category: 'Mentorship',
    },
    {
      id: 6,
      title: 'Meeting Deadlines',
      icon: Target,
      color: 'from-icici-blue to-blue-600',
      message: 'Impressive work delivering this project on time! Your commitment to meeting deadlines and maintaining quality is exemplary. Thank you for your dedication and hard work.',
      tags: ['#Dedication', '#Excellence'],
      points: 7,
      category: 'Commitment',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-icici-orange" />
        <h3>Quick Recognition Templates</h3>
      </div>
      <p className="text-text-gray text-sm mb-6">
        Choose a template to quickly recognize your colleagues with pre-written messages
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          
          return (
            <Card 
              key={template.id} 
              className="dark:bg-dark-card hover:shadow-2xl transition-all cursor-pointer group overflow-hidden"
              onClick={() => onSelectTemplate(template)}
            >
              <div className={`h-2 bg-gradient-to-r ${template.color}`}></div>
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm mb-1">{template.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-text-gray text-xs mb-3 line-clamp-3">
                  {template.message}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {template.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-icici-orange/10 text-icici-orange text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-icici-orange text-sm">⭐ {template.points} points</span>
                  <Button size="sm" className="bg-icici-orange hover:bg-icici-orange-light text-white">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
