import { careerPowerTest } from '@/config/tests/career-power';
import { careerPowerEnTest } from '@/config/tests/career-power-en';
import { spendingDnaTest } from '@/config/tests/spending-dna';
import { TestRunner } from '@/components/engine/TestRunner';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { TestConfig } from '@/types/test';

export default async function LocalizedTestPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const resolved = await params;
  const lang = resolved.lang === 'en' ? 'en' : 'ko';
  const slug = resolved.slug;
  const isEn = lang === 'en';

  let config: TestConfig | undefined;

  if (slug === 'career-power') {
    config = isEn ? careerPowerEnTest : careerPowerTest;
  } else if (slug === 'spending-dna') {
    config = spendingDnaTest;
  }

  if (!config) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 flex flex-col justify-between">
      <div>
        <header className="border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href={`/${lang}`} className="flex items-center gap-2 font-black text-xl tracking-tight text-indigo-400">
              <Sparkles className="w-5 h-5" />
              <span>TheEveryTest</span>
            </Link>
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
            >
              <ArrowLeft size={14} /> {isEn ? 'Home' : '홈으로'}
            </Link>
          </div>
        </header>

        <div className="py-12 px-4 flex flex-col items-center justify-center">
          <div className="text-center mb-8 max-w-md w-full">
            <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
              {config.category}
            </span>
            <h1 className="text-3xl font-black mt-1 mb-2">
              {config.title}
            </h1>
            <p className="text-slate-400 text-sm">
              {config.description}
            </p>
          </div>

          <TestRunner config={config} lang={lang} />
        </div>
      </div>

      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TheEveryTest. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-300 transition">
              {isEn ? 'Privacy Policy' : '개인정보처리방침'}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-300 transition">
              {isEn ? 'Terms of Service' : '이용약관'}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
