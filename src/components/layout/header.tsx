'use client';

import Image from "next/image";
import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../ui/sheet';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.location.hash || isSheetOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isSheetOpen]);

  const navItems = NAV_LINKS.map((link) => (
    <Link
      href={link.href}
      key={link.label}
      className="text-lg font-headline transition-colors hover:text-accent"
    >
      {link.label}
    </Link>
  ));

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-16 items-center justify-between glass-card px-6">

          <Link
            href="/"
            className="text-2xl font-bold font-headline text-white"
          >
            <Image
              src="/4clogo.webp"
              alt="4C Logo"
              width={54}
              height={54}
              className="h-[1.5em] w-auto inline align-middle drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems}
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-background/90 backdrop-blur-xl border-l-white/10 w-full"
              >
                <SheetTitle className="sr-only">
                  Navigation Menu
                </SheetTitle>

                <nav className="flex flex-col items-center justify-center space-y-6 mt-20 w-full px-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-headline transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
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
