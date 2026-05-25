import { NextResponse } from 'next/server';
import { earningsSummary, earningsOpportunities } from '../../../lib/sample-data';

export async function GET() {
  return NextResponse.json({
    unclaimed: earningsSummary.unclaimed,
    projected: earningsSummary.projected,
    opportunities: earningsOpportunities
  });
}
