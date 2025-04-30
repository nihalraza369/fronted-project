import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";

// Main Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaitlistDialog from "@/components/WaitlistDialog";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <div className="overflow-hidden">
          <Navbar />
          <main className="min-h-screen bg-background">
            <Hero />
            <Features />
            <About />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showWaitlistDialog, setShowWaitlistDialog] = useState(false);

  // Provide showWaitlist functionality through window object for all components
  useEffect(() => {
    const originalShowWaitlist = window.showWaitlist;
    window.showWaitlist = () => setShowWaitlistDialog(true);
    
    return () => {
      window.showWaitlist = originalShowWaitlist;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <WaitlistDialog 
        open={showWaitlistDialog} 
        onOpenChange={setShowWaitlistDialog}
      />
      <Toaster />
    </QueryClientProvider>
  );
}

// Extend Window interface
declare global {
  interface Window {
    showWaitlist: () => void;
  }
}

// Initialize the property
window.showWaitlist = () => {};

export default App;
