import { adminContacts } from '@/data/adminContacts';

export default function DonatePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Support I AM FOUNDATION</h1>
        <p className="text-slate-600 mb-6">To make a donation, please contact one of our administrators using the details below. The website is a directory to help donors reach the right contact; payments are arranged directly with an admin.</p>

        <div className="space-y-4">
          {adminContacts.map((a) => (
            <div key={a.id} className="rounded-2xl border p-4">
              <p className="font-semibold text-slate-900">{a.name} {a.role ? `— ${a.role}` : ''}</p>
              <div className="mt-2 text-sm text-slate-700">
                {a.email ? <p>Email: <a className="text-blue-600 hover:underline" href={`mailto:${a.email}`}>{a.email}</a></p> : null}
                {a.phone ? <p>Phone: <a className="text-blue-600 hover:underline" href={`tel:${a.phone}`}>{a.phone}</a></p> : null}
                {a.socials?.length ? (
                  <p className="mt-2">{a.socials.map((s) => (
                    <a key={s.platform} className="text-blue-600 hover:underline mr-3" href={s.url} target="_blank" rel="noreferrer">{s.platform}</a>
                  ))}</p>
                ) : null}
                {a.note ? <p className="text-xs text-slate-500 mt-2">{a.note}</p> : null}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 mt-6">If you would like the website to help track donations in the future, I can add a verification form or proof-of-payment upload that notifies admins — let me know when you want that.</p>
      </div>
    </div>
  );
}