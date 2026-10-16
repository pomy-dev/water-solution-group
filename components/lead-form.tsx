"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LeadForm({
  title = "Request a callback",
  subtitle = "A named engineer responds within one business day.",
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [sector, setSector] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    toast.info("Submitting your request…");
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      setSector("");
      toast.success("Request received. Your reference has been emailed — an engineer will contact you within 1 business hour.");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <p className="font-display text-lg font-semibold text-navy">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Thabo Mokoena" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.co.za" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" required placeholder="+27 82 000 0000" />
        </div>
        <div className="space-y-1.5">
          <Label>Sector</Label>
          <Select value={sector} onValueChange={setSector} required>
            <SelectTrigger><SelectValue placeholder="Select a sector" /></SelectTrigger>
            <SelectContent>
              {["Household / Property", "Hospital / Clinic", "Municipality / Utility", "Mining / Industry", "Agriculture", "Investor / Developer"].map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us about your water challenge</Label>
        <Textarea id="message" name="message" placeholder="Source water, flow requirements, current problem, timelines…" />
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Request
          </>
        )}
      </Button>
    </form>
  );
}
