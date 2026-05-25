import { NextResponse } from 'next/server';
import { smartMissions } from '../../../lib/sample-data';

export async function GET() {
  return NextResponse.json(smartMissions);
}
