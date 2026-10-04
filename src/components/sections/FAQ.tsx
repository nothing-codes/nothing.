"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Сколько стоит собрать компьютер?",
    a: "Стоимость зависит от задач и бюджета. Сборка и настройка входят в стоимость комплектующих — отдельно за работу мы не берём. Минимальная конфигурация под офис и учёбу начинается от базового уровня, игровая — от среднего. Точную смету присылаем после того, как узнаем ваши задачи.",
  },
  {
    q: "Что входит в сборку?",
    a: "Подбор комплектующих, закупка, сборка, кабель-менеджмент, установка Windows и драйверов, стресс-тесты и финальная проверка. Привозим готовый ПК — включаете и работаете.",
  },
  {
    q: "Какие комплектующие вы используете?",
    a: "Только новые, с официальной гарантией. AMD, Intel, NVIDIA, ASUS, MSI, Gigabyte, Kingston, Samsung, WD и другие проверенные бренды. Никакого б/у и серого импорта — по запросу присылаем фото и чеки на каждую деталь.",
  },
  {
    q: "Есть гарантия?",
    a: "Да, 12 месяцев на сборку и настройку. На комплектующие действует гарантия производителя — от 1 до 5 лет в зависимости от детали. Если что-то сломалось — помогаем с диагностикой и заменой.",
  },
  {
    q: "Можно апгрейдить готовый ПК?",
    a: "Да. Меняем видеокарту, добавляем память, SSD, меняем блок питания или охлаждение. Можно привезти свой системник — посмотрим, что реально улучшить в вашем бюджете.",
  },
  {
    q: "Сколько идёт сборка и доставка?",
    a: "Стандартная сборка — 2–4 рабочих дня с момента подтверждения конфигурации. Доставка по Минску — в день готовности, по областям — 2–3 дня. Отправляем с трек-номером и полной страховкой.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
            Вопросы
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-white">
            Отвечаем заранее
          </h2>
        </motion.div>

        <div className="border-t border-white/5">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-white/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-white/80 transition-colors"
                >
                  <span className="text-sm md:text-base font-medium text-white">
                    {f.q}
                  </span>
                  <Plus
                    className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-white/50 leading-relaxed pb-5 pr-8">
                    {f.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}