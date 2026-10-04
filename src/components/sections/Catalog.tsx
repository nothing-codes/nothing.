"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, Mail } from "lucide-react";

export function Catalog() {
  return (
    <section id="catalog" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
            Сборки
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white max-w-xl">
            Готовые конфигурации и сборка под вас
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/8 bg-[#0F0F0F] overflow-hidden"
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 h-full">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/[0.06] backdrop-blur-sm h-full min-h-[180px]"
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] mb-6">
              <Send className="w-5 h-5 text-white/60" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4 text-white">
              Соберём под ваш бюджет
            </h3>

            <p className="text-white/50 leading-relaxed max-w-md mx-auto mb-10 text-[15px]">
              Есть готовые конфигурации под игры, работу и монтаж — от базовых
              до топовых. Или соберём с нуля под ваши задачи и бюджет. Пришлём
              смету с ценами на каждую деталь.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.me/nothing_codes"
                target="_blank"
                rel="noopener"
                className="btn-light inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-medium"
              >
                Запросить конфигурации
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=joisbakergg@gmail.com&su=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%20%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8%20%D0%9F%D0%9A&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D1%83%20%D0%9F%D0%9A.%0A%0A%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8%3A%20%0A%D0%91%D1%8E%D0%B4%D0%B6%D0%B5%D1%82%3A%20"
                target="_blank"
                rel="noopener"
                className="btn-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-medium"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                Написать на почту
              </a>
            </div>

            <p className="mt-8 text-[12px] font-mono text-white/30 tracking-tight">
              Смета бесплатно&nbsp;&nbsp;·&nbsp;&nbsp;Отвечаем в течение
              часа&nbsp;&nbsp;·&nbsp;&nbsp;Без предоплаты
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}