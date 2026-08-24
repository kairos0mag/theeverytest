import { getDictionary } from '@/lib/i18n';
import { testRegistry } from '@/config/tests';
import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ko') as 'ko' | 'en';
  const dict = await getDictionary(lang);
  const tests = Object.values(testRegistry);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 flex flex-col justify-between">
      <div>
        {/* 상단 헤더 */}
        <header className="border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href={`/${lang}`} className="flex items-center gap-2 font-black text-xl tracking-tight text-indigo-400">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>TheEveryTest</span>
            </Link>
            
            {/* 언어 스위처 */}
            <div className="flex items-center gap-1.5 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
              <Link
                href="/ko"
                className={`transition px-2 py-0.5 rounded ${
                  lang === 'ko' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                KO
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/en"
                className={`transition px-2 py-0.5 rounded ${
                  lang === 'en' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </Link>
            </div>
          </div>
        </header>

        {/* 히어로 영역 */}
        <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-semibold mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'New AI Personality Tests Every Week' : '매주 새로운 AI 성향 테스트 업데이트'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-slate-100">
            {dict.home.title}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {dict.home.subtitle}
          </p>
        </section>

        {/* 테스트 카드 그리드 */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-200">{dict.home.popular}</h2>
            <span className="text-xs text-slate-500">
              {lang === 'en' ? `${tests.length} Tests Available` : `${tests.length}개의 테스트 이용 가능`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tests.map((test) => (
              <Link
                key={test.slug}
                href={`/${lang}/tests/${test.slug}`}
                className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-900/60 px-2.5 py-0.5 rounded-md">
                      {test.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {lang === 'en' ? `${test.questions.length} Questions` : `${test.questions.length}문항`}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">
                    {lang === 'en' && test.slug === 'career-power'
                      ? 'AI Career Power & Burnout Diagnostic'
                      : test.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-6">
                    {lang === 'en' && test.slug === 'career-power'
                      ? 'Discover your workplace survival archetype and career combat level with 20 questions.'
                      : test.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors">
                  <span>{dict.home.start}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* 푸터 (개인정보처리방침 / 이용약관 포함) */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TheEveryTest. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-300 transition">
              {lang === 'en' ? 'Privacy Policy' : '개인정보처리방침'}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-300 transition">
              {lang === 'en' ? 'Terms of Service' : '이용약관'}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
