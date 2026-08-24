'use client';

import { TestResult } from '@/types/test';
import { Share2, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export function ResultCard({
  result,
  testSlug,
  lang = 'ko',
}: {
  result: TestResult;
  testSlug: string;
  lang?: 'ko' | 'en';
}) {
  const [copied, setCopied] = useState(false);
  const isEn = lang === 'en';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-center flex flex-col items-center">
      <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
        {isEn ? 'TEST RESULT' : '진단 결과'}
      </span>
      <h2 className="text-2xl font-black text-white mb-1">{result.title}</h2>
      <p className="text-sm font-medium text-slate-400 mb-6">{result.subtitle}</p>

      <div className="w-full bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 mb-6 text-left">
        <p className="text-sm text-slate-300 leading-relaxed">{result.description}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {result.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full grid grid-cols-2 gap-3 mb-6 text-left text-xs">
        <div className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl">
          <p className="text-emerald-400 font-bold mb-1">{isEn ? 'Best Synergy' : '환상의 케미'}</p>
          <p className="text-slate-300 font-medium">{result.bestMatch}</p>
        </div>
        <div className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl">
          <p className="text-rose-400 font-bold mb-1">{isEn ? 'Worst Friction' : '환장의 케미'}</p>
          <p className="text-slate-300 font-medium">{result.worstMatch}</p>
        </div>
      </div>

      <div className="w-full flex gap-3">
        <button
          onClick={handleCopyLink}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition"
        >
          <Share2 size={16} />
          {copied ? (isEn ? 'Link Copied!' : '링크 복사됨!') : (isEn ? 'Share Result' : '결과 공유하기')}
        </button>
        <button
          onClick={handleRestart}
          className="flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
          title={isEn ? 'Retake' : '다시 하기'}
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}
