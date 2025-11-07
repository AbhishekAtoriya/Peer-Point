import { useState } from 'react';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { RecognitionWall } from './components/RecognitionWall';
import { GiveKudos } from './components/GiveKudos';
import { Leaderboard } from './components/Leaderboard';
import { RedeemPoints } from './components/RedeemPoints';
import { Profile } from './components/Profile';
import { Analytics } from './components/Analytics';
import { MobileNav } from './components/MobileNav';
import { CelebrationMode } from './components/CelebrationMode';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [celebration, setCelebration] = useState({ show: false, message: '' });

  const currentUser = {
    name: 'Rajesh Menon',
    avatar: 'RM',
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCelebration = (message: string) => {
    setCelebration({ show: true, message });
  };

  const handleCelebrationComplete = () => {
    setCelebration({ show: false, message: '' });
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-dark-bg dark:to-dark-bg-light transition-colors">
        {/* Celebration Mode */}
        <CelebrationMode
          show={celebration.show}
          message={celebration.message}
          onComplete={handleCelebrationComplete}
        />

        {/* Header */}
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          currentUser={currentUser}
        />

        {/* Layout */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar
            currentScreen={currentScreen}
            onNavigate={setCurrentScreen}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Content */}
          <main className="flex-1 min-h-[calc(100vh-73px)] pb-20 lg:pb-6 overflow-auto">
            {currentScreen === 'dashboard' && (
              <Dashboard onNavigate={setCurrentScreen} onCelebration={handleCelebration} />
            )}
            {currentScreen === 'wall' && (
              <RecognitionWall onCelebration={handleCelebration} />
            )}
            {currentScreen === 'kudos' && (
              <GiveKudos onCelebration={handleCelebration} />
            )}
            {currentScreen === 'leaderboard' && (
              <Leaderboard onCelebration={handleCelebration} />
            )}
            {currentScreen === 'analytics' && (
              <Analytics onNavigate={setCurrentScreen} />
            )}
            {currentScreen === 'redeem' && (
              <RedeemPoints onCelebration={handleCelebration} />
            )}
            {currentScreen === 'profile' && (
              <Profile currentUser={currentUser} />
            )}
            {currentScreen === 'support' && (
              <div className="p-6">
                <div className="icici-gradient rounded-2xl p-8 text-white relative overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                  <div className="relative z-10">
                    <h2 className="text-white mb-2">Support & Help Center 🤝</h2>
                    <p className="text-white/90">We're here to help you succeed</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-gradient-to-br from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card rounded-2xl border-2 border-icici-orange/20 hover:shadow-2xl transition-all">
                    <div className="text-5xl mb-4">📧</div>
                    <h3 className="mb-2">Email Support</h3>
                    <p className="text-text-gray mb-4">Get help via email</p>
                    <p className="text-icici-orange">peerpoints@icicibank.com</p>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-icici-blue/10 to-white dark:from-dark-bg dark:to-dark-card rounded-2xl border-2 border-icici-blue/20 hover:shadow-2xl transition-all">
                    <div className="text-5xl mb-4">📞</div>
                    <h3 className="mb-2">Helpline</h3>
                    <p className="text-text-gray mb-4">Call us for immediate assistance</p>
                    <p className="text-icici-blue">1800-XXX-XXXX (9 AM - 6 PM)</p>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-success/10 to-white dark:from-dark-bg dark:to-dark-card rounded-2xl border-2 border-success/20 hover:shadow-2xl transition-all">
                    <div className="text-5xl mb-4">💬</div>
                    <h3 className="mb-2">Live Chat</h3>
                    <p className="text-text-gray mb-4">Chat with our support team</p>
                    <p className="text-success">Available 24/7</p>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-warning/10 to-white dark:from-dark-bg dark:to-dark-card rounded-2xl border-2 border-warning/20 hover:shadow-2xl transition-all">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="mb-2">Knowledge Base</h3>
                    <p className="text-text-gray mb-4">Browse our help articles</p>
                    <p className="text-warning">100+ Articles</p>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* Mobile Navigation */}
        <MobileNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </div>
    </div>
  );
}