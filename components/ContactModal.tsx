'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import type { ThemeMode } from '@/lib/types';

export function ContactModal({
  isOpen,
  onClose,
  theme,
}: {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${email || 'visitor'}`);
    const body = encodeURIComponent(`Sender: ${email}\n\n${message}`);
    window.location.href = `mailto:ayub.banaizade@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-[6px]"
        aria-label="Close contact form"
      />
      <div className={`relative z-10 w-full max-w-xl rounded-[28px] border p-6 shadow-2xl md:p-8 ${theme === 'dark' ? 'border-white/10 bg-[#111a28] text-white' : 'border-ink/10 bg-white text-ink'}`}>
        <button
          onClick={onClose}
          className={`absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-ink/10 bg-ink/0'}`}
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">Let&apos;s Talk</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Send a message</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Your email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className={`w-full rounded-2xl border px-4 py-3 outline-none ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white placeholder:text-white/35' : 'border-ink/10 bg-white text-ink placeholder:text-ink/35'}`}
              placeholder="name@example.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Message</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={6}
              className={`w-full rounded-2xl border px-4 py-3 outline-none ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white placeholder:text-white/35' : 'border-ink/10 bg-white text-ink placeholder:text-ink/35'}`}
              placeholder="Tell me about your project..."
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold ${theme === 'dark' ? 'bg-white text-[#0d1522]' : 'bg-ink text-white'}`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
