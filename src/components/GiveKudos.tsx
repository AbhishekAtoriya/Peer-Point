import { useState } from 'react';
import { Gift, Mic, Sparkles, Send, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Slider } from './ui/slider';
import { toast } from 'sonner@2.0.3';
import { RecognitionTemplates } from './RecognitionTemplates';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface GiveKudosProps {
  onCelebration: (message: string) => void;
}

export function GiveKudos({ onCelebration }: GiveKudosProps) {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [message, setMessage] = useState('');
  const [points, setPoints] = useState([5]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const employees = [
    'Priya Sharma',
    'Rahul Kumar',
    'Anjali Verma',
    'Amit Patel',
    'Sneha Reddy',
    'Vikram Singh',
  ];

  const availableTags = [
    '#TeamPlayer',
    '#Leadership',
    '#Innovation',
    '#CustomerFirst',
    '#Helpful',
    '#Communication',
    '#ProblemSolver',
    '#Mentor',
  ];

  const topRecognized = [
    { name: 'Priya Sharma', count: 12 },
    { name: 'Rahul Kumar', count: 10 },
    { name: 'Anjali Verma', count: 9 },
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmployee || !message) {
      toast.error('Please select an employee and write a message');
      return;
    }
    
    onCelebration(`Appreciation sent to ${selectedEmployee}! 🎉`);
    toast.success('Appreciation shared successfully!');
    
    // Reset form
    setSelectedEmployee('');
    setMessage('');
    setPoints([5]);
    setSelectedTags([]);
  };

  const suggestMessage = () => {
    const suggestions = [
      'Thank you for your exceptional work on this project. Your dedication made all the difference!',
      'Your innovative approach solved a problem we\'ve been facing for weeks. Great thinking!',
      'I appreciate your willingness to help and support the team. You\'re an amazing colleague!',
      'Your attention to detail and commitment to excellence is truly inspiring!',
    ];
    setMessage(suggestions[Math.floor(Math.random() * suggestions.length)]);
    toast.success('AI suggestion added!');
  };

  const handleTemplateSelect = (template: any) => {
    setMessage(template.message);
    setSelectedTags(template.tags);
    setPoints([template.points]);
    toast.success('Template applied successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="icici-gradient rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
        <div className="relative z-10">
          <h2 className="text-white flex items-center gap-2">
            <Gift className="w-8 h-8" />
            Give Kudos 🎁
          </h2>
          <p className="text-white/90 mt-1">Recognize and appreciate your colleagues</p>
        </div>
      </div>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="manual">
            <FileText className="w-4 h-4 mr-2" />
            Manual Entry
          </TabsTrigger>
          <TabsTrigger value="templates">
            <Sparkles className="w-4 h-4 mr-2" />
            Use Templates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="dark:bg-dark-card border-2 border-icici-orange/20 hover:shadow-2xl transition-all">
                <CardHeader className="bg-gradient-to-r from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card">
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-icici-orange" />
                    Send Appreciation
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Employee Selection */}
                    <div>
                      <Label htmlFor="employee">Select Employee</Label>
                      <select
                        id="employee"
                        value={selectedEmployee}
                        onChange={(e) => setSelectedEmployee(e.target.value)}
                        className="w-full mt-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-dark-bg focus:ring-2 focus:ring-icici-orange focus:border-transparent transition-all"
                      >
                        <option value="">Choose an employee...</option>
                        {employees.map((employee) => (
                          <option key={employee} value={employee}>
                            {employee}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="message">Your Message</Label>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={suggestMessage}
                            className="border-icici-blue text-icici-blue hover:bg-blue-50 transition-all"
                          >
                            <Sparkles className="w-4 h-4 mr-1" />
                            AI Suggest
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="border-icici-orange text-icici-orange hover:bg-icici-orange-pale transition-all"
                          >
                            <Mic className="w-4 h-4 mr-1" />
                            Voice
                          </Button>
                        </div>
                      </div>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your appreciation message here..."
                        rows={6}
                        className="resize-none border-2 focus:border-icici-orange transition-all"
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <Label>Tags (Select up to 3)</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {availableTags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleTag(tag)}
                            className={`px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105 ${
                              selectedTags.includes(tag)
                                ? 'bg-gradient-to-r from-icici-orange to-icici-orange-light text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-dark-bg text-text-gray hover:bg-icici-orange-pale'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Points Slider */}
                    <div>
                      <Label>Points to Award: <span className="text-icici-orange text-xl">{points[0]}</span></Label>
                      <div className="mt-4">
                        <Slider
                          value={points}
                          onValueChange={setPoints}
                          min={1}
                          max={10}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-text-gray mt-2">
                          <span>1</span>
                          <span>5</span>
                          <span>10</span>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-icici-orange to-icici-orange-light hover:from-icici-orange-light hover:to-icici-orange text-white h-14 shadow-lg hover:shadow-2xl transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Appreciation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="dark:bg-dark-card border-2 border-icici-orange/20 bg-gradient-to-br from-icici-orange-pale to-white dark:from-dark-bg dark:to-dark-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-icici-orange to-icici-orange-light text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-3 animate-float">
                      85
                    </div>
                    <p className="text-text-gray text-sm">Points Remaining</p>
                    <p className="text-xs text-text-gray mt-1">Resets in 12 days</p>
                  </div>
                </CardContent>
              </Card>

              {/* Most Recognized This Week */}
              <Card className="dark:bg-dark-card">
                <CardHeader>
                  <CardTitle className="text-base">⭐ Top Recognizers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topRecognized.map((person, index) => (
                    <div key={person.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-icici-orange-pale dark:hover:bg-dark-bg transition-all">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                        index === 0 ? 'bg-gradient-to-br from-warning to-orange-500 text-white' :
                        index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-white' :
                        'bg-gradient-to-br from-orange-400 to-orange-500 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{person.name}</p>
                        <p className="text-xs text-text-gray">{person.count} recognitions</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Voice Recognition Tip */}
              <Card className="dark:bg-dark-card border-2 border-dashed border-icici-blue/30 hover:border-icici-blue transition-all">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-icici-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm">💡 Pro Tip: Use voice input for hands-free recognition!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <RecognitionTemplates onSelectTemplate={handleTemplateSelect} />
        </TabsContent>
      </Tabs>
    </div>
  );
}