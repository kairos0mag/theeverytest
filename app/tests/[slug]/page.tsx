import { testRegistry } from '@/config/tests';
import { notFound } from 'next/navigation';

export default async function TestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = testRegistry[slug];
  if (!config) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4 flex flex-col items-center">
      <div className="text-center mb-8 max-w-md">
        <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">{config.category}</span>
        <h1 className="text-2xl font-black mt-1 mb-2">{config.title}</h1>
        <p className="text-slate-400 text-sm">{config.description}</p>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
        <p className="text-indigo-400 font-bold mb-2">테스트 준비 완료</p>
        <p className="text-slate-300 text-sm">기본 구조와 첫 번째 데이터가 성공적으로 연결되었습니다.</p>
      </div>

      <article className="max-w-md w-full mt-12 text-slate-500 text-xs leading-relaxed border-t border-slate-900 pt-6">
        <h3 className="font-bold text-slate-400 mb-2">테스트 안내</h3>
        <p>{config.seoArticle}</p>
      </article>
    </main>
  );
}
