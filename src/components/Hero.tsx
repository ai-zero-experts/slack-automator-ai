import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedDots from './AnimatedDots';
import AnimatedText from './AnimatedText';
import slackLogo from '@/assets/slack-logo.png';

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
            <div className="inline-flex items-center gap-3 border-2 border-primary/30 rounded-xl px-4 py-2 bg-primary/5 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <img 
                src={slackLogo} 
                alt="Slack" 
                className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-primary font-bold">Slack</span>
            </div>{' '}
            <AnimatedText />{' '}
            with AI prompts
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tell our AI what you need automated in plain English. Daily check-ins, 
            channel summaries, member onboarding - anything you can describe, we can automate.
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