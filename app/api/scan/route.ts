import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ status: 'scanning', message: 'New platform scan started. Results will appear in the dashboard within moments.' });
}
