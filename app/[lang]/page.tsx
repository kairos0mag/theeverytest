"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, HeartHandshake, Sparkles, Zap, Cpu, 
  Search, ArrowRight, ShieldCheck, Layers 
} from "lucide-react";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { ToolCategory } from "@/types/tool";

const ICON_MAP = {
  Briefcase,
  HeartHandshake,
  Sparkles,
  Zap,
  Cpu,
};

export default function PlatformHomePage() {
  const params = useParams();
  const lang = (params?.lang as string) || "ko";

  const [activeCategory, setActiveCategory] = useState<ToolCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    return TOOLS_REGISTRY.filter((tool) => {
      const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
      const title = tool.title[lang] || tool.title["ko"] || "";
      const desc = tool.description[lang] || tool.description["ko"] || "";
      const matchesSearch = 
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, lang]);

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            EveryTest Open Utility Workspace
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            성향 분석부터 <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              AI 오픈 툴까지 한번에
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            검증된 알고리즘과 인터랙티브 툴로 나만의 데이터를 탐색하세요.
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md w-full md:w-auto overflow-x-auto">
            {[
              { id: "all", label: "전체 도구" },
              { id: "test", label: "심리 / 성향 분석" },
              { id: "ai", label: "AI 인텔리전스" },
              { id: "utility", label: "웹 유틸리티" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ToolCategory)}
                className={
                  "px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap " +
                  (activeCategory === tab.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5")
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="도구 및 테스트 검색..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 transition-all"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredTools.map((tool) => {
              const IconComponent = (ICON_MAP as any)[tool.icon] || Layers;
              const title = tool.title[lang] || tool.title["ko"];
              const description = tool.description[lang] || tool.description["ko"];
              const isComingSoon = tool.badge === "BETA" || tool.category === "ai";

              return (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl overflow-hidden"
                >
                  <div className={"absolute inset-0 bg-gradient-to-br " + tool.accentColor + " opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-105 group-hover:bg-indigo-600 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {tool.badge && (
                        <span className={
                          "text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border " +
                          (tool.badge === "HOT"
                            ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                            : tool.badge === "AI"
                            ? "bg-purple-500/10 border-purple-500/30 text-purple-400"
                            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400")
                        }>
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tool.features.map((feat, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
                          #{feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {tool.stats?.participants && "참여 " + tool.stats.participants}
                      {tool.stats?.latency && "응답속도: " + tool.stats.latency}
                    </div>

                    {isComingSoon ? (
                      <span className="text-xs text-slate-500 font-medium px-3 py-1.5 rounded-lg bg-white/5 cursor-not-allowed">
                        준비중
                      </span>
                    ) : (
                      <Link
                        href={"/" + lang + "/tests/" + tool.slug}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                      >
                        시작하기
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <footer className="mt-20 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>무상태(Stateless) 프라이버시 보호 구조 | 사용자 데이터는 안전하게 처리됩니다.</span>
          </div>
          <div className="flex items-center gap-3">
            <span>© 2026 theeverytest.com</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
