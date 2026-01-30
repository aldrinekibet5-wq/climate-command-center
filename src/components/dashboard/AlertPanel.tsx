import { MessageSquare, Phone, Radio, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "sms" | "voice" | "ussd";
  message: string;
  recipients: number;
  status: "sent" | "pending" | "failed";
  timestamp: string;
}

const recentAlerts: Alert[] = [
  {
    id: "1",
    type: "sms",
    message: "Flash flood warning for Turkana County",
    recipients: 45230,
    status: "sent",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "voice",
    message: "Drought advisory for Marsabit region",
    recipients: 28100,
    status: "sent",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    type: "ussd",
    message: "Locust swarm alert - Eastern counties",
    recipients: 67500,
    status: "pending",
    timestamp: "Just now",
  },
];

const alertChannels = [
  { id: "sms", label: "SMS", icon: MessageSquare, count: 156420 },
  { id: "voice", label: "Voice", icon: Phone, count: 89340 },
  { id: "ussd", label: "USSD", icon: Radio, count: 234100 },
];

export function AlertPanel() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sms":
        return MessageSquare;
      case "voice":
        return Phone;
      case "ussd":
        return Radio;
      default:
        return MessageSquare;
    }
  };

  return (
    <div className="stat-card">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Alert Management</h3>
          <p className="text-sm text-muted-foreground">Multi-channel emergency broadcasts</p>
        </div>
        <Button className="glow-gold">
          <Send className="mr-2 h-4 w-4" />
          New Alert
        </Button>
      </div>

      {/* Channel Stats */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {alertChannels.map((channel) => (
          <div
            key={channel.id}
            className="rounded-xl border border-border/50 bg-secondary/30 p-3 text-center transition-colors hover:bg-secondary/50"
          >
            <channel.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
            <p className="text-lg font-bold text-foreground">
              {channel.count.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">{channel.label} Sent</p>
          </div>
        ))}
      </div>

      {/* Recent Alerts */}
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Recent Alerts
        </p>
        {recentAlerts.map((alert) => {
          const Icon = getTypeIcon(alert.type);
          return (
            <div
              key={alert.id}
              className="rounded-xl border border-border/50 bg-secondary/20 p-4 transition-colors hover:bg-secondary/30"
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase text-muted-foreground">
                      {alert.type}
                    </span>
                    <p className="text-sm font-medium text-foreground">{alert.message}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium",
                    alert.status === "sent" && "bg-risk-low/15 text-risk-low",
                    alert.status === "pending" && "bg-risk-medium/15 text-risk-medium",
                    alert.status === "failed" && "bg-risk-high/15 text-risk-high"
                  )}
                >
                  {alert.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{alert.recipients.toLocaleString()} recipients</span>
                <span>{alert.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
