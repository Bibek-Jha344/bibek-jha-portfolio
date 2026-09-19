import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, RotateCcw, ShieldCheck, Database, Server, Zap, Lock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Step = "idle" | "request" | "gateway" | "redis_lock" | "db_transaction" | "committed";

export function SystemSimulator() {
  const [step, setStep] = useState<Step>("idle");
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[System Ready]: Redis Distributed Lock engine active. Concurrency protection idle.",
  ]);
  const [stats, setStats] = useState({
    concurrentRequests: 0,
    lockAcquiredTime: "0.0ms",
    raceConditionsPrevented: 0,
    status: "READY",
  });

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStep("request");
    setStats({
      concurrentRequests: 250,
      lockAcquiredTime: "3.4ms",
      raceConditionsPrevented: 249,
      status: "HANDLING SPIKE",
    });
    setLogs([
      `[T+0ms] ⚡ 250 concurrent booking requests dispatched for room_lux_101`,
    ]);

    setTimeout(() => {
      setStep("gateway");
      setLogs((prev) => [
        `[T+12ms] 🛡️ Next.js Gateway received burst. Validated payload & session tokens.`,
        ...prev,
      ]);
    }, 800);

    setTimeout(() => {
      setStep("redis_lock");
      setLogs((prev) => [
        `[T+24ms] 🔒 Redis Redlock acquired: 'lock:room:lux_101' with 5000ms TTL. 249 competing requests queued / rejected gracefully.`,
        ...prev,
      ]);
    }, 1800);

    setTimeout(() => {
      setStep("db_transaction");
      setLogs((prev) => [
        `[T+45ms] 💾 PostgreSQL: BEGIN TRANSACTION; SELECT * FROM rooms WHERE id = 'lux_101' FOR UPDATE;`,
        ...prev,
      ]);
    }, 2800);

    setTimeout(() => {
      setStep("committed");
      setLogs((prev) => [
        `[T+62ms] ✅ Room reserved. Transaction committed. Redis lock released. Booking confirmation #GS-9482 generated!`,
        ...prev,
      ]);
      setStats((s) => ({ ...s, status: "COMPLETE" }));
      setIsRunning(false);
    }, 3800);
  };

  const resetSimulation = () => {
    setStep("idle");
    setIsRunning(false);
    setStats({
      concurrentRequests: 0,
      lockAcquiredTime: "0.0ms",
      raceConditionsPrevented: 0,
      status: "READY",
    });
    setLogs(["[System Ready]: Redis Distributed Lock engine active. Concurrency protection idle."]);
  };

  return (
    <div className="rounded-2xl border border-border/80 bg-[#0a0e1a] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
            <Zap className="h-3.5 w-3.5" />
            Live Architecture Simulator
          </div>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold text-foreground">
            Redis Distributed Lock &amp; Concurrency Engine
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Simulate 250 simultaneous bookings competing for the exact same inventory item to observe race-condition prevention.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={runSimulation}
            disabled={isRunning}
            className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-semibold gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Play className="h-4 w-4 fill-current" />
            {isRunning ? "Simulating..." : "Simulate Traffic Spike"}
          </Button>
          <Button
            onClick={resetSimulation}
            disabled={isRunning}
            variant="outline"
            size="icon"
            className="border-border hover:bg-card"
            title="Reset Simulator"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Real-time System Nodes Visualization */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
        {/* Node 1: Clients */}
        <div
          className={`rounded-xl border p-4 transition-all duration-300 relative overflow-hidden ${
            step === "request"
              ? "border-sky-500 bg-sky-500/10 shadow-lg shadow-sky-500/20 ring-1 ring-sky-500"
              : "border-border/60 bg-card/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-sky-400 font-bold">01 / CLIENTS</span>
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          </div>
          <h4 className="mt-2 font-semibold text-foreground text-sm">250 Users</h4>
          <p className="mt-1 text-xs text-muted-foreground">Simultaneous checkout clicks</p>
          {step === "request" && (
            <div className="mt-3 text-[11px] font-mono text-sky-300 font-semibold">
              ⚡ High Burst Dispatch
            </div>
          )}
        </div>

        {/* Node 2: Gateway */}
        <div
          className={`rounded-xl border p-4 transition-all duration-300 relative overflow-hidden ${
            step === "gateway"
              ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500"
              : "border-border/60 bg-card/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-indigo-400 font-bold">02 / GATEWAY</span>
            <Server className="h-4 w-4 text-indigo-400" />
          </div>
          <h4 className="mt-2 font-semibold text-foreground text-sm">Next.js Edge API</h4>
          <p className="mt-1 text-xs text-muted-foreground">Token &amp; Rate-Limit Filter</p>
          {step === "gateway" && (
            <div className="mt-3 text-[11px] font-mono text-indigo-300 font-semibold">
              🛡️ Sanitized &amp; Routed
            </div>
          )}
        </div>

        {/* Node 3: Redis Lock */}
        <div
          className={`rounded-xl border p-4 transition-all duration-300 relative overflow-hidden ${
            step === "redis_lock"
              ? "border-rose-500 bg-rose-500/10 shadow-lg shadow-rose-500/20 ring-1 ring-rose-500"
              : "border-border/60 bg-card/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-rose-400 font-bold">03 / REDIS LOCK</span>
            <Lock className="h-4 w-4 text-rose-400" />
          </div>
          <h4 className="mt-2 font-semibold text-foreground text-sm">Atomic Lock</h4>
          <p className="mt-1 text-xs text-muted-foreground">Single Holder at T+24ms</p>
          {step === "redis_lock" && (
            <div className="mt-3 text-[11px] font-mono text-rose-300 font-semibold">
              🔒 SETNX lock:room_101
            </div>
          )}
        </div>

        {/* Node 4: PostgreSQL */}
        <div
          className={`rounded-xl border p-4 transition-all duration-300 relative overflow-hidden ${
            step === "db_transaction" || step === "committed"
              ? "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-500"
              : "border-border/60 bg-card/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-emerald-400 font-bold">04 / DATABASE</span>
            <Database className="h-4 w-4 text-emerald-400" />
          </div>
          <h4 className="mt-2 font-semibold text-foreground text-sm">PostgreSQL</h4>
          <p className="mt-1 text-xs text-muted-foreground">ACID Transaction Commit</p>
          {step === "committed" && (
            <div className="mt-3 text-[11px] font-mono text-emerald-300 font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> Commit &amp; Released
            </div>
          )}
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#060911] p-4 rounded-xl border border-border/40 font-mono text-xs">
        <div>
          <span className="text-muted-foreground block text-[11px]">CONCURRENT HITS</span>
          <strong className="text-sm font-semibold text-foreground">{stats.concurrentRequests} reqs</strong>
        </div>
        <div>
          <span className="text-muted-foreground block text-[11px]">REDIS LOCK TIME</span>
          <strong className="text-sm font-semibold text-emerald-400">{stats.lockAcquiredTime}</strong>
        </div>
        <div>
          <span className="text-muted-foreground block text-[11px]">OVERBOOKINGS BLOCKED</span>
          <strong className="text-sm font-semibold text-sky-400">{stats.raceConditionsPrevented}</strong>
        </div>
        <div>
          <span className="text-muted-foreground block text-[11px]">ENGINE STATE</span>
          <strong className={`text-sm font-semibold ${stats.status === "COMPLETE" ? "text-emerald-400" : "text-amber-400"}`}>
            {stats.status}
          </strong>
        </div>
      </div>

      {/* Live Event Stream Log */}
      <div className="mt-6 rounded-xl border border-border/60 bg-[#060911] p-4 font-mono text-xs select-text">
        <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-2 text-muted-foreground text-[11px]">
          <span>REAL-TIME ENGINE AUDIT LOG</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="max-h-36 overflow-y-auto space-y-1.5">
          {logs.map((log, i) => (
            <div key={i} className="text-slate-300">
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
