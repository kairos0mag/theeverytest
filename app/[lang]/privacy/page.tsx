import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition">
          <ArrowLeft size={14} /> {isEn ? 'Back to Home' : '메인으로 돌아가기'}
        </Link>
        
        <h1 className="text-3xl font-black text-white mb-2">{isEn ? 'Privacy Policy' : '개인정보처리방침'}</h1>
        <p className="text-xs text-slate-500 mb-8">{isEn ? 'Last Updated: August 25, 2026' : '최종 개정일: 2026년 8월 25일'}</p>

        {isEn ? (
          <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Information Collection and Use</h2>
              <p className="text-slate-400">
                TheEveryTest (&quot;Service&quot;) does not require user registration. All diagnostic tests are free to access anonymously. 
                We may automatically collect non-personally identifiable diagnostic responses, browser type, device information, IP address, and Cookies for traffic analysis and platform improvement.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Google AdSense and Cookies Policy</h2>
              <p className="text-slate-400">
                Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s previous visits to our website or other websites. 
                You may opt out of personalized advertising by visiting Google Ads Settings.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Data Retention and Contact</h2>
              <p className="text-slate-400">
                Aggregated statistical data is kept strictly anonymous. For privacy-related inquiries, contact us at kairos0mag@gmail.com.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. 개인정보 수집 항목 및 목적</h2>
              <p className="text-slate-400">
                TheEveryTest는 별도의 회원가입 없이 익명으로 테스트를 제공합니다. 서비스 품질 향상 및 통계 집계를 위해 비식별 응답 데이터, 접속 환경 정보, 쿠키(Cookie)가 자동 수집될 수 있습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. 구글 광고 및 쿠키 정책</h2>
              <p className="text-slate-400">
                본 서비스는 구글 애드센스(Google AdSense) 광고를 게재합니다. 제3자 사업자인 Google은 쿠키를 활용하여 맞춤형 광고를 제공하며, 브라우저 설정을 통해 쿠키 수집을 거부할 수 있습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. 문의처</h2>
              <p className="text-slate-400">
                개인정보 관련 문의: kairos0mag@gmail.com
              </p>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
