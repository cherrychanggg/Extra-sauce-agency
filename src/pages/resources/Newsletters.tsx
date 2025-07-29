import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { newsletterPageContent } from "@/content/resources/newsletters";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  hearAbout: string;
}

const Newsletters = () => {
  const { hero, benefits, form } = newsletterPageContent;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Get environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const welcomeTemplate = import.meta.env.VITE_EMAILJS_WELCOME_TEMPLATE;
      const notificationTemplate = import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE;
      const notificationEmail = import.meta.env.VITE_NOTIFICATION_EMAIL;

      // Check if environment variables are set
      if (!serviceId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      // Send welcome email to subscriber
      await emailjs.send(
        serviceId,
        welcomeTemplate,
        {
          to_email: data.email,
          to_name: `${data.firstName} ${data.lastName}`,
          from_name: 'Extra Sauce Team',
        },
        publicKey
      );

      // Send notification email to you
      await emailjs.send(
        serviceId,
        notificationTemplate,
        {
          to_email: notificationEmail,
          subscriber_email: data.email,
          subscriber_name: `${data.firstName} ${data.lastName}`,
          hear_about: data.hearAbout,
        },
        publicKey
      );

      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the Content-Led GTM Report. Check your email for confirmation.",
      });
      
      reset();
    } catch (error) {
      console.error('Error sending emails:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container-premium py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-5">
                  {hero.title.split('CONTENT-LED')[0]}
                  <span className="text-primary">CONTENT-LED<br />
                  GTM REPORT.</span>
                </h1>
                
                <div className="mb-8">
                  <p className="text-lg mb-4">
                    {hero.subtitle} <span className="text-primary">{hero.launchDate}</span> — Join the List
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {hero.description}
                  </p>
                  
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    Don't miss out. <span className="text-foreground font-medium">Subscribe now</span>
                  </p>
                </div>
              </div>
              
              {/* Right Form */}
              <div className="bg-card p-8 rounded-xl shadow-lg border">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {form.fields.email.label}
                    </label>
                    <Input
                      {...register("email", { required: "Email is required" })}
                      id="email"
                      type="email"
                      placeholder={form.fields.email.placeholder}
                      className="w-full"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        {form.fields.firstName.label}
                      </label>
                      <Input
                        {...register("firstName", { required: "First name is required" })}
                        id="firstName"
                        type="text"
                        placeholder={form.fields.firstName.placeholder}
                        className="w-full"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        {form.fields.lastName.label}
                      </label>
                      <Input
                        {...register("lastName", { required: "Last name is required" })}
                        id="lastName"
                        type="text"
                        placeholder={form.fields.lastName.placeholder}
                        className="w-full"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">
                      {form.fields.hearAbout.label}
                    </label>
                    <Textarea
                      {...register("hearAbout", { required: "This field is required" })}
                      id="hearAbout"
                      placeholder={form.fields.hearAbout.placeholder}
                      className="w-full"
                      rows={4}
                    />
                    {errors.hearAbout && (
                      <p className="text-sm text-destructive mt-1">{errors.hearAbout.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? "Subscribing..." : form.submitButton}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Newsletters;