import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedDots from './AnimatedDots';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      <AnimatedDots />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            ✨ Join Our Inner Circle
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Automate your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Slack community
            </span>{' '}
            with simple prompts
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From daily check-ins to channel summaries, automate any community task 
            with just a simple prompt. No coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium animate-float"
              onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
              onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📹 Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>💫 Limited spots available for our beta community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;