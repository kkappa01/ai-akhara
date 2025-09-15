import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
const secret = process.env.REVALIDATE_SECRET;
const incoming = req.nextUrl.searchParams.get('secret') || req.headers.get('x-revalidate-secret');
if (!secret || incoming !== secret) {
return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
}
return NextResponse.json({ ok: true });
}