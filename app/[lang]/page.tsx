import { getDictionary } from '@/lib/i18n';
import { getTestList } from '@/config/tests';
import Link from 'next/link';
import { ArrowRight, Compass, Heart, Briefcase, Smile, Zap } from 'lucide-react';

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ko') as 'ko' | 'en';
  const dict = await getDictionary(lang);
  const tests = getTestList(lang);

  const featuredTest = tests.find((t) => t.isFeatured) || tests[0];

  const categoryNames: Record<string, { ko: string; en: string; icon: any; color: string }> = {
    career: { ko: '직장·커리어', en: 'Career', icon: Briefcase, color: 'bg-blue-50 text-blue-700 border-blue-200' },
    personality: { ko: '성향·소비', en: 'Mind & Money', icon: Compass, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    love: { ko: '연애·관계', en: 'Love & Dating', icon: Heart, color: 'bg-rose-50 text-rose-700 border-rose-200' },
    fun: { ko: '재미·심리', en: 'Fun & Viral', icon: Smile, color: 'bg-amber-50 text-amber-700 border-amber-200' },
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col justify-between">
      <div>
        {/* 헤더 */}
        <header className="border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href={`/${lang}`} className="font-black text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
              TheEveryTest
            </Link>
            
            <div className="flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 p-1 rounded-full font-bold">
              <Link
                href="/ko"
                className={`px-2.5 py-0.5 rounded-full transition ${
                  lang === 'ko' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                KO
              </Link>
              <Link
                href="/en"
                className={`px-2.5 py-0.5 rounded-full transition ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                EN
              </Link>
            </div>
          </div>
        </header>

        {/* 메인 히어로 타이틀 */}
        <section className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 mb-2">
            {lang === 'en' ? 'Discover Your True Archetype' : '나를 발견하는 확실한 진단'}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
            {lang === 'en' ? 'Fun, fast, and psychologically validated interactive tests.' : '직장, 연애, 소비 성향까지 가장 빠르고 정확하게 분석해보세요.'}
          </p>
        </section>

        {/* 상단 추천 테스트 (Featured Banner) */}
        {featuredTest && (
          <section className="max-w-3xl mx-auto px-4 pb-8">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                {lang === 'en' ? 'Most Viral Right Now' : '지금 가장 인기 있는 테스트'}
              </span>
            </div>

            <Link
              href={`/${lang}/tests/${featuredTest.slug}`}
              className="block group bg-white border-2 border-slate-900 rounded-2xl p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-orange-100 text-orange-800">
                      {categoryNames[featuredTest.category]?.[lang] || featuredTest.category}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {featuredTest.questionCount} {lang === 'en' ? 'Questions' : '문항'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors mb-1.5">
                    {featuredTest.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
                    {featuredTest.description}
                  </p>
                </div>

                <div className="bg-slate-900 group-hover:bg-orange-600 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-1.5 self-stretch sm:self-auto justify-center transition-colors">
                  <span>{dict.home.start}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* 전체 테스트 카드 그리드 */}
        <section className="max-w-3xl mx-auto px-4 pb-16">
          <h3 className="text-base font-bold text-slate-900 mb-3">
            {lang === 'en' ? 'All Tests' : '전체 테스트'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {tests.map((test) => {
              const catInfo = categoryNames[test.category];
              const CatIcon = catInfo?.icon || Compass;

              return (
                <Link
                  key={test.slug}
                  href={`/${lang}/tests/${test.slug}`}
                  className="group bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-5 shadow-sm hover:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md border ${catInfo?.color}`}>
                        <CatIcon className="w-3 h-3" />
                        {catInfo?.[lang] || test.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold">
                        {test.questionCount} {lang === 'en' ? 'Q' : '문항'}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                      {test.title}
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
                      {test.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                    <span>{dict.home.start}</span>
                    <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* 푸터 */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 TheEveryTest. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500 font-medium">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-800 transition">
              {lang === 'en' ? 'Privacy Policy' : '개인정보처리방침'}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-800 transition">
              {lang === 'en' ? 'Terms of Service' : '이용약관'}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
