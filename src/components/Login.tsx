import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen icici-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-2xl mb-4">
            <h1 className="text-icici-orange">ICICI Bank</h1>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-center mb-2 text-icici-orange">Welcome to ICICI Peer Points</h2>
          <p className="text-center text-text-gray mb-6">Recognize. Appreciate. Celebrate.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                type="text"
                placeholder="Enter your Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button type="submit" className="w-full bg-icici-orange hover:bg-icici-orange-light text-white">
              LOGIN
            </Button>

            <Button type="button" variant="outline" className="w-full border-icici-orange text-icici-orange hover:bg-icici-orange-pale">
              LOGIN WITH ICICI CREDENTIALS
            </Button>
          </form>

          <p className="text-center text-text-gray mt-6 text-sm">
            Truth, Trust, Transparency.
          </p>
        </div>
      </div>
    </div>
  );
}
