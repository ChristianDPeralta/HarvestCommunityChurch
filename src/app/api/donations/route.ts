import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'donations.json');

function readDonations() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
      return [];
    }

    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Failed to read donations file', err);
    return [];
  }
}

function writeDonations(data: any[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error('Failed to write donations file', err);
    return false;
  }
}

export async function GET() {
  const data = readDonations();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, amount, method, reference, note } = body;

    if (!amount || !method) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const donations = readDonations();
    const id = Date.now().toString();
    const record = {
      id,
      name: name || 'Anonymous',
      email: email || null,
      amount: Number(amount),
      method,
      reference: reference || null,
      note: note || null,
      createdAt: new Date().toISOString(),
    };

    donations.unshift(record);

    const ok = writeDonations(donations);
    if (!ok) {
      return NextResponse.json({ error: 'Failed to save donation' }, { status: 500 });
    }

    return NextResponse.json(record, { status: 201 });
  } catch (err) {
    console.error('Error handling donation POST', err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}