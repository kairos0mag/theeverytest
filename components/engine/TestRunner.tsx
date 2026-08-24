'use client';

import { useState } from 'react';
import { TestConfig, Option } from '@/types/test';
import { ResultCard } from './ResultCard';

export function TestRunner({ config }: { config: TestConfig }) {
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
      // 최빈값(가장 점수가 높은 태그)으로 결과 계산
      const finalCode = Object.keys(nextScores).reduce((a, b) =>
        nextScores[a] >= nextScores[b] ? a : b
      );
      setResultCode(finalCode);
    }
  };

  if (resultCode && config.results[resultCode]) {
    return <ResultCard result={config.results[resultCode]} testSlug={config.slug} />;
  }

  const q = config.questions[currentStep];
  const progressPercent = ((currentStep + 1) / config.questions.length) * 100;

  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
      <div className="w-full bg-slate-800/80 h-2 rounded-full mb-8 overflow-hidden">
        <div
          className="bg-indigo-500 h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mb-8">
        <span className="text-xs font-bold text-indigo-400">
          Q{q.id} / {config.questions.length}
        </span>
        <h2 className="text-xl font-black text-white mt-1 leading-snug">{q.question}</h2>
      </div>

      <div className="flex flex-col gap-3">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt)}
            className="w-full text-left p-4 rounded-2xl bg-slate-950/60 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500 text-slate-200 text-sm font-medium transition active:scale-[0.98]"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
