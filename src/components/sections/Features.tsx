"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Gauge,
  ShieldCheck,
  Wrench,
  BadgePercent,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Подбор под задачи",
    desc: "Собираем конфигурацию под игры, работу, монтаж, 3D или ИИ — без лишних деталей.",
  },
  {
    icon: Gauge,
    title: "Стресс-тесты",
    desc: "Прогоняем каждую сборку в играх и бенчмарках. Проверяем температуры и стабильность.",
  },
  {
    icon: ShieldCheck,
    title: "Только новые комплектующие",
    desc: "Все детали в заводской упаковке, с официальной гарантией. Никакого б/у и серого импорта.",
  },
  {
    icon: Wrench,
    title: "Аккуратная сборка",
    desc: "Кабель-менеджмент, чистый монтаж, без лишних проводов. Фото сборки — до оплаты.",
  },
  {
    icon: BadgePercent,
    title: "Честные цены",
    desc: "Считаем смету открыто: вы видите стоимость каждой детали и работы отдельно.",
  },
  {
    icon: Headphones,
    title: "Поддержка после",
    desc: "Помогаем с драйверами, апгрейдами и диагностикой. Отвечаем лично в течение часа.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
            Почему nothing_pc
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-xl mb-16 text-white">
            Собираем так, как собрали бы себе
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-colors"
            >
              <f.icon
                className="w-5 h-5 text-white/40 mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-sm font-medium mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}