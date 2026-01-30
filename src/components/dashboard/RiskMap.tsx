import { useState } from "react";
import { cn } from "@/lib/utils";

interface County {
  id: string;
  name: string;
  risk: "high" | "medium" | "low";
  population: number;
  alerts: number;
}

const counties: County[] = [
  { id: "turkana", name: "Turkana", risk: "high", population: 926976, alerts: 45 },
  { id: "marsabit", name: "Marsabit", risk: "high", population: 459785, alerts: 38 },
  { id: "wajir", name: "Wajir", risk: "high", population: 781263, alerts: 52 },
  { id: "mandera", name: "Mandera", risk: "high", population: 867457, alerts: 61 },
  { id: "garissa", name: "Garissa", risk: "medium", population: 841353, alerts: 28 },
  { id: "isiolo", name: "Isiolo", risk: "medium", population: 268002, alerts: 19 },
  { id: "samburu", name: "Samburu", risk: "medium", population: 310327, alerts: 22 },
  { id: "baringo", name: "Baringo", risk: "low", population: 666763, alerts: 12 },
  { id: "kitui", name: "Kitui", risk: "low", population: 1136187, alerts: 15 },
  { id: "makueni", name: "Makueni", risk: "low", population: 987653, alerts: 11 },
];

export function RiskMap() {
  const [selectedCounty, setSelectedCounty] = useState<County | null>(null);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
      case "critical":
        return "bg-risk-high";
      case "medium":
        return "bg-risk-medium";
      case "low":
        return "bg-risk-low";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="stat-card h-full">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">National Risk Overview</h3>
          <p className="text-sm text-muted-foreground">Kenya county-level climate risk map</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-risk-high" />
            <span className="text-muted-foreground">High</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-risk-medium" />
            <span className="text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-risk-low" />
            <span className="text-muted-foreground">Low</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Stylized Map Grid */}
        <div className="relative aspect-square rounded-xl border border-border/50 bg-secondary/30 p-4">
          <div className="grid h-full grid-cols-4 grid-rows-5 gap-1">
            {/* Northern Region - High Risk */}
            <div className={cn("col-span-2 row-span-2 rounded-md bg-risk-high/60 transition-all hover:bg-risk-high cursor-pointer")} 
                 onClick={() => setSelectedCounty(counties[0])} />
            <div className={cn("col-span-2 row-span-2 rounded-md bg-risk-high/70 transition-all hover:bg-risk-high cursor-pointer")}
                 onClick={() => setSelectedCounty(counties[2])} />
            
            {/* Central Region - Medium Risk */}
            <div className={cn("rounded-md bg-risk-medium/50 transition-all hover:bg-risk-medium cursor-pointer")}
                 onClick={() => setSelectedCounty(counties[5])} />
            <div className={cn("rounded-md bg-risk-medium/60 transition-all hover:bg-risk-medium cursor-pointer")}
                 onClick={() => setSelectedCounty(counties[6])} />
            <div className={cn("col-span-2 rounded-md bg-risk-high/50 transition-all hover:bg-risk-high cursor-pointer")}
                 onClick={() => setSelectedCounty(counties[4])} />
            
            {/* Southern Region - Low Risk */}
            <div className={cn("col-span-2 row-span-2 rounded-md bg-risk-low/50 transition-all hover:bg-risk-low cursor-pointer")}
                 onClick={() => setSelectedCounty(counties[7])} />
            <div className={cn("col-span-2 row-span-2 rounded-md bg-risk-low/40 transition-all hover:bg-risk-low cursor-pointer")}
                 onClick={() => setSelectedCounty(counties[8])} />
          </div>
          
          {/* Map Labels */}
          <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 text-[10px] font-medium text-foreground/70">
            N
          </div>
          <div className="absolute bottom-4 left-4 text-[10px] text-muted-foreground">
            Kenya
          </div>
        </div>

        {/* County Details */}
        <div className="space-y-3">
          {selectedCounty ? (
            <div className="rounded-xl border border-border/50 bg-secondary/30 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-semibold text-foreground">{selectedCounty.name}</h4>
                <span className={cn("risk-badge", `risk-badge-${selectedCounty.risk}`)}>
                  {selectedCounty.risk.toUpperCase()}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Population at Risk</span>
                  <span className="font-medium text-foreground">{selectedCounty.population.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Alerts</span>
                  <span className="font-medium text-foreground">{selectedCounty.alerts}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border/50 p-4">
              <p className="text-center text-sm text-muted-foreground">
                Click on a region to view county details
              </p>
            </div>
          )}

          {/* Top Risk Counties */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Highest Risk Counties
            </p>
            {counties.filter(c => c.risk === "high").slice(0, 3).map((county) => (
              <div
                key={county.id}
                className="flex items-center justify-between rounded-lg bg-secondary/30 px-3 py-2 transition-colors hover:bg-secondary/50 cursor-pointer"
                onClick={() => setSelectedCounty(county)}
              >
                <span className="text-sm font-medium text-foreground">{county.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{county.alerts} alerts</span>
                  <div className="h-2 w-2 rounded-full bg-risk-high animate-pulse-glow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
