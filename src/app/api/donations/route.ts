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
  return NextResponse.json({ error: 'Donation recording has been disabled. Please contact an administrator via the Donate page.' }, { status: 410 });
}

export async function POST() {
  return NextResponse.json({ error: 'Donation recording has been disabled. Please contact an administrator via the Donate page.' }, { status: 410 });
}