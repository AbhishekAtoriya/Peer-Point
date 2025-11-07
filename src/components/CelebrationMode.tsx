import { useEffect, useState } from 'react';

interface CelebrationModeProps {
  show: boolean;
  message?: string;
  onComplete?: () => void;
}

export function CelebrationMode({ show, message, onComplete }: CelebrationModeProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    if (show) {
      // Create 50 confetti particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1,
      }));
      setParticles(newParticles);

      // Clear after animation
      const timer = setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute -top-4 w-3 h-3 rounded-sm animate-fall"
          style={{
            left: `${particle.left}%`,
            backgroundColor: ['#F37021', '#FF9B4B', '#00529C', '#4CAF50', '#FF9800'][Math.floor(Math.random() * 5)],
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {message && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl px-8 py-6 animate-bounce">
            <div className="text-5xl mb-2">🎉</div>
            <p className="text-icici-orange">{message}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
}
