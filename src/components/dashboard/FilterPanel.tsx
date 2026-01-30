import { Calendar, Filter, MapPin, CloudRain } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const counties = [
  "All Counties",
  "Turkana",
  "Marsabit",
  "Wajir",
  "Mandera",
  "Garissa",
  "Isiolo",
  "Samburu",
  "Baringo",
  "Kitui",
  "Makueni",
];

const hazardTypes = [
  "All Hazards",
  "Drought",
  "Flood",
  "Locust Swarm",
  "Landslide",
  "Wildfire",
  "Extreme Heat",
];

const timeRanges = [
  "Last 24 hours",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Custom range",
];

export function FilterPanel() {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-4">
      <div className="mb-4 flex items-center gap-2">
        <Filter className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">Filters</h3>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {/* County Filter */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3 w-3" />
            County
          </label>
          <Select defaultValue="All Counties">
            <SelectTrigger className="h-9 border-border/50 bg-secondary/30 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {counties.map((county) => (
                <SelectItem key={county} value={county}>
                  {county}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Hazard Type Filter */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <CloudRain className="h-3 w-3" />
            Hazard Type
          </label>
          <Select defaultValue="All Hazards">
            <SelectTrigger className="h-9 border-border/50 bg-secondary/30 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {hazardTypes.map((hazard) => (
                <SelectItem key={hazard} value={hazard}>
                  {hazard}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Range Filter */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Calendar className="h-3 w-3" />
            Time Range
          </label>
          <Select defaultValue="Last 7 days">
            <SelectTrigger className="h-9 border-border/50 bg-secondary/30 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Apply Button */}
        <div className="flex items-end">
          <Button className="h-9 w-full">Apply Filters</Button>
        </div>
      </div>
    </div>
  );
}
