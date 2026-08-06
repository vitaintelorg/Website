"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScroll(16);
  // The homepage hero has a dark background, so the transparent (unscrolled)
  // navbar needs light text there. Every other page's hero is light.
  const onDarkHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-[4.5rem] items-center justify-between py-3" aria-label="Main navigation">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
          >
            <Image
              src="/images/logos/vitaintel-logo.svg"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 transition-transform group-hover:scale-105"
              priority
            />
            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors",
                onDarkHero ? "text-white" : "text-brand-logo"
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
                      onDarkHero
                        ? active
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                        : active
                          ? "text-brand-secondary"
                          : "text-foreground/80 hover:text-brand-secondary"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

          <MobileMenu
            trigger={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={cn("lg:hidden", onDarkHero && "text-white hover:bg-white/10")}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
        </nav>
      </Container>
    </header>
  );
}
