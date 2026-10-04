import { Send, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <span className="font-mono">
          nothing. · {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://t.me/nothing_codes"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
            Telegram
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=joisbakergg@gmail.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
            Почта
          </a>
        </div>
      </div>
    </footer>
  );
}