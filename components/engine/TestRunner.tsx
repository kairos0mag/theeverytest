'use client';

import { useState } from 'react';
import { TestConfig, Option } from '@/types/test';
import { ResultCard } from './ResultCard';

export function TestRunner({
  config,
  lang = 'ko',
}: {
  config: TestConfig;
  lang?: 'ko' | 'en';
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [resultCode, setResultCode] = useState<string | null>(null);

  const handleSelect = (option: Option) => {
    const nextScores = {
      ...scores,
      [option.scoreTag]: (scores[option.scoreTag] || 0) + 1,
    };
    setScores(nextScores);

    if (currentStep + 1 < config.questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalCode = Object.keys(nextScores).reduce((a, b) =>
        nextScores[a] >= nextScores[b] ? a : b
      );
      setResultCode(finalCode);
    }
  };

  if (resultCode && config.results[resultCode]) {
    return <ResultCard result={config.results[resultCode]} testSlug={config.slug} lang={lang} />;
  }

  const q = config.questions[currentStep];
  const progressPercent = ((currentStep + 1) / config.questions.length) * 100;

  return (
    <div className="w-full max-w-md bg-white border-2 border-slate-900 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
      {/* 프로그레스 바 */}
      <div className="w-full bg-slate-100 h-2.5 rounded-full mb-6 overflow-hidden border border-slate-200">
        <div
          className="bg-orange-500 h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mb-6">
        <span className="text-[11px] font-extrabold text-orange-600 uppercase tracking-wider">
          QUESTION {q.id} / {config.questions.length}
        </span>
        <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1 leading-snug">{q.question}</h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            className="w-full text-left p-4 rounded-2xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200 hover:border-orange-500 text-slate-800 hover:text-slate-900 text-xs sm:text-sm font-semibold transition active:scale-[0.98]"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
