import { getDictionary } from '@/lib/i18n';
import { testRegistry } from '@/config/tests';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default async function LangPage({ params }: { params: { lang: string } }) {
  // lang 파라미터가 없으면 'ko'를 기본값으로 사용
  const lang = params.lang as 'ko' | 'en' || 'ko';
  const dict = await getDictionary(lang);
  const tests = Object.values(testRegistry);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500">
      {/* 헤더 */}
      <header className="border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2 font-black text-xl tracking-tight text-indigo-400">
            <Sparkles className="w-5 h-5" />
            <span>TheEveryTest</span>
          </Link>
          <div className="flex gap-1 text-xs">
             <Link href="/ko" className={`${lang === 'ko' ? 'font-bold text-white' : 'text-slate-500'}`}>KO</Link>
             <span className="text-slate-700">|</span>
             <Link href="/en" className={`${lang === 'en' ? 'font-bold text-white' : 'text-slate-500'}`}>EN</Link>
          </div>
        </div>
      </header>

      {/* 히어로 영역 - 언어 팩 적용 */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-slate-100">
          {dict.home.title}
        </h1>
        <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
          {dict.home.subtitle}
        </p>
      </section>

      {/* 테스트 카드 - 언어 팩 및 로케일 URL 적용 */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-lg font-bold text-slate-200 mb-6">{dict.home.popular}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tests.map((test) => (
            <Link key={test.slug} href={`/${lang}/tests/${test.slug}`} className="border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400">{test.category}</span>
                <h3 className="text-lg font-bold text-slate-100 mt-2">{test.title}</h3>
                <p className="text-slate-400 text-xs mt-1 mb-6">{test.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-semibold text-slate-300">
                <span>{dict.home.start}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
