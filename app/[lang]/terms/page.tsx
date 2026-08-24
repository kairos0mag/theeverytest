import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition">
          <ArrowLeft size={14} /> {isEn ? 'Back to Home' : '메인으로 돌아가기'}
        </Link>
        
        <h1 className="text-3xl font-black text-white mb-2">{isEn ? 'Terms of Service' : '서비스 이용약관'}</h1>
        <p className="text-xs text-slate-500 mb-8">{isEn ? 'Last Updated: August 25, 2026' : '최종 개정일: 2026년 8월 25일'}</p>

        {isEn ? (
          <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Nature of Service & Disclaimer</h2>
              <p className="text-slate-400">
                All AI diagnostics and personality assessments provided on TheEveryTest are for informational and entertainment purposes only. 
                They should not be construed as clinical diagnoses, financial advice, or official career directives.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Intellectual Property</h2>
              <p className="text-slate-400">
                All question algorithms, UI designs, and content are intellectual property of TheEveryTest. Unlicensed automated scraping or commercial redistribution is strictly prohibited.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. 서비스 성격 및 면책 조항</h2>
              <p className="text-slate-400">
                TheEveryTest의 모든 진단 결과는 참고 및 오락 목적으로 제공됩니다. 전문적인 의료 진단, 재무 자문, 법적 의사결정의 직접 근거로 사용될 수 없습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. 지식재산권</h2>
              <p className="text-slate-400">
                자체 제작된 진단 문항과 UI 디자인의 권리는 TheEveryTest에 있으며, 무단 크롤링 및 상업적 복제를 금합니다.
              </p>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
