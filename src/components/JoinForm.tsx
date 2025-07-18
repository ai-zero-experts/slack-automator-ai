import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Users, Sparkles, Calendar } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  reason: z.string().min(10, 'Please tell us more about why you want to use the tool (at least 10 characters)'),
  callWillingness: z.enum(['yes', 'maybe', 'no'], {
    required_error: 'Please select an option',
  }),
});

type FormData = z.infer<typeof formSchema>;

const JoinForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      reason: '',
    },
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log('Form submitted:', data);
    
    toast({
      title: "Application submitted! 🎉",
      description: "We'll review your application and send you the Slack invite soon.",
    });
    
    form.reset();
  };

  return (
    <section id="form-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join our inner circle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us shape the future of community automation. Get free access and direct input on our roadmap.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Early Access Application
              </CardTitle>
              <CardDescription>
                Fill out this quick form to join our exclusive beta community
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your-email@company.com" 
                            {...field} 
                            className="border-primary/20 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to use this tool?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your community management challenges, what tasks you'd like to automate, or how this could help your Slack workspace..."
                            className="min-h-[100px] border-primary/20 focus:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Help us understand your use case so we can tailor the experience
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="callWillingness"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Would you be interested in a feedback call with our team?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="yes" />
                              <Label htmlFor="yes">Yes, I'd love to share ideas and get early insights</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="maybe" id="maybe" />
                              <Label htmlFor="maybe">Maybe, reach out and we'll see</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="no" />
                              <Label htmlFor="no">No, I prefer to just test the product</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          This helps us understand how involved you want to be in the development process
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-primary/10">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Users className="w-4 h-4 text-primary" />
                  What happens next?
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• We'll review your application within 2-3 days</li>
                  <li>• You'll receive a Slack invite to our beta workspace</li>
                  <li>• Get free access to test and shape the product</li>
                  <li>• Direct line to our team for feedback and suggestions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;