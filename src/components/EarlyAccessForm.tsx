
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Registration successful!",
        description: "Thank you for your interest in StealthEra. We'll be in touch soon.",
        duration: 5000,
      });
    }, 1500);
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-stealth-indigo/20 border border-stealth-blue/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 uppercase">Thank You!</h3>
        <p className="text-[#CCCCCC] mb-6">
          Your early access request has been received. We'll contact you soon with more information.
        </p>
        <Button
          variant="outline"
          className="border-stealth-blue text-stealth-blue hover:bg-stealth-blue/10"
          onClick={() => window.location.href = '/'}
        >
          Return Home
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-stealth-black border border-stealth-indigo/30 rounded-lg p-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#F0F0F0]">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white focus:ring-2 focus:ring-stealth-blue focus:border-stealth-blue"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#F0F0F0]">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white focus:ring-2 focus:ring-stealth-blue focus:border-stealth-blue"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[#F0F0F0]">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 1234567890"
          required
          value={formData.phone}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white focus:ring-2 focus:ring-stealth-blue focus:border-stealth-blue"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="role" className="text-[#F0F0F0]">Role</Label>
        <ToggleGroup 
          type="single" 
          value={formData.role}
          onValueChange={handleRoleChange}
          className="flex justify-between"
        >
          <ToggleGroupItem value="caregiver" className="w-1/3 bg-stealth-indigo/10 data-[state=on]:bg-stealth-blue data-[state=on]:text-white">
            Caregiver
          </ToggleGroupItem>
          <ToggleGroupItem value="hospital" className="w-1/3 bg-stealth-indigo/10 data-[state=on]:bg-stealth-blue data-[state=on]:text-white">
            Hospital
          </ToggleGroupItem>
          <ToggleGroupItem value="senior" className="w-1/3 bg-stealth-indigo/10 data-[state=on]:bg-stealth-blue data-[state=on]:text-white">
            Senior
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#F0F0F0]">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your interest in StealthEra..."
          value={formData.message}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white min-h-[100px] focus:ring-2 focus:ring-stealth-blue focus:border-stealth-blue"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-stealth-blue hover:bg-stealth-purple hover:scale-105 text-white transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Early Access"}
      </Button>
    </form>
  );
};

export default EarlyAccessForm;
