import { useEffect, useState } from 'react';
import { donationMethods } from '@/data/donationMethods';

export default function DonatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState(donationMethods[0]?.id || '');
  const [reference, setReference] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('');
  }, [name, email, amount, method, reference, note]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting donation...');

    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, amount, method, reference, note }),
      });

      if (!res.ok) {
        const body = await res.json();
        setStatus(body?.error || 'Failed to submit donation');
        return;
      }

      setStatus('Thank you — your donation record was submitted. An administrator will verify the payment.');
      setName('');
      setEmail('');
      setAmount('');
      setReference('');
      setNote('');
    } catch (err) {
      console.error(err);
      setStatus('Network error — please try again later');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Support I AM FOUNDATION</h1>
        <p className="text-slate-600 mb-6">You may donate using the methods below. After making a payment, please submit the donation form so our team can verify and record your gift.</p>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Payment methods</h3>
            <ul className="text-sm text-slate-700 space-y-3">
              {donationMethods.map((m) => (
                <li key={m.id} className="whitespace-pre-line">{m.label}: {m.details}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Donation form</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-sm font-medium text-slate-700 block">Name (optional)</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block">Email (optional)</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block">Amount (PHP)</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} required className="w-full rounded border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block">Payment method</label>
                <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full rounded border px-3 py-2">
                  {donationMethods.map((m) => (
                    <option key={m.id} value={m.id}>{m.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block">Transaction reference (optional)</label>
                <input value={reference} onChange={(e) => setReference(e.target.value)} className="w-full rounded border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block">Note (optional)</label>
                <input value={note} onChange={(e) => setNote(e.target.value)} className="w-full rounded border px-3 py-2" />
              </div>

              <div>
                <button type="submit" className="rounded-3xl bg-blue-600 px-4 py-2 text-white font-semibold">Submit donation record</button>
              </div>
              {status ? <p className="text-sm text-slate-700">{status}</p> : null}
            </form>
          </div>
        </div>

        <p className="text-xs text-slate-500">Note: This site records donation details for administrative tracking only and is not processing payments. Donors must complete payment using the listed methods; then submit this form to help us verify your gift.</p>
      </div>
    </div>
  );
}