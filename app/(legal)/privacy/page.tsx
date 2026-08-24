import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition">
          <ArrowLeft size={14} /> 메인으로 돌아가기
        </Link>
        
        <h1 className="text-3xl font-black text-white mb-6">개인정보처리방침</h1>
        <p className="text-xs text-slate-500 mb-8">최종 개정일: 2026년 8월 25일</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. 수집하는 개인정보 항목 및 수집 방법</h2>
            <p className="text-slate-400">
              TheEveryTest(이하 &apos;서비스&apos;)는 기본적으로 별도의 회원가입 없이 모든 테스트 콘텐츠를 무료로 이용할 수 있습니다. 
              서비스 이용 과정에서 이용자의 익명 테스트 응답 데이터, 브라우저 종류, 접속 기기 정보, 쿠키(Cookie), IP 주소 등이 통계 및 서비스 개선 목적으로 자동 생성되어 수집될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. 개인정보의 이용 목적</h2>
            <p className="text-slate-400">
              수집된 익명 정보는 테스트 결과 산출, 통계 분석, 서비스 품질 개선 및 구글 애드센스(Google AdSense) 등 제휴 광고 플랫폼을 통한 맞춤형 광고 게재를 위해서만 활용됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. 구글 광고 및 쿠키(Cookie) 정책</h2>
            <p className="text-slate-400">
              본 서비스는 제3자 광고 사업자(Google)의 광고 서비스를 이용합니다. Google은 이용자의 본 사이트 및 다른 웹사이트 방문 기록을 바탕으로 관심 기반 광고를 제공하기 위해 쿠키를 사용합니다. 
              이용자는 브라우저 설정 또는 Google 광고 설정 페이지를 통해 맞춤형 광고용 쿠키 사용을 언제든지 거부할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. 개인정보의 보유 및 파기</h2>
            <p className="text-slate-400">
              수집된 익명 통계 데이터는 이용 목적이 달성된 후 지체 없이 파기되며, 어떠한 경우에도 개인을 식별할 수 있는 형태로 보관되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. 문의처</h2>
            <p className="text-slate-400">
              개인정보 보호 관련 문의사항은 서비스 관리자 이메일(kairos0mag@gmail.com)로 문의해 주시기 바랍니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
