"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { CellClusterMotif } from "@/components/common/CellClusterMotif";
import { TypedSubtitle } from "./TypedSubtitle";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-b from-brand-primary/5 via-background to-background pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <CellClusterMotif className="absolute -right-16 top-0 h-[32rem] w-[32rem] opacity-80 md:-right-10 md:top-8" />
        <CellClusterMotif className="absolute -left-24 bottom-0 hidden h-96 w-96 -scale-x-100 opacity-60 md:block" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl" />
      </div>

      <Container className="relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            AI · Genomics · Precision Healthcare
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {siteConfig.tagline}
          </h1>
          <TypedSubtitle phrases={company.heroSubtitles} />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/about">
                About VitaIntel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
