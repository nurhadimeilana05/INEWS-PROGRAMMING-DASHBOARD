"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetEcosystem } from "@/services/api";
import { DEFAULT_ECOSYSTEM_DATA, type EcosystemDataset } from "@/lib/ecosystem-data";

// Brand and platform SVG Icons
function InewsLogo() {
  return (
    <div className="inline-flex flex-col items-center justify-center bg-white px-5 py-2 rounded shadow-md">
      <div className="flex items-center text-xl font-black tracking-tight text-black">
        <span className="text-[#c41e3a] font-black">i</span>
        <span className="text-black font-black">News</span>
      </div>
      <div className="text-[9px] font-extrabold tracking-wider text-black uppercase -mt-1">
        MEDIA GROUP
      </div>
    </div>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285aeb" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#fff" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.8" fill="none" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#fff" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#1877f2" />
      <path
        d="M13.5 19.5v-6.2h2.1l.3-2.4h-2.4V9.4c0-.7.2-1.2 1.2-1.2h1.3V6.1c-.2 0-1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v1.5H8.6v2.4h2.1v6.2h2.8z"
        fill="#fff"
      />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#ff0000" />
      <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#fff" />
    </svg>
  );
}

function TvIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#0284c7" />
      <path
        d="M8.5 7.5L12 10.5l3.5-3M8 11h8a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 16.5v-4A1.5 1.5 0 018 11z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayOttIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#7c3aed" />
      <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#fff" />
    </svg>
  );
}

function WebGlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#0891b2" />
      <circle cx="12" cy="12" r="7" stroke="#fff" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="3.5" ry="7" stroke="#fff" strokeWidth="1.2" fill="none" />
      <path d="M5 12h14M7 8.5h10M7 15.5h10" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function TiktokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#09090b" />
      <path
        d="M14.5 7.2a3.8 3.8 0 002.3 2.1v2.1a5.8 5.8 0 01-2.4-.7v4.6a3.8 3.8 0 11-3.8-3.8c.3 0 .6 0 .9.1v2.2a1.6 1.6 0 101.3 1.5V6h1.7z"
        fill="#22c55e"
      />
    </svg>
  );
}

