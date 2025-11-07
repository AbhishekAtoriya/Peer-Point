import { Bell, Moon, Sun, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar?: () => void;
  currentUser: { name: string; avatar: string };
}

export function Header({ darkMode, toggleDarkMode, toggleSidebar, currentUser }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {toggleSidebar && (
            <Button variant="ghost" size="sm" onClick={toggleSidebar} className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          )}
          <div>
            <h1 className="text-icici-orange">ICICI Bank</h1>
            <p className="text-text-gray text-sm">Truth, Trust, Transparency.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 bg-error text-white text-xs px-1.5 py-0.5 min-w-[20px] h-5">
              3
            </Badge>
          </Button>

          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          {/* User Avatar */}
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback className="bg-icici-orange text-white">
                {currentUser.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm">{currentUser.name}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
