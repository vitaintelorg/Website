"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { NeuralFigureMotif } from "@/components/common/NeuralFigureMotif";
import { ScanStrip } from "@/components/common/ScanStrip";
import { TypedSubtitle } from "./TypedSubtitle";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[600px] items-center overflow-hidden bg-[#050e16] pt-24"
      aria-labelledby="hero-heading"
    >
      {/* dark gradient base + subtle dot-grid texture, echoing a circuit board */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(147,186,210,0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d2436] via-[#050e16] to-[#050e16]"
        aria-hidden="true"
      />

      {/* flagship animated figure — large, centered-right, glowing */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <NeuralFigureMotif className="h-[130%] w-[130%] max-w-none opacity-60 sm:h-full sm:w-full md:opacity-70" />
      </div>

      {/* scrim to keep the heading/subtitle legible over the artwork behind it */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(5,14,22,0.72) 0%, rgba(5,14,22,0.35) 55%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            AI · Genomics · Precision Healthcare
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {siteConfig.tagline}
          </h1>
          <TypedSubtitle phrases={company.heroSubtitles} className="text-white/75" />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/about">
                About VitaIntel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white/70 text-white hover:bg-white hover:text-[#0d2436]"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            <ScanStrip />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
