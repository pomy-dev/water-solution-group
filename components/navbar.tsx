"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Droplet, Loader2, Menu, Phone } from "lucide-react";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [calling, setCalling] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpenMenu(null), [pathname]);

  const requestCallback = () => {
    setCalling(true);
    toast.info("Connecting you to an engineer…");
    setTimeout(() => {
      setCalling(false);
      toast.success("Request received — a water engineer will call you within 1 business hour.");
    }, 1800);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-navy-dark text-white">
        <div className="container flex h-9 items-center justify-between text-[11px] sm:text-xs">
          <p className="flex items-center gap-2 text-white/80">
            <Droplet className="h-3.5 w-3.5 text-aqua" />
            <span className="hidden sm:inline">Water security • Treatment plants • Reverse osmosis • Smart cities</span>
            <span className="sm:hidden">Safe water. Smarter systems.</span>
          </p>
          <button
            onClick={requestCallback}
            className="flex items-center gap-1.5 font-medium text-aqua transition-colors hover:text-aqua-light"
          >
            {calling ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Phone className="h-3.5 w-3.5" />}
            {calling ? "Connecting…" : "24/7 Emergency: +27 82 519 6140"}
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-white/90 shadow-lg shadow-navy/5 backdrop-blur-xl"
            : "bg-white/60 backdrop-blur-md"
        )}
      >
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2.5">
            <img src="/assets/logo.png" alt="Africa Water Solutions Group" className="h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 xl:flex" onMouseLeave={() => setOpenMenu(null)}>
            {nav.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.mega ? item.label : null)}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-water/10 text-water"
                      : "text-navy/80 hover:bg-navy/5 hover:text-navy"
                  )}
                >
                  {item.label}
                  {item.mega && <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openMenu === item.label && "rotate-180")} />}
                </Link>

                <AnimatePresence>
                  {item.mega && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border/60 bg-white p-6 shadow-2xl shadow-navy/10">
                        {item.mega.map((col) => (
                          <div key={col.title}>
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{col.title}</p>
                            <ul className="space-y-1">
                              {col.links.map((l) => (
                                <li key={l.label}>
                                  <Link
                                    href={l.href}
                                    className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-water/5"
                                  >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-water/10 text-water transition-colors group-hover:bg-water group-hover:text-white">
                                      <l.icon className="h-4 w-4" />
                                    </span>
                                    <span>
                                      <span className="block text-sm font-semibold text-navy">{l.label}</span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Button asChild variant="navy" size="sm">
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/laboratory">Book a Water Test</Link>
            </Button>
          </div>

          {/* Mobile trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-water to-aqua text-white">
                    <Droplet className="h-4 w-4" />
                  </span>
                  Africa Water Solutions Group
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                        pathname === item.href ? "bg-water/10 text-water" : "text-navy hover:bg-navy/5"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.mega && (
                      <div className="mb-2 ml-4 space-y-1 border-l-2 border-water/15 pl-3">
                        {item.mega.flatMap((c) => c.links).slice(0, 5).map((l) => (
                          <Link key={l.label} href={l.href} className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-water">
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="mt-6 grid gap-3">
                <Button asChild>
                  <Link href="/laboratory">Book a Water Test</Link>
                </Button>
                <Button asChild variant="navy">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
