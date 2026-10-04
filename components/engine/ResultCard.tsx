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
    <div className="w-full max-w-md bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-7 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] text-center flex flex-col items-center">
      <span className="text-[11px] font-extrabold text-orange-600 uppercase tracking-widest mb-1.5">
        {isEn ? 'DIAGNOSIS RESULT' : '나의 분석 결과'}
      </span>
      <h2 className="text-2xl font-black text-slate-900 mb-1 leading-tight">{result.title}</h2>
      <p className="text-xs font-semibold text-slate-500 mb-5">{result.subtitle}</p>

      <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5 text-left">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{result.description}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-5">
        {result.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[11px] bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full grid grid-cols-2 gap-2.5 mb-6 text-left text-xs">
        <div className="bg-emerald-50/70 border border-emerald-200 p-3 rounded-xl">
          <p className="text-emerald-700 font-extrabold mb-1">{isEn ? 'Best Chemistry' : '환상의 케미'}</p>
          <p className="text-slate-800 font-semibold text-[11px] leading-tight">{result.bestMatch}</p>
        </div>
        <div className="bg-rose-50/70 border border-rose-200 p-3 rounded-xl">
          <p className="text-rose-700 font-extrabold mb-1">{isEn ? 'Worst Chemistry' : '환장의 케미'}</p>
          <p className="text-slate-800 font-semibold text-[11px] leading-tight">{result.worstMatch}</p>
        </div>
      </div>

      <div className="w-full flex gap-2.5">
        <button
          onClick={handleCopyLink}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition active:scale-[0.98]"
        >
          <Share2 size={15} />
          {copied ? (isEn ? 'Link Copied!' : '링크 복사 완료!') : (isEn ? 'Share Result' : '결과 공유하기')}
        </button>
        <button
          onClick={handleRestart}
          className="flex items-center justify-center p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition"
          title={isEn ? 'Retake' : '다시 하기'}
        >
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
}
