'use client';

import { ROUTES_NAV } from '@/constants/constants';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const path = usePathname().replace('/', '');
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        if (currentScroll < 50) {
          setIsHidden(false);
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 w-full bg-orange-500 transition duration-300 ease-in-out z-50 ${
        isHidden ? '-translate-y-48 ' : ''
      }`}
    >
      <nav className='container mx-auto py-6 flex justify-between items-center'>
        <Link href='/'>
          <Image
            className='h-12 w-auto'
            src='/logo.png'
            alt='logo'
            width='0'
            height='0'
            sizes='100vw'
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className='space-x-8'>
            {ROUTES_NAV.map((el) => (
              <NavigationMenuItem key={el} className='capitalize'>
                <Link href={el} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={el === path ? 'activeNav' : 'nonActiveNav'}
                  >
                    {el}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
