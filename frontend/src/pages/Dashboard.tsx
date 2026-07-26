import { useEffect, useState } from "react";
import { AlertCircle, Clock3 } from "lucide-react";

import AnalyticsCards from "../components/AnalyticsCard";
import SyncButton from "../components/SyncButton";

import { fetchAnalytics } from "../services/api";
import type { Analytics } from "../types/analytics";


export default function Dashboard() {
  const [analytics, setAnalytics] =
    useState<Analytics | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [lastUpdated, setLastUpdated] =
    useState<Date | null>(null);


  async function syncLogs() {
    try {
      setLoading(true);
      setError("");

      const data = await fetchAnalytics();

      setAnalytics(data);
      setLastUpdated(new Date());

    } catch {
      setError(
        "Unable to fetch analytics. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    syncLogs();
  }, []);


  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        px-6
        py-8
        md:px-10
      "
    >

      <div className="
        mx-auto
        max-w-7xl
      ">

        {/* Header */}
        <header
          className="
            mb-10
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>
            <h1
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-white
              "
            >
                Dashboard
            </h1>

          </div>


          <SyncButton
            onSync={syncLogs}
            loading={loading}
          />

        </header>



        {/* Error */}
        {error && (
          <div
            className="
              mb-6
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-3
              text-sm
              text-red-300
            "
          >
            <AlertCircle size={18} />

            {error}
          </div>
        )}



        {/* Content */}
        <section>

          {!analytics && loading && (
            <div
              className="
                grid
                gap-5
                md:grid-cols-3
              "
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="
                    h-36
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-900
                    animate-pulse
                  "
                />
              ))}
            </div>
          )}


          {analytics && (
            <>
              <AnalyticsCards
                analytics={analytics}
              />


              {lastUpdated && (
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-500
                  "
                >
                  <Clock3 size={14} />

                  Last updated:
                  {" "}
                  {lastUpdated.toLocaleTimeString()}
                </div>
              )}
            </>
          )}

        </section>

      </div>

    </main>
  );
}