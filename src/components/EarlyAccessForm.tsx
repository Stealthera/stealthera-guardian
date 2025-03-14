
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
      <div className="bg-stealth-indigo/20 border border-stealth-purple/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-white uppercase">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          Your early access request has been received. We'll contact you soon with more information.
        </p>
        <Button
          variant="outline"
          className="border-stealth-purple text-stealth-purple hover:bg-stealth-purple/10"
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
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 1234567890"
          required
          value={formData.phone}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="role" className="text-white">Role</Label>
        <Select onValueChange={handleRoleChange} value={formData.role}>
          <SelectTrigger className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent className="bg-stealth-indigo border-stealth-purple/30">
            <SelectItem value="caregiver">Caregiver</SelectItem>
            <SelectItem value="hospital">Hospital</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your interest in StealthEra..."
          value={formData.message}
          onChange={handleChange}
          className="bg-stealth-indigo/10 border-stealth-indigo/30 text-white min-h-[100px]"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Early Access"}
      </Button>
    </form>
  );
};

export default EarlyAccessForm;
