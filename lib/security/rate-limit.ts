// 메모리 기반 간이 레이트 리미터 (동일 IP 기준 1분에 최대 30회 요청)
interface RateLimitRecord {
  count: number;
  lastReset: number;
}

const tracker = new Map<string, RateLimitRecord>();

export function checkRateLimit(ip: string, limit = 30, windowMs = 60000): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = tracker.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > windowMs) {
    record.count = 1;
    record.lastReset = now;
  } else {
    record.count += 1;
  }

  tracker.set(ip, record);

  return {
    success: record.count <= limit,
    remaining: Math.max(0, limit - record.count),
  };
}
