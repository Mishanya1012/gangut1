"use client";

import type { ReactNode } from "react";
import { Camera, CheckCheck, Heart, MessageCircle, Search, Send, Sparkles, UserX, X } from "lucide-react";
import { motion } from "framer-motion";
import { matches, visitors } from "@/lib/mock-data";
import { useDatingStore } from "@/store/use-dating-store";

const stats = [
  ["Онлайн", "1 284"],
  ["Анкет", "18 920"],
  ["Матчей", "4 712"],
  ["VIP", "328"]
];

export function DatingDashboard() {
  const { activeProfile, like, skip, likedIds } = useDatingStore();

  return (
    <>
      <section className="space-y-5">
        <div className="glass rounded-lg p-4 sm:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-neonPink">Знакомства вне игры, RP внутри истории</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">Найди своего человека в Лос-Сантосе</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:w-[420px]">
              {stats.map(([label, value]) => (
                  <div className="rounded-lg bg-white/[0.08] p-3" key={label}>
                  <p className="text-lg font-black">{value}</p>
                  <p className="text-xs text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_260px]">
          <motion.article
            animate={{ scale: 1, opacity: 1 }}
            className="glass overflow-hidden rounded-lg"
            initial={{ scale: 0.98, opacity: 0 }}
            key={activeProfile.id}
            transition={{ duration: 0.25 }}
          >
            <div className="relative min-h-[520px]">
              <img alt={activeProfile.nickname} className="absolute inset-0 h-full w-full object-cover" src={activeProfile.avatar} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/25 to-transparent" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                <span className="rounded-md bg-black/[0.45] px-3 py-1 text-sm backdrop-blur">
                  ID {activeProfile.id} · {activeProfile.online ? "online" : "offline"}
                </span>
                {activeProfile.vip && (
                  <span className="rounded-md bg-neonPink px-3 py-1 text-sm font-bold text-white shadow-neon">VIP</span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {activeProfile.interests.map((interest) => (
                    <span className="rounded-md bg-white/[0.12] px-3 py-1 text-sm backdrop-blur" key={interest}>
                      #{interest}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl font-black">
                  {activeProfile.nickname}, {activeProfile.age}
                </h3>
                <p className="mt-1 text-white/70">
                  {activeProfile.gender} · {activeProfile.city}
                </p>
                <p className="mt-3 max-w-2xl text-white/[0.82]">{activeProfile.bio}</p>
                <div className="mt-5 flex gap-3">
                  <button aria-label="Пропустить" className="grid h-14 w-14 place-items-center rounded-lg bg-white/[0.12] transition hover:bg-white/20" onClick={skip} type="button">
                    <X size={26} />
                  </button>
                  <button aria-label="Лайк" className="grid h-14 flex-1 place-items-center rounded-lg bg-gradient-to-r from-neonPink to-neonPurple font-black shadow-neon transition hover:scale-[1.01]" onClick={like} type="button">
                    <span className="flex items-center gap-2">
                      <Heart fill="currentColor" size={22} />
                      Лайк
                    </span>
                  </button>
                  <button aria-label="Скрыть анкету" className="grid h-14 w-14 place-items-center rounded-lg bg-white/[0.12] transition hover:bg-white/20" type="button">
                    <UserX size={24} />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          <aside className="glass rounded-lg p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-black">Фильтры</h3>
              <Search size={18} />
            </div>
            <div className="space-y-4">
              <Field label="Возраст" value="18-35" />
              <Field label="Город" value="Vinewood" />
              <Field label="Пол" value="Любой" />
              <div className="grid grid-cols-2 gap-2">
                {["Онлайн", "Фото", "VIP", "Без спама"].map((item) => (
                  <button className="rounded-md bg-white/10 px-3 py-2 text-sm transition hover:bg-white/[0.15]" key={item} type="button">
                    {item}
                  </button>
                ))}
              </div>
              <button className="h-11 w-full rounded-md border border-neonPurple/50 bg-neonPurple/[0.15] font-bold text-white transition hover:bg-neonPurple/25" type="button">
                Применить
              </button>
            </div>
          </aside>
        </div>
      </section>

      <aside className="space-y-5">
        <Panel title="Матчи" icon={<Heart size={18} />}>
          {matches.map((match) => (
            <button className="flex w-full items-center gap-3 rounded-md p-2 text-left transition hover:bg-white/10" key={match.id} type="button">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-white/[0.12] font-bold">{match.name.slice(0, 2)}</div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{match.name}</p>
                <p className="truncate text-sm text-white/50">{match.last}</p>
              </div>
              {match.unread > 0 && <span className="grid h-6 w-6 place-items-center rounded-full bg-neonPink text-xs font-bold">{match.unread}</span>}
            </button>
          ))}
        </Panel>

        <Panel title="Чат" icon={<MessageCircle size={18} />}>
          <div className="space-y-3">
            <Bubble text="Привет, видел твою анкету. Сегодня играешь?" />
            <Bubble mine text="Да, после 21:00. Можно заехать к казино." />
            <p className="flex items-center gap-2 text-xs text-white/[0.45]">
              <CheckCheck size={14} /> прочитано
            </p>
            <div className="flex gap-2">
              <button className="grid h-10 w-10 place-items-center rounded-md bg-white/10" type="button">
                <Camera size={17} />
              </button>
              <input className="h-10 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-3 outline-none focus:border-neonPink" placeholder="Сообщение" />
              <button className="grid h-10 w-10 place-items-center rounded-md bg-neonPink" type="button">
                <Send size={17} />
              </button>
            </div>
          </div>
        </Panel>

        <Panel title="Гости" icon={<Sparkles size={18} />}>
          {visitors.map((visitor) => (
            <div className="flex items-center justify-between rounded-md p-2" key={visitor.id}>
              <span className="font-semibold">{visitor.name}</span>
              <span className="text-xs text-white/[0.45]">{visitor.time}</span>
            </div>
          ))}
        </Panel>

        <div className="glass rounded-lg p-4">
          <p className="text-sm text-white/50">Лайков за сессию</p>
          <p className="text-3xl font-black text-neonPink">{likedIds.length}</p>
        </div>
      </aside>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/[0.55]">{label}</span>
      <select className="h-11 w-full rounded-md border border-white/10 bg-black/[0.24] px-3 outline-none focus:border-neonPink" defaultValue={value}>
        <option>{value}</option>
        <option>Все</option>
      </select>
    </label>
  );
}

function Panel({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section className="glass rounded-lg p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-black">{title}</h3>
        <span className="text-neonPink">{icon}</span>
      </div>
      {children}
    </section>
  );
}

function Bubble({ text, mine }: { text: string; mine?: boolean }) {
  return (
    <div className={`max-w-[86%] rounded-lg px-3 py-2 text-sm ${mine ? "ml-auto bg-neonPink text-white" : "bg-white/10 text-white/[0.86]"}`}>
      {text}
    </div>
  );
}
