"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  trigger: React.ReactNode;
};

export function MobileMenu({ trigger }: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background p-6 shadow-xl focus:outline-none"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button type="button" variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile navigation">
                  <ul className="space-y-1">
                    {mainNav.map((item, i) => {
                      const active = pathname === item.href;
                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: 0.08 + i * 0.04, ease: "easeOut" }}
                        >
                          <Dialog.Close asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
                                active
                                  ? "bg-brand-primary/10 text-brand-secondary"
                                  : "text-foreground hover:bg-muted"
                              )}
                              aria-current={active ? "page" : undefined}
                            >
                              {item.label}
                            </Link>
                          </Dialog.Close>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 + mainNav.length * 0.04, ease: "easeOut" }}
                >
                  <Dialog.Close asChild>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get in touch</Link>
                    </Button>
                  </Dialog.Close>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