export function EcosystemDashboard() {
  const { data = DEFAULT_ECOSYSTEM_DATA } = useQuery<EcosystemDataset>({
    queryKey: ["ecosystem"],
    queryFn: ({ signal }) => GetEcosystem(signal),
    initialData: DEFAULT_ECOSYSTEM_DATA,
  });

  const [selectedMonth, setSelectedMonth] = useState("Oktober 2026");
  const [startMonth, setStartMonth] = useState("Januari");
  const [endMonth, setEndMonth] = useState("Oktober");

  const monthPerformance =
    data.performanceByMonth[selectedMonth] ||
    data.performanceByMonth["Oktober 2026"] ||
    DEFAULT_ECOSYSTEM_DATA.performanceByMonth["Oktober 2026"];

  const monthList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
  ];

  const startIndex = Math.max(0, monthList.indexOf(startMonth));
  const endIndex = Math.min(monthList.length - 1, Math.max(startIndex, monthList.indexOf(endMonth)));
  const filteredMonths = monthList.slice(startIndex, endIndex + 1);

  const filteredTrenRows = data.trenGabungan.rows.filter((r) =>
    filteredMonths.includes(r.month),
  );

  return (
    <div className="space-y-8 pb-16 font-sans text-white">
      {/* ============================================================== */}
      {/* 1. LAYER 1: TREND ECOSYSTEM                                    */}
      {/* ============================================================== */}
      <section className="bg-[#181416] border border-[#352c30] rounded-xl p-6 shadow-xl">
        <div className="mb-6">
          <h2 className="text-2xl font-black tracking-wide font-heading uppercase text-white flex items-center gap-2">
            TREND ECOSYSTEM
            <span className="text-sm font-normal text-zinc-400 normal-case tracking-normal">
              Total Reach iNews Media Group per bulan - semua platform
            </span>
          </h2>
        </div>

        <div className="bg-[#1c1719] border border-[#30262a] rounded-lg p-6 flex flex-col items-center">
          {/* Logo badge in center */}
          <div className="mb-8">
            <InewsLogo />
          </div>

          {/* Bar Chart */}
          <div className="w-full max-w-4xl h-72 flex items-end justify-between gap-4 px-6 pt-4 pb-2 border-b border-zinc-700/60">
            {data.trendEcosystem.map((item) => {
              // Scale relative to max reach ~270M
              const maxVal = 280000000;
              const heightPct = Math.round((item.reach / maxVal) * 100);

              return (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  {/* Value on top of bar */}
                  <span className="text-sm font-mono font-bold text-white tracking-tight">
                    {item.formatted}
                  </span>
                  {/* Blue vertical bar */}
                  <div
                    style={{ height: `${heightPct}%` }}
                    className="w-full max-w-[90px] bg-[#0b74de] rounded-t-sm transition-all duration-300 hover:brightness-110 shadow-lg"
                  />
                  {/* Month label */}
                  <span className="text-sm font-bold text-zinc-200 mt-2 font-mono">
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Platform icons row below chart */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <InstagramIcon size={24} />
            <FacebookIcon size={24} />
            <YoutubeIcon size={24} />
            <TvIcon size={24} />
            <PlayOttIcon size={24} />
            <WebGlobeIcon size={24} />
            <TiktokIcon size={24} />
          </div>

          {/* Bottom Badge */}
          <div className="mt-5">
            <div className="bg-white text-black px-5 py-1 rounded-md text-xs font-bold font-mono shadow">
              Periode: Mei – Okt 2026
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. LAYER 2: PERFORMANCE ALL PLATFORM                           */}
      {/* ============================================================== */}
      <section className="bg-[#181416] border border-[#352c30] rounded-xl p-6 shadow-xl">
        <div className="mb-4">
          <h2 className="text-2xl font-black tracking-wide font-heading uppercase text-white flex items-center gap-2">
            PERFORMANCE ALL PLATFORM
            <span className="text-sm font-normal text-zinc-400 normal-case tracking-normal">
              Reach per platform dan posisi iNews Media Group terhadap kompetitor
            </span>
          </h2>
        </div>

        {/* Blue Rail Filter */}
        <div className="bg-[#1e5fa0] rounded-lg p-2.5 px-4 mb-5 flex items-center gap-3 shadow">
          <span className="text-xs font-black tracking-wider uppercase text-white font-heading">
            BULAN
          </span>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-white text-zinc-900 rounded font-bold text-xs py-1.5 px-3 font-mono cursor-pointer outline-none border-none shadow-sm"
          >
            {data.availableMonths.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Big Stats Card */}
        <div className="bg-[#1c1719] border border-[#2a4d79] rounded-lg p-6 mb-6 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-2">
            {/* Left branding & total reach */}
            <div className="flex items-center gap-5">
              <InewsLogo />
              <div>
                <div className="text-4xl lg:text-5xl font-black tracking-tight font-mono text-white">
                  {monthPerformance.platforms.totalReachFormatted}
                </div>
                <div className="text-xs font-black text-[#38bdf8] uppercase tracking-wider font-heading mt-0.5">
                  TOTAL REACH {selectedMonth.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Right platform reach icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full lg:w-auto">
              {/* Instagram */}
              <div className="flex flex-col items-center text-center">
                <InstagramIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.instagram.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  REACH
                </span>
              </div>

              {/* Facebook */}
              <div className="flex flex-col items-center text-center">
                <FacebookIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.facebook.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  REACH
                </span>
              </div>

              {/* YouTube */}
              <div className="flex flex-col items-center text-center">
                <YoutubeIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.youtube.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  UNIQUE VIEWS
                </span>
              </div>

              {/* TV */}
              <div className="flex flex-col items-center text-center">
                <TvIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.tv.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  REACH
                </span>
              </div>

              {/* Plays / OTT */}
              <div className="flex flex-col items-center text-center">
                <PlayOttIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.ott.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  PLAYS
                </span>
              </div>

              {/* Web / Globe */}
              <div className="flex flex-col items-center text-center">
                <WebGlobeIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.portal.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  VIEWS
                </span>
              </div>

              {/* TikTok */}
              <div className="flex flex-col items-center text-center">
                <TiktokIcon size={28} />
                <span className="text-sm font-bold font-mono text-white mt-1.5">
                  {monthPerformance.platforms.tiktok.formatted}
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  VIEWS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Columns: TV, YouTube, Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          {/* Column 1: TV (REACH) */}
          <div className="lg:pr-4">
            <div className="text-center mb-5">
              <h3 className="text-lg font-black text-[#38bdf8] font-heading uppercase tracking-wider">
                TV
              </h3>
              <p className="text-xs text-zinc-400 font-bold tracking-wider">(REACH)</p>
            </div>

            <div className="space-y-3">
              {monthPerformance.tvReach.map((item) => {
                const maxVal = monthPerformance.tvReach[0]?.value || 11500000;
                const widthPct = Math.max(12, Math.round((item.value / maxVal) * 100));
                const isRed = item.channel === "INEWS";

                return (
                  <div key={item.channel} className="flex items-center text-xs">
                    <span className="w-28 text-right font-bold text-zinc-300 font-mono pr-3 truncate">
                      {item.channel}
                    </span>
                    <div className="flex-1 bg-transparent h-6 flex items-center">
                      <div
                        style={{ width: `${widthPct}%` }}
                        className={`h-5 ${isRed ? "bg-[#e0334f]" : "bg-[#0b74de]"} rounded-xs flex items-center justify-end pr-2 transition-all duration-300`}
                      >
                        <span className="text-[11px] font-mono font-bold text-white">
                          {item.formatted}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: YOUTUBE VOD + LIVE (VIEWS) */}
          <div className="lg:px-4 lg:border-x lg:border-dashed lg:border-zinc-700">
            <div className="text-center mb-5">
              <h3 className="text-lg font-black text-[#38bdf8] font-heading uppercase tracking-wider">
                YOUTUBE
              </h3>
              <p className="text-xs text-zinc-400 font-bold tracking-wider">VOD + LIVE (VIEWS)</p>
            </div>

            <div className="space-y-3">
              {monthPerformance.youtubeViews.map((item) => {
                const maxVal = monthPerformance.youtubeViews[0]?.value || 250000000;
                const widthPct = Math.max(10, Math.round((item.value / maxVal) * 100));
                const isRed = item.channel === "IMG";

                return (
                  <div key={item.channel} className="flex items-center text-xs">
                    <span className="w-28 text-right font-bold text-zinc-300 font-mono pr-3 truncate">
                      {item.channel}
                    </span>
                    <div className="flex-1 bg-transparent h-6 flex items-center">
                      <div
                        style={{ width: `${widthPct}%` }}
                        className={`h-5 ${isRed ? "bg-[#e0334f]" : "bg-[#0b74de]"} rounded-xs flex items-center justify-end pr-2 transition-all duration-300`}
                      >
                        <span className="text-[11px] font-mono font-bold text-white">
                          {item.formatted}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: SOCIAL MEDIA */}
          <div className="lg:pl-4 flex flex-col justify-between">
            <div>
              <div className="text-center mb-4">
                <h3 className="text-lg font-black text-[#38bdf8] font-heading uppercase tracking-wider">
                  SOCIAL MEDIA
                </h3>
                <p className="text-xs text-[#22c55e] font-extrabold tracking-wider uppercase mt-1">
                  DIPERBINCANGKAN SEBANYAK
                </p>
                <div className="text-6xl font-black text-[#e0334f] font-mono my-1 tracking-tight">
                  {monthPerformance.socialMedia.totalMention}
                </div>
                <p className="text-sm text-[#22c55e] font-black uppercase tracking-wider">
                  JUTA KALI
                </p>
              </div>

              {/* Vertical Bars for Social Media */}
              <div className="h-44 flex items-end justify-center gap-6 pt-4 pb-2 px-4 border-b border-zinc-700/60 mt-4">
                {monthPerformance.socialMedia.competitors.map((item) => {
                  const maxVal = 500;
                  const heightPct = Math.round((item.value / maxVal) * 100);
                  const isRed = item.group === "IMG";

                  return (
                    <div key={item.group} className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-xs font-mono font-bold text-white">
                        {item.value}
                      </span>
                      <div
                        style={{ height: `${heightPct}%` }}
                        className={`w-12 ${isRed ? "bg-[#e0334f]" : "bg-[#0b74de]"} rounded-t-sm shadow`}
                      />
                      <span className="text-[10px] font-bold text-zinc-300 font-mono text-center uppercase tracking-tight mt-1 max-w-[60px] leading-tight">
                        {item.group}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="flex justify-center mt-6">
          <div className="bg-white text-black px-5 py-1 rounded-md text-xs font-bold font-mono shadow">
            Periode: {selectedMonth.toUpperCase()}
          </div>
        </div>

        {/* Platform Filter Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-zinc-400 font-bold uppercase text-[11px] mr-2">PLATFORM</span>
            <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#e0334f]" /> TV
            </span>
            <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#ff0000]" /> Youtube
            </span>
            <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#1877f2]" /> Facebook
            </span>
            <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#e1306c]" /> Instagram
            </span>
            <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-white" /> X
            </span>
            <span className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-white" /> Tiktok
            </span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-xs">
            <span>Filter bulan ada di setiap panel</span>
            <button
              onClick={() => setSelectedMonth("Oktober 2026")}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 px-3 py-1 rounded font-bold transition"
            >
              Reset semua
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. LAYER 3: TREN REACH GABUNGAN                                */}
      {/* ============================================================== */}
      <section className="bg-[#181416] border border-[#352c30] rounded-xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-black tracking-wide font-heading uppercase text-white">
            TREN REACH GABUNGAN
          </h2>

          {/* Month Range Filter */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold">
            <span className="text-zinc-400 uppercase font-heading text-xs">BULAN</span>
            <select
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
              className="bg-[#241e21] border border-zinc-700 text-white rounded px-2.5 py-1"
            >
              {monthList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <span className="text-zinc-400">s/d</span>
            <select
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
              className="bg-[#241e21] border border-zinc-700 text-white rounded px-2.5 py-1"
            >
              {monthList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 text-xs mb-6 text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#e0334f]" />
            <span>TV Reach INEWS - sumbu kiri</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#22c55e]" />
            <span>Digital (Youtube, Facebook, Instagram, X) - sumbu kanan</span>
          </div>
        </div>

        {/* Dual Axis Line Chart */}
        <div className="relative w-full h-80 px-10 py-4 bg-[#141012] border border-zinc-800 rounded-lg mb-8 overflow-hidden">
          {/* Y-Axis Left (TV Reach) */}
          <div className="absolute left-2 top-4 bottom-10 flex flex-col justify-between text-[11px] font-mono text-zinc-400 text-right pr-2">
            <span>18,4 Jt</span>
            <span>15,0 Jt</span>
            <span>12,6 Jt</span>
            <span>9,9 Jt</span>
          </div>
          <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
            TV Reach (orang)
          </div>

          {/* Y-Axis Right (Digital Reach + Views) */}
          <div className="absolute right-2 top-4 bottom-10 flex flex-col justify-between text-[11px] font-mono text-[#22c55e] text-left pl-2">
            <span>679,6 Jt</span>
            <span>400,0 Jt</span>
            <span>200,0 Jt</span>
            <span>0</span>
          </div>
          <div className="absolute right-1 top-1/2 -translate-y-1/2 rotate-90 text-[10px] text-[#22c55e] font-bold uppercase tracking-wider">
            Digital Reach + Views
          </div>

          {/* SVG Line Paths */}
          <div className="w-full h-full pl-10 pr-12 pb-6">
            <svg viewBox="0 0 900 240" className="w-full h-full overflow-visible">
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="900" y2="20" stroke="#2c2428" strokeDasharray="3 3" />
              <line x1="0" y1="80" x2="900" y2="80" stroke="#2c2428" strokeDasharray="3 3" />
              <line x1="0" y1="140" x2="900" y2="140" stroke="#2c2428" strokeDasharray="3 3" />
              <line x1="0" y1="200" x2="900" y2="200" stroke="#2c2428" strokeDasharray="3 3" />

              {/* Digital Green Line (Mapped against 0 to 680M) */}
              <polyline
                fill="none"
                stroke="#22c55e"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="45,144 135,142 225,60 315,110 405,130 495,115 585,112 675,120 765,72 855,30"
              />

              {/* TV Red Line (Mapped against 9.0 to 18.4M) */}
              <polyline
                fill="none"
                stroke="#e0334f"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="45,140 135,140 225,116 315,136 405,160 495,150 585,165 675,178 765,165 855,168"
              />

              {/* Dots and Labels for Green Line */}
              {[
                { x: 45, y: 144, val: "272,1 Jt" },
                { x: 135, y: 142, val: "277,2 Jt" },
                { x: 225, y: 60, val: "472,6 Jt" },
                { x: 315, y: 110, val: "342,5 Jt" },
                { x: 405, y: 130, val: "294,6 Jt" },
                { x: 495, y: 115, val: "330,3 Jt" },
                { x: 585, y: 112, val: "337,1 Jt" },
                { x: 675, y: 120, val: "316,4 Jt" },
                { x: 765, y: 72, val: "438,4 Jt" },
                { x: 855, y: 30, val: "549,1 Jt" },
              ].map((pt, i) => (
                <g key={`g-${i}`}>
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#22c55e" stroke="#fff" strokeWidth="1.5" />
                  <text
                    x={pt.x}
                    y={pt.y - 10}
                    textAnchor="middle"
                    fill="#22c55e"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {pt.val}
                  </text>
                </g>
              ))}

              {/* Dots and Labels for Red Line */}
              {[
                { x: 45, y: 140, val: "12,6 Jt" },
                { x: 135, y: 140, val: "12,6 Jt" },
                { x: 225, y: 116, val: "13,6 Jt" },
                { x: 315, y: 136, val: "12,8 Jt" },
                { x: 405, y: 160, val: "11,7 Jt" },
                { x: 495, y: 150, val: "12,2 Jt" },
                { x: 585, y: 165, val: "11,5 Jt" },
                { x: 675, y: 178, val: "10,9 Jt" },
                { x: 765, y: 165, val: "11,5 Jt" },
                { x: 855, y: 168, val: "11,4 Jt" },
              ].map((pt, i) => (
                <g key={`r-${i}`}>
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#e0334f" stroke="#fff" strokeWidth="1.5" />
                  <text
                    x={pt.x}
                    y={pt.y + 18}
                    textAnchor="middle"
                    fill="#e0334f"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {pt.val}
                  </text>
                </g>
              ))}

              {/* Month X Labels */}
              {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt"].map((m, idx) => (
                <text
                  key={m}
                  x={45 + idx * 90}
                  y="235"
                  textAnchor="middle"
                  fill="#d4d4d8"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {m}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-lg border border-[#3b3236]">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-[#12284b] text-white border-b-2 border-[#ffd84d]">
                <th className="py-3 px-4 font-black">BULAN</th>
                <th className="py-3 px-4 font-black">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#e0334f] mr-1.5" />
                  TV REACH
                </th>
                <th className="py-3 px-4 font-black">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff0000] mr-1.5" />
                  YOUTUBE
                </th>
                <th className="py-3 px-4 font-black">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1877f2] mr-1.5" />
                  FACEBOOK
                </th>
                <th className="py-3 px-4 font-black">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#e1306c] mr-1.5" />
                  INSTAGRAM
                </th>
                <th className="py-3 px-4 font-black">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#38bdf8] mr-1.5" />
                  X (VIEWS)
                </th>
                <th className="py-3 px-4 font-black">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#22c55e] mr-1.5" />
                  TOTAL DIGITAL
                </th>
                <th className="py-3 px-4 font-black text-right">GABUNGAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2226] bg-[#1a1518]">
              {filteredTrenRows.map((row) => (
                <tr key={row.month} className="hover:bg-[#251f22] transition-colors">
                  <td className="py-2.5 px-4 font-bold text-white">{row.month}</td>
                  <td className="py-2.5 px-4 text-[#e0334f] font-bold">{row.tvReach.toFixed(1).replace(".", ",")} Jt</td>
                  <td className="py-2.5 px-4 text-zinc-200">{row.youtube.toFixed(1).replace(".", ",")} Jt</td>
                  <td className="py-2.5 px-4 text-zinc-200">{row.facebook.toFixed(1).replace(".", ",")} Jt</td>
                  <td className="py-2.5 px-4 text-zinc-200">{row.instagram.toFixed(1).replace(".", ",")} Jt</td>
                  <td className="py-2.5 px-4 text-zinc-200">
                    {row.xViews >= 1 ? `${row.xViews.toFixed(1).replace(".", ",")} Jt` : `${Math.round(row.xViews * 1000)} Rb`}
                  </td>
                  <td className="py-2.5 px-4 text-[#22c55e] font-bold">
                    {row.totalDigital.toFixed(1).replace(".", ",")} Jt
                  </td>
                  <td className="py-2.5 px-4 text-right font-black text-white">
                    {row.gabungan.toFixed(1).replace(".", ",")} Jt
                  </td>
                </tr>
              ))}
              {/* Highlighted Average Row */}
              <tr className="bg-[#12284b] text-white font-black border-t-2 border-[#ffd84d]">
                <td className="py-3 px-4 text-[#ffd84d]">{data.trenGabungan.average.month}</td>
                <td className="py-3 px-4 text-[#ffd84d]">
                  {data.trenGabungan.average.tvReach.toFixed(1).replace(".", ",")} Jt
                </td>
                <td className="py-3 px-4 text-[#38bdf8]">
                  {data.trenGabungan.average.youtube.toFixed(1).replace(".", ",")} Jt
                </td>
                <td className="py-3 px-4 text-[#38bdf8]">
                  {data.trenGabungan.average.facebook.toFixed(1).replace(".", ",")} Jt
                </td>
                <td className="py-3 px-4 text-[#38bdf8]">
                  {data.trenGabungan.average.instagram.toFixed(1).replace(".", ",")} Jt
                </td>
                <td className="py-3 px-4 text-white">
                  {Math.round(data.trenGabungan.average.xViews * 1000)} Rb
                </td>
                <td className="py-3 px-4 text-[#22c55e]">
                  {data.trenGabungan.average.totalDigital.toFixed(1).replace(".", ",")} Jt
                </td>
                <td className="py-3 px-4 text-right text-white">
                  {data.trenGabungan.average.gabungan.toFixed(1).replace(".", ",")} Jt
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. LAYER 4: KOMPOSISI DIGITAL REACH                            */}
      {/* ============================================================== */}
      <section className="bg-[#181416] border border-[#352c30] rounded-xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <h2 className="text-2xl font-black tracking-wide font-heading uppercase text-white">
              KOMPOSISI DIGITAL REACH
            </h2>
            <p className="text-xs text-zinc-400">Per platform, semua Unit · tanpa TikTok</p>
          </div>

          {/* Month Range Filter */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold">
            <span className="text-zinc-400 uppercase font-heading text-xs">BULAN</span>
            <select
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
              className="bg-[#241e21] border border-zinc-700 text-white rounded px-2.5 py-1"
            >
              {monthList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <span className="text-zinc-400">s/d</span>
            <select
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
              className="bg-[#241e21] border border-zinc-700 text-white rounded px-2.5 py-1"
            >
              {monthList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 text-xs mb-6 text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-xs bg-[#e0334f]" />
            <span>Youtube</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-xs bg-[#1877f2]" />
            <span>Facebook</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-xs bg-[#e1306c]" />
            <span>Instagram</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-xs bg-white" />
            <span>X(Views, proksi)</span>
          </div>
          <span className="text-zinc-500 italic">angka dalam segmen = Jt</span>
        </div>

        {/* Stacked Bar Chart */}
        <div className="relative w-full h-84 px-10 py-4 bg-[#141012] border border-zinc-800 rounded-lg overflow-hidden">
          {/* Y Axis */}
          <div className="absolute left-2 top-4 bottom-10 flex flex-col justify-between text-[11px] font-mono text-zinc-400 text-right pr-2">
            <span>615,0 Jt</span>
            <span>400,0 Jt</span>
            <span>200,0 Jt</span>
            <span>0</span>
          </div>

          <div className="w-full h-full pl-10 pr-4 pb-6 flex items-end justify-between gap-3">
            {filteredTrenRows.map((row) => {
              const maxVal = 620;
              const totalVal = row.totalDigital;
              const heightPct = Math.round((totalVal / maxVal) * 100);

              const ytPct = (row.youtube / totalVal) * 100;
              const fbPct = (row.facebook / totalVal) * 100;
              const igPct = (row.instagram / totalVal) * 100;

              return (
                <div key={row.month} className="flex-1 flex flex-col items-center h-full justify-end group">
                  {/* Total on top */}
                  <span className="text-xs font-mono font-bold text-white mb-1.5 whitespace-nowrap">
                    {row.totalDigital.toFixed(1).replace(".", ",")} Jt
                  </span>

                  {/* Stacked Bar Container */}
                  <div
                    style={{ height: `${heightPct}%` }}
                    className="w-full max-w-[65px] rounded-t-sm flex flex-col-reverse overflow-hidden shadow-lg"
                  >
                    {/* YouTube (Bottom - Red) */}
                    <div
                      style={{ height: `${ytPct}%` }}
                      className="bg-[#e0334f] w-full flex items-center justify-center text-[10px] font-mono font-black text-white hover:brightness-110"
                    >
                      {row.youtube >= 80 ? row.youtube.toFixed(1).replace(".", ",") : ""}
                    </div>

                    {/* Facebook (Middle - Blue) */}
                    <div
                      style={{ height: `${fbPct}%` }}
                      className="bg-[#1877f2] w-full flex items-center justify-center text-[10px] font-mono font-black text-white hover:brightness-110"
                    >
                      {row.facebook >= 60 ? row.facebook.toFixed(1).replace(".", ",") : ""}
                    </div>

                    {/* Instagram (Top - Magenta) */}
                    <div
                      style={{ height: `${igPct}%` }}
                      className="bg-[#e1306c] w-full flex items-center justify-center text-[10px] font-mono font-black text-white hover:brightness-110"
                    >
                      {row.instagram >= 50 ? row.instagram.toFixed(1).replace(".", ",") : ""}
                    </div>
                  </div>

                  {/* Month Label */}
                  <span className="text-xs font-bold text-zinc-300 font-mono mt-2">
                    {row.month.slice(0, 3)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. LAYER 5: PROFIL PENONTON GABUNGAN                           */}
      {/* ============================================================== */}
      <section className="bg-[#181416] border border-[#352c30] rounded-xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <h2 className="text-2xl font-black tracking-wide font-heading uppercase text-white">
            PROFIL PENONTON GABUNGAN
          </h2>

          {/* Month Range Filter */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold">
            <span className="text-zinc-400 uppercase font-heading text-xs">BULAN</span>
            <select
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
              className="bg-[#241e21] border border-zinc-700 text-white rounded px-2.5 py-1"
            >
              {monthList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <span className="text-zinc-400">s/d</span>
            <select
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
              className="bg-[#241e21] border border-zinc-700 text-white rounded px-2.5 py-1"
            >
              {monthList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xs text-zinc-400 mb-6">
          Gender & Usia · Jan – Okt 2026 · TV: INEWS (Nielsen) · Digital: Unit iNews · sorot merah = 3 kelompok usia terbesar
        </p>

        {/* 6 Demographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.profilPenonton.map((card) => {
            return (
              <div
                key={card.platform}
                className="bg-[#1c1719] border border-[#352c30] rounded-lg p-5 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                    <h3 className="text-lg font-black tracking-wider font-heading uppercase text-white">
                      {card.platform}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase">
                      {card.sourceLabel}
                    </span>
                  </div>

                  {/* Gender Ratio Section */}
                  <div className="mb-5">
                    <div className="text-[11px] font-bold font-heading text-zinc-400 uppercase mb-1.5">
                      GENDER
                    </div>
                    {/* Split Bar */}
                    <div className="w-full h-5 rounded-xs flex overflow-hidden mb-1 font-mono text-[11px] font-bold text-white shadow">
                      <div
                        style={{ width: `${card.gender.male}%`, backgroundColor: card.accentColor }}
                        className="h-full flex items-center justify-start pl-2"
                      >
                        {card.gender.male.toFixed(1).replace(".", ",")}%
                      </div>
                      <div className="h-full flex-1 bg-zinc-700 flex items-center justify-end pr-2 text-zinc-200">
                        {card.gender.female.toFixed(1).replace(".", ",")}%
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                      <span>Laki-laki</span>
                      <span>Perempuan</span>
                    </div>
                  </div>

                  {/* Age Distribution Section */}
                  <div>
                    <div className="text-[11px] font-bold font-heading text-zinc-400 uppercase mb-2">
                      USIA
                    </div>
                    <div className="space-y-2">
                      {card.ageGroups.map((age) => {
                        // Max age pct ~45%
                        const widthPct = Math.max(3, Math.round((age.pct / 45) * 100));
                        const isTop = age.isTop;

                        return (
                          <div key={age.range} className="flex items-center text-xs font-mono">
                            <span className="w-12 text-zinc-400 font-bold">{age.range}</span>
                            <div className="flex-1 bg-transparent h-4 flex items-center mx-2">
                              <div
                                style={{
                                  width: `${widthPct}%`,
                                  backgroundColor: isTop ? "#ff6b8b" : "#4a2832",
                                }}
                                className="h-2 rounded-xs transition-all duration-300 shadow-sm"
                              />
                            </div>
                            <span
                              className={`w-12 text-right font-bold ${
                                isTop ? "text-[#ff6b8b]" : "text-zinc-400"
                              }`}
                            >
                              {age.pct.toFixed(1).replace(".", ",")}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
