import { Users, AlertTriangle, MapPin, Activity, Shield, TrendingUp } from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { RiskMap } from "@/components/dashboard/RiskMap";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { FilterPanel } from "@/components/dashboard/FilterPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-sm text-muted-foreground">
            Real-time climate intelligence and alert management for Kenya
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <FilterPanel />
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="People at Risk"
            value="2.4M"
            subtitle="Across 12 counties"
            icon={Users}
            variant="critical"
            trend={{ value: 12, isPositive: false }}
          />
          <StatCard
            title="Active Alerts"
            value="156"
            subtitle="24 critical, 89 high"
            icon={AlertTriangle}
            variant="warning"
          />
          <StatCard
            title="Counties Affected"
            value="23"
            subtitle="Out of 47 total"
            icon={MapPin}
            trend={{ value: 8, isPositive: false }}
          />
          <StatCard
            title="Alerts Sent Today"
            value="47.2K"
            subtitle="SMS, Voice, USSD"
            icon={Activity}
            trend={{ value: 23, isPositive: true }}
          />
        </div>

        {/* Secondary Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <StatCard
            title="Response Rate"
            value="94.2%"
            subtitle="Alert acknowledgment"
            icon={TrendingUp}
          />
          <StatCard
            title="System Status"
            value="Operational"
            subtitle="All channels active"
            icon={Shield}
          />
          <StatCard
            title="NGO Partners"
            value="47"
            subtitle="Active organizations"
            icon={Users}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RiskMap />
          <AlertPanel />
        </div>

        {/* Footer */}
        <footer className="mt-8 border-t border-border/50 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-risk-low animate-pulse" />
              <span className="text-xs text-muted-foreground">System Status: All services operational</span>
            </div>
            <p className="text-xs text-muted-foreground">
              CLIMAX Climate Intelligence Platform • Government of Kenya • v1.0.0
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
