import { getTestConfig } from '@/config/tests';
import { TestRunner } from '@/components/engine/TestRunner';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function LocalizedTestPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isEn = lang === 'en';
  const activeConfig = getTestConfig(slug, isEn ? 'en' : 'ko');

  if (!activeConfig) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col justify-between">
      <div>
        <header className="border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href={`/${lang}`} className="font-extrabold text-lg tracking-tight text-slate-900">
              TheEveryTest
            </Link>
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
            >
              <ArrowLeft size={14} /> {isEn ? 'Home' : '목록으로'}
            </Link>
          </div>
        </header>

        <div className="py-10 px-4 flex flex-col items-center justify-center">
          <div className="text-center mb-6 max-w-md w-full">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              {activeConfig.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-3 mb-2 text-slate-900">
              {activeConfig.title}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm">
              {activeConfig.description}
            </p>
          </div>

          <TestRunner key={`${slug}-${lang}`} config={activeConfig} lang={isEn ? 'en' : 'ko'} />
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 TheEveryTest. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500 font-medium">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-800 transition">
              {isEn ? 'Privacy Policy' : '개인정보처리방침'}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-800 transition">
              {isEn ? 'Terms of Service' : '이용약관'}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
