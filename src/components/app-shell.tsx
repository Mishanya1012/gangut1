"use client";

import { Bell, Crown, Heart, MessageCircle, Search, Shield, UserRound, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import { DatingDashboard } from "@/components/dating-dashboard";

const navigation = [
  { label: "Поиск", icon: Search },
  { label: "Матчи", icon: Heart },
  { label: "Чат", icon: MessageCircle },
  { label: "Гости", icon: UsersRound },
  { label: "Профиль", icon: UserRound }
];

export function AppShell() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="glass sticky top-4 z-20 flex items-center justify-between rounded-lg px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">GTA 5 RP</p>
            <h1 className="text-xl font-black sm:text-2xl">Los Santos Dating</h1>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <button
                className="flex h-10 items-center gap-2 rounded-md px-3 text-sm text-white/[0.72] transition hover:bg-white/10 hover:text-white"
                key={item.label}
                type="button"
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="relative grid h-10 w-10 place-items-center rounded-md bg-white/10 transition hover:bg-white/[0.15]" type="button">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-neonPink" />
            </button>
            <button className="hidden h-10 items-center gap-2 rounded-md bg-gradient-to-r from-neonPink to-neonPurple px-4 text-sm font-bold shadow-neon transition hover:scale-[1.02] sm:flex" type="button">
              <Crown size={16} />
              VIP
            </button>
          </div>
        </header>

        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="grid flex-1 gap-5 py-5 lg:grid-cols-[280px_minmax(0,1fr)_320px]"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
        >
          <aside className="glass hidden rounded-lg p-4 lg:block">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-neonPink to-neonPurple font-black">LS</div>
              <div>
                <p className="font-bold">Player123</p>
                <p className="text-sm text-white/50">ID 123 · online</p>
              </div>
            </div>
            <div className="space-y-2">
              {navigation.map((item, index) => (
                <button
                  className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm transition ${
                    index === 0 ? "bg-white/[0.14] text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                  key={item.label}
                  type="button"
                >
                  <item.icon size={17} />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-neonPurple/[0.35] bg-neonPurple/10 p-4">
              <Shield className="mb-3 text-neonPurple" size={22} />
              <p className="font-bold">Аккаунт сервера связан</p>
              <p className="mt-1 text-sm text-white/[0.55]">GET /api/player/status активен, профиль синхронизирован.</p>
            </div>
          </aside>

          <DatingDashboard />
        </motion.section>
      </div>
    </main>
  );
}
