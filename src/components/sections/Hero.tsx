"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[12px] text-white/50 border border-white/10 rounded-full px-3.5 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Сборка и доставка по Беларуси
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[42px] leading-[1.05] sm:text-[56px] md:text-[68px] font-medium tracking-[-0.035em] mb-7 text-white"
          >
            Компьютеры под задачи.
            <br />
            <span className="text-white/35">Без переплат.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[15px] md:text-[16px] text-white/50 leading-relaxed max-w-md mb-10"
          >
            Собираем ПК под игры, работу, монтаж и ИИ. Подбираем комплектующие
            под бюджет, тестируем каждую сборку, даём гарантию.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://t.me/nothing_codes"
              target="_blank"
              rel="noopener"
              className="btn-light inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[14px] font-medium"
            >
              Обсудить сборку
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=joisbakergg@gmail.com&su=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%20%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8%20%D0%9F%D0%9A&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D1%83%20%D0%9F%D0%9A.%0A%0A%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8%3A%20%0A%D0%91%D1%8E%D0%B4%D0%B6%D0%B5%D1%82%3A%20"
              target="_blank"
              rel="noopener"
              className="btn-outline inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[14px] font-medium"
            >
              Написать на почту
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 text-[12px] font-mono text-white/30 tracking-tight"
          >
            Подбор комплектующих&nbsp;&nbsp;·&nbsp;&nbsp;Стресс-тесты
            &nbsp;&nbsp;·&nbsp;&nbsp;Гарантия 12 месяцев
          </motion.p>
        </div>
      </div>
    </section>
  );
}