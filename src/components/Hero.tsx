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
            Observe, Control & Interact with all your{' '}
            <div className="inline-flex items-center gap-3 px-2 py-1 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img 
                src={slackLogo} 
                alt="Slack" 
                className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-primary font-bold">Slack</span>
            </div>{' '}
            <AnimatedText />{' '}
            from 1 desk.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop tab-hopping. Mass DM, scrape emails, automate tasks. Get early access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium animate-float"
              onClick={() => window.open('https://join.slack.com/t/microfoxoss/shared_invite/zt-399vobsye-6VLae3jVUkRybJI5FEhO0A', '_blank')}
            >
              Join us on Slack
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