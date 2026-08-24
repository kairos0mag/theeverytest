import { testRegistry } from '@/config/tests';
import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const tests = Object.values(testRegistry);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">
      {/* 상단 헤더 */}
      <header className="border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-indigo-400">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span>TheEveryTest</span>
          </Link>
          <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            AI 심리·성향 허브
          </span>
        </div>
      </header>

      {/* 히어로 영역 */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-semibold mb-6">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>매주 새로운 AI 성향 테스트 업데이트</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-slate-100">
          나를 발견하는 가장 빠른 방법
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          AI 분석 엔진 기반 직장인 전투력 진단부터 다양한 바이럴 심리 테스트를 무료로 즐겨보세요.
        </p>
      </section>

      {/* 테스트 카드 그리드 */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-200">인기 테스트 목록</h2>
          <span className="text-xs text-slate-500">{tests.length}개의 테스트 이용 가능</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tests.map((test) => (
            <Link
              key={test.slug}
              href={`/tests/${test.slug}`}
              className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-900/60 px-2.5 py-0.5 rounded-md">
                    {test.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {test.questions.length}문항
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
                <span>테스트 시작하기</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TheEveryTest. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-slate-300 transition">이용약관</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
