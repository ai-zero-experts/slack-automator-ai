import React from 'react';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section id="video-section" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our tool transforms community management with simple automation prompts
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="relative aspect-video bg-muted/30 border-primary/20 overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="bg-primary/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-primary/30 transition-colors">
                <Play className="w-12 h-12 text-primary fill-current" />
              </div>
            </div>
            
            {/* Placeholder for video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-foreground">Product Demo</h3>
                <p className="text-sm text-muted-foreground">See how to automate daily standups and channel summaries</p>
              </div>
            </div>
          </Card>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            Coming soon: Replace this placeholder with your product demo video
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;