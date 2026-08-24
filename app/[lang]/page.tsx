import { getDictionary } from '@/lib/i18n';
import { getTestList } from '@/config/tests';
import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp, Compass, Heart, Briefcase, Smile } from 'lucide-react';

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ko') as 'ko' | 'en';
  const dict = await getDictionary(lang);
  const tests = getTestList(lang);

  // 인기 테스트(Featured) 분리
  const featuredTests = tests.filter((t) => t.isFeatured);
  const otherTests = tests.filter((t) => !t.isFeatured);

  // 카테고리 이름 매핑
  const categoryNames: Record<string, { ko: string; en: string; icon: any }> = {
    career: { ko: '직장·커리어', en: 'Career & Work', icon: Briefcase },
    personality: { ko: '성향·심리', en: 'Personality', icon: Compass },
    love: { ko: '연애·관계', en: 'Love & Dating', icon: Heart },
    fun: { ko: '재미·유머', en: 'Fun & Viral', icon: Smile },
  };

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
        <section className="max-w-4xl mx-auto px-4 pt-16 pb-10 text-center">
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

        {/* 1. 인기 테스트 섹션 (맨 위 강조 배치) */}
        {featuredTests.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 pb-12">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                {lang === 'en' ? 'Trending & Featured' : '🔥 실시간 인기 테스트'}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {featuredTests.map((test) => (
                <Link
                  key={test.slug}
                  href={`/${lang}/tests/${test.slug}`}
                  className="group relative bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 hover:from-indigo-900/40 border border-indigo-500/30 hover:border-indigo-500 rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-900/60 border border-indigo-700/50 px-2.5 py-0.5 rounded-md">
                        {categoryNames[test.category]?.[lang] || test.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {lang === 'en' ? `${test.questionCount} Questions` : `${test.questionCount}문항`}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">
                      {test.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                      {test.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-indigo-600 group-hover:bg-indigo-500 text-white px-5 py-3 rounded-2xl text-xs font-bold transition whitespace-nowrap self-stretch sm:self-auto justify-center">
                    <span>{dict.home.start}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 2. 카테고리별 전체 테스트 목록 */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <h2 className="text-lg font-bold text-slate-200 mb-6">{dict.home.popular}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tests.map((test) => {
              const catInfo = categoryNames[test.category];
              const CatIcon = catInfo?.icon || Compass;

              return (
                <Link
                  key={test.slug}
                  href={`/${lang}/tests/${test.slug}`}
                  className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded-md">
                        <CatIcon className="w-3 h-3 text-indigo-400" />
                        {catInfo?.[lang] || test.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {lang === 'en' ? `${test.questionCount} Questions` : `${test.questionCount}문항`}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">
                      {test.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-6">
                      {test.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors">
                    <span>{dict.home.start}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* 푸터 */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TheEveryTest. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-300 transition">
              {isEnLike(lang) ? 'Privacy Policy' : '개인정보처리방침'}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-300 transition">
              {isEnLike(lang) ? 'Terms of Service' : '이용약관'}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function isEnLike(lang: string) {
  return lang === 'en';
}
