import React, { useState } from "react";
import { Send, Copy, Check, Terminal, Code2, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Endpoint {
  id: string;
  name: string;
  method: "GET" | "POST";
  path: string;
  service: string;
  requestBody?: object;
  responseBody: object;
  status: number;
  latency: string;
}

const endpoints: Endpoint[] = [
  {
    id: "grandstay-hold",
    name: "GrandStay • Temporary Room Hold",
    method: "POST",
    path: "/api/v1/bookings/hold",
    service: "Spring Boot / Redis Lock",
    requestBody: {
      roomId: "room_deluxe_ocean_302",
      checkIn: "2026-10-15",
      checkOut: "2026-10-20",
      guestId: "gst_892147",
      lockTtlSeconds: 300,
    },
    responseBody: {
      status: "SUCCESS",
      lockAcquired: true,
      holdToken: "hld_9a8f4c21e0b34d",
      expiresAt: "2026-10-15T14:35:00Z",
      priceSummary: {
        baseRate: 240,
        nights: 5,
        taxes: 120,
        totalUsd: 1320,
      },
      message: "Room locked exclusively for guest. Complete checkout within 5 minutes.",
    },
    status: 201,
    latency: "38ms",
  },
  {
    id: "worksphere-metrics",
    name: "WorkSphere • Department Summary",
    method: "GET",
    path: "/api/v1/departments/engineering/summary",
    service: "Next.js / Prisma / PostgreSQL",
    responseBody: {
      department: "Engineering & Systems",
      activeHeadcount: 48,
      attendanceRateToday: "97.9%",
      pendingLeaves: 3,
      payrollProcessedThisMonth: true,
      performanceRatingAvg: 4.8,
      topSkills: ["Java", "Spring Boot", "TypeScript", "PostgreSQL", "Docker"],
    },
    status: 200,
    latency: "24ms",
  },
  {
    id: "driverent-overlap",
    name: "DriveRent • Date-Range Validation",
    method: "POST",
    path: "/api/v1/fleet/validate-reservation",
    service: "PostgreSQL Range Types / Next.js",
    requestBody: {
      vehicleId: "veh_tesla_model_3_09",
      startDate: "2026-11-01T09:00:00Z",
      endDate: "2026-11-06T18:00:00Z",
    },
    responseBody: {
      isAvailable: true,
      conflictDetected: false,
      vehicle: {
        model: "Tesla Model 3 Long Range",
        dailyRate: 85,
        transmission: "Automatic",
        location: "Terminal 2 Hub",
      },
      rateEstimate: {
        durationDays: 5.375,
        estimatedTotal: 456.88,
      },
    },
    status: 200,
    latency: "31ms",
  },
];

export function ApiSandbox() {
  const [activeEndpoint, setActiveEndpoint] = useState<Endpoint>(endpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<object | null>(endpoints[0].responseBody);
  const [activeTab, setActiveTab] = useState<"response" | "request">("response");
  const [copied, setCopied] = useState(false);

  const handleSend = () => {
    setIsLoading(true);
    setResponse(null);
    setTimeout(() => {
      setResponse(activeEndpoint.responseBody);
      setIsLoading(false);
    }, 400);
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(response ?? activeEndpoint.responseBody, null, 2));
    setCopied(true);
    toast.success("JSON response copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-border/80 bg-[#0a0e1a] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      {/* Sandbox Header */}
      <div className="flex flex-col gap-2 border-b border-border/60 pb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-semibold text-sky-400 w-fit">
          <Code2 className="h-3.5 w-3.5" />
          Interactive REST API Sandbox
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          Live Backend Service Inspector
        </h3>
        <p className="text-sm text-muted-foreground">
          Select an API contract below to inspect request structures, schema validation, and real JSON responses.
        </p>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {endpoints.map((ep) => (
          <button
            key={ep.id}
            onClick={() => {
              setActiveEndpoint(ep);
              setResponse(ep.responseBody);
            }}
            className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-mono font-medium transition-all ${
              activeEndpoint.id === ep.id
                ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-300 shadow-sm"
                : "border-border/60 bg-card/40 text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                ep.method === "POST" ? "bg-indigo-500/20 text-indigo-300" : "bg-emerald-500/20 text-emerald-300"
              }`}
            >
              {ep.method}
            </span>
            <span>{ep.name}</span>
          </button>
        ))}
      </div>

      {/* URL / Request Bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-xl border border-border/60 bg-[#060911] p-3 font-mono text-xs">
        <div className="flex items-center gap-2 flex-1">
          <span
            className={`rounded px-2 py-1 font-bold ${
              activeEndpoint.method === "POST" ? "bg-indigo-500/20 text-indigo-300" : "bg-emerald-500/20 text-emerald-300"
            }`}
          >
            {activeEndpoint.method}
          </span>
          <span className="text-foreground truncate">{activeEndpoint.path}</span>
          <span className="hidden sm:inline-block text-[11px] text-muted-foreground ml-auto pr-2">
            Engine: {activeEndpoint.service}
          </span>
        </div>
        <Button
          onClick={handleSend}
          disabled={isLoading}
          size="sm"
          className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold gap-1.5 shadow-md"
        >
          <Send className="h-3.5 w-3.5" />
          {isLoading ? "Sending..." : "Send Request"}
        </Button>
      </div>

      {/* Response / Request Body View */}
      <div className="mt-4 rounded-xl border border-border/60 bg-[#060911] overflow-hidden">
        {/* Subheader */}
        <div className="flex items-center justify-between border-b border-border/40 px-4 py-2.5 bg-card/30">
          <div className="flex gap-4 font-mono text-xs">
            <button
              onClick={() => setActiveTab("response")}
              className={`font-semibold pb-0.5 transition-colors ${
                activeTab === "response"
                  ? "text-emerald-400 border-b-2 border-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Response Payload
            </button>
            {activeEndpoint.requestBody && (
              <button
                onClick={() => setActiveTab("request")}
                className={`font-semibold pb-0.5 transition-colors ${
                  activeTab === "request"
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Request Body
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {activeEndpoint.status} OK
            </span>
            <span className="text-muted-foreground">{activeEndpoint.latency}</span>
            <button
              onClick={copyResponse}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors p-1"
              title="Copy JSON"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 max-h-72 overflow-y-auto font-mono text-xs leading-relaxed select-text">
          {isLoading ? (
            <div className="py-8 text-center text-muted-foreground flex items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
              Executing query &amp; compiling JSON payload...
            </div>
          ) : activeTab === "response" ? (
            <pre className="text-emerald-300">
              {JSON.stringify(response ?? activeEndpoint.responseBody, null, 2)}
            </pre>
          ) : (
            <pre className="text-sky-300">
              {JSON.stringify(activeEndpoint.requestBody, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
