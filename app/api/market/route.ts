import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const per_page = searchParams.get('per_page') ?? '12';
  try {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per_page}&page=1&sparkline=true&price_change_percentage=1h,24h,7d`;
    const res = await fetch(url, { next: { revalidate: 10 } });
    if (!res.ok) throw new Error('Failed');
    const coins = await res.json();
    return NextResponse.json({ coins });
  } catch (e) {
    return NextResponse.json({ coins: [] }, { status: 200 });
  }
}
