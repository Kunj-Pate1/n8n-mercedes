import {
    CheckCircle2,
    Timer,
    XCircle,
  } from "lucide-react";
  
  import type { Analytics } from "../types/analytics";
  
  interface Props {
    analytics: Analytics;
  }
  
  export default function AnalyticsCards({
    analytics,
  }: Props) {
    const cards = [
      {
        title: "Success Rate",
        value: `${analytics.success_rate}%`,
        icon: CheckCircle2,
        color: "text-emerald-400",
      },
      {
        title: "Failure Count",
        value: analytics.failure_rate,
        icon: XCircle,
        color: "text-red-400",
      },
      {
        title: "Average Duration",
        value: `${analytics.average_duration}s`,
        icon: Timer,
        color: "text-blue-400",
      },
    ];
  
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
  
          return (
            <div
              key={card.title}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-zinc-800
                bg-zinc-900/50
                px-5
                py-4
                transition
                hover:bg-zinc-900
              "
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {card.title}
                </p>
  
                <p className="
                  mt-1
                  text-3xl
                  font-medium
                  text-white
                ">
                  {card.value}
                </p>
              </div>
  
              <Icon
                size={28}
                strokeWidth={1.8}
                className={card.color}
              />
            </div>
          );
        })}
      </div>
    );
  }