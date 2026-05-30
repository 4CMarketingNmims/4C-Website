'use client';

import Image from "next/image";

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown, Menu } from 'lucide-react';
import { NAV_LINKS, EVENTS_DATA } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../ui/sheet';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or at top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = NAV_LINKS.map((link) => {
    if (link.label === 'Events') {
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-lg font-headline flex items-center gap-1 hover:bg-white/10"
            >
              {link.label}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background/80 backdrop-blur-md border-white/10">
            <DropdownMenuItem asChild>
              <Link href="/events" className="cursor-pointer" onClick={() => setIsSheetOpen(false)}>All Events</Link>
            </DropdownMenuItem>
            {EVENTS_DATA.map((event) => (
              <DropdownMenuItem key={event.slug} asChild>
                <Link href={`/events/${event.slug}`} className="cursor-pointer" onClick={() => setIsSheetOpen(false)}>{event.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link
        href={link.href}
        key={link.label}
className="text-base lg:text-lg font-headline transition-colors hover:text-accent text-center py-2 px-3 lg:px-4 rounded-lg hover:bg-white/5 block whitespace-nowrap"        onClick={() => setIsSheetOpen(false)}
      >
        {link.label}
      </Link>
    );
  });
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex h-16 items-center justify-between glass-card px-4 lg:px-6">
  <Link href="/" className="text-2xl font-bold font-headline text-white">
            <Image src="/4clogo.webp" alt="4C Logo" width={60} height={60} className="h-[1.5em] w-auto inline align-middle drop-shadow-lg" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-3 lg:gap-5">
  {navItems}
</nav>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
                            <SheetContent side="right" className="bg-background/90 backdrop-blur-xl border-l-white/10 w-full">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col items-center justify-center space-y-6 mt-20 w-full px-8">
                  {navItems.map((item, index) => (
                    <div key={index} className="w-full flex justify-center">
                      {item}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
       </div>
    </header>
  );
}
