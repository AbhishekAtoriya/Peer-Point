import { LayoutDashboard, Award, Gift, Trophy, User, HelpCircle, MessageSquare, X, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ currentScreen, onNavigate, isOpen = true, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'wall', label: 'Recognition Wall', icon: MessageSquare },
    { id: 'kudos', label: 'Give Kudos', icon: Gift },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'redeem', label: 'Redeem Points', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-gray-700 p-6 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <h2 className="text-icici-orange">Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose?.();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-icici-orange to-icici-orange-light text-white shadow-lg'
                    : 'text-text-gray hover:bg-icici-orange-pale dark:hover:bg-dark-bg'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}