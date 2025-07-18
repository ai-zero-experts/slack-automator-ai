import React from 'react';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import JoinForm from '@/components/JoinForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <JoinForm />
    </div>
  );
};

export default Index;
