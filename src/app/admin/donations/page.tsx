import AdminAuthGuard from '@/components/AdminAuthGuard';
import { useEffect, useState } from 'react';

type Donation = {
  id: string;
  name: string | null;
  email: string | null;
  amount: number;
  method: string;
  reference: string | null;
  note: string | null;
  createdAt: string;
};

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchDonations = async () => {
      try {
        const res = await fetch('/api/donations');
        if (!res.ok) return;
        const data = await res.json();
        if (mounted) setDonations(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    void fetchDonations();
    return () => { mounted = false; };
  }, []);

  return (
    <AdminAuthGuard>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Donation records</h1>
          {loading ? (
            <p className="text-slate-600">Loading…</p>
          ) : donations.length === 0 ? (
            <p className="text-slate-600">No donation records yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-left text-slate-700 border-b">
                    <th className="px-3 py-2">Date</th>
                    <th className="px-3 py-2">Donor</th>
                    <th className="px-3 py-2">Email</th>
                    <th className="px-3 py-2">Amount</th>
                    <th className="px-3 py-2">Method</th>
                    <th className="px-3 py-2">Reference</th>
                    <th className="px-3 py-2">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((d) => (
                    <tr key={d.id} className="border-b last:border-b-0">
                      <td className="px-3 py-2 align-top">{new Date(d.createdAt).toLocaleString()}</td>
                      <td className="px-3 py-2 align-top">{d.name || 'Anonymous'}</td>
                      <td className="px-3 py-2 align-top">{d.email || '-'}</td>
                      <td className="px-3 py-2 align-top">{d.amount.toLocaleString()} PHP</td>
                      <td className="px-3 py-2 align-top">{d.method}</td>
                      <td className="px-3 py-2 align-top">{d.reference || '-'}</td>
                      <td className="px-3 py-2 align-top">{d.note || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminAuthGuard>
  );
}