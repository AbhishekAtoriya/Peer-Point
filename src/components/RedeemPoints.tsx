import { useState } from 'react';
import { Award, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface RedeemPointsProps {
  onCelebration: (message: string) => void;
}

export function RedeemPoints({ onCelebration }: RedeemPointsProps) {
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const rewards = [
    {
      id: 1,
      title: 'Advanced Leadership Training',
      description: 'Exclusive 2-day workshop on strategic leadership and team management',
      points: 500,
      category: 'Training',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MjM3ODg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: 2,
      title: 'ICICI Premium Merchandise',
      description: 'Branded laptop bag, premium notebook set, and wireless earbuds',
      points: 300,
      category: 'Merchandise',
      image: 'https://images.unsplash.com/photo-1696581083137-37a57d485f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZXJjaGFuZGlzZSUyMGdpZnR8ZW58MXx8fHwxNzYyNDA4NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: 3,
      title: 'CXO Lunch Experience',
      description: 'Exclusive lunch meeting with CXO to discuss your ideas and career growth',
      points: 750,
      category: 'Experience',
      image: 'https://images.unsplash.com/photo-1719046057021-3f27a15bffec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGx1bmNoJTIwbWVldGluZ3xlbnwxfHx8fDE3NjI0MDg1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: 4,
      title: 'Intranet Feature Spotlight',
      description: 'Get featured on the company intranet homepage for a week',
      points: 200,
      category: 'Recognition',
      image: 'https://images.unsplash.com/photo-1762345127396-ac4a970436c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waHklMjBhd2FyZCUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2MjQwODU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: 5,
      title: 'Professional Development Course',
      description: 'Access to premium online courses on Coursera or LinkedIn Learning',
      points: 400,
      category: 'Training',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MjM3ODg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
    {
      id: 6,
      title: 'Wellness Package',
      description: 'Gym membership for 3 months or wellness retreat voucher',
      points: 350,
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1696581083137-37a57d485f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZXJjaGFuZGlzZSUyMGdpZnR8ZW58MXx8fHwxNzYyNDA4NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      available: true,
    },
  ];

  const userPoints = 485;

  const handleRedeem = (reward: any) => {
    setSelectedReward(reward);
    setShowConfirmation(true);
  };

  const confirmRedeem = () => {
    setShowConfirmation(false);
    onCelebration(`Successfully redeemed: ${selectedReward?.title}! 🎉`);
    toast.success('Reward redeemed successfully! Check your email for details.');
    setSelectedReward(null);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Training':
        return 'bg-icici-blue text-white';
      case 'Merchandise':
        return 'bg-icici-orange text-white';
      case 'Experience':
        return 'bg-warning text-white';
      case 'Recognition':
        return 'bg-success text-white';
      case 'Wellness':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2>Redeem Points 🎁</h2>
          <p className="text-text-gray mt-1">Exchange your recognition points for amazing rewards</p>
        </div>
        
        <Card className="dark:bg-dark-card border-2 border-icici-orange/30 w-fit">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-icici-orange" />
              <div>
                <p className="text-text-gray text-sm">Your Balance</p>
                <p className="text-2xl text-icici-orange">{userPoints}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => {
          const canAfford = userPoints >= reward.points;
          
          return (
            <Card 
              key={reward.id} 
              className={`dark:bg-dark-card overflow-hidden transition-all hover:shadow-xl ${
                !canAfford ? 'opacity-60' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={reward.image}
                  alt={reward.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-3 right-3 ${getCategoryColor(reward.category)}`}>
                  {reward.category}
                </Badge>
              </div>
              
              <CardContent className="p-5">
                <h3 className="mb-2">{reward.title}</h3>
                <p className="text-text-gray text-sm mb-4 line-clamp-2">
                  {reward.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Award className="w-5 h-5 text-icici-orange" />
                    <span className="text-icici-orange">{reward.points}</span>
                    <span className="text-text-gray text-sm">points</span>
                  </div>
                  
                  <Button
                    size="sm"
                    onClick={() => handleRedeem(reward)}
                    disabled={!canAfford}
                    className={canAfford 
                      ? 'bg-icici-orange hover:bg-icici-orange-light text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                  >
                    {canAfford ? 'Redeem' : 'Insufficient Points'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="dark:bg-dark-card">
          <DialogHeader>
            <DialogTitle>Confirm Redemption</DialogTitle>
            <DialogDescription>
              Are you sure you want to redeem this reward?
            </DialogDescription>
          </DialogHeader>
          
          {selectedReward && (
            <div className="space-y-4">
              <div className="p-4 bg-icici-orange-pale dark:bg-dark-bg rounded-xl">
                <h3 className="mb-1">{selectedReward.title}</h3>
                <p className="text-text-gray text-sm mb-3">{selectedReward.description}</p>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-icici-orange" />
                  <span className="text-icici-orange">{selectedReward.points} points</span>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-icici-blue/30">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-icici-blue flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-icici-blue mb-1">After redemption:</p>
                    <p className="text-text-gray">
                      Your new balance will be: <strong>{userPoints - selectedReward.points} points</strong>
                    </p>
                    <p className="text-text-gray mt-2">
                      You'll receive redemption details via email within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmRedeem}
                  className="flex-1 bg-icici-orange hover:bg-icici-orange-light text-white"
                >
                  Confirm Redemption
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
