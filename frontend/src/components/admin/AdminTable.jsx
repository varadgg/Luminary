export default function AdminTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center text-on-surface-variant">
        <span className="material-symbols-outlined text-4xl mb-3 opacity-50">inbox</span>
        <p>No registrations found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-surface-container-high text-on-surface-variant text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4 font-medium">Application ID</th>
            <th className="px-6 py-4 font-medium">Name</th>
            <th className="px-6 py-4 font-medium">Email</th>
            <th className="px-6 py-4 font-medium">Mobile</th>
            <th className="px-6 py-4 font-medium">Domain</th>
            <th className="px-6 py-4 font-medium">College</th>
            <th className="px-6 py-4 font-medium">City</th>
            <th className="px-6 py-4 font-medium">Date Registered</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10 text-on-surface">
          {data.map((row, index) => (
            <tr key={row._id || index} className="hover:bg-surface-container/50 transition-colors">
              <td className="px-6 py-4 font-mono text-primary font-bold">{row.applicationId || 'N/A'}</td>
              <td className="px-6 py-4 font-medium text-white">{row.name}</td>
              <td className="px-6 py-4 text-white">{row.email}</td>
              <td className="px-6 py-4 text-on-surface-variant">{row.mobile}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {row.domain}
                </span>
              </td>
              <td className="px-6 py-4 truncate max-w-[150px]">{row.college}</td>
              <td className="px-6 py-4">{row.city}</td>
              <td className="px-6 py-4 text-on-surface-variant">
                {new Date(row.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric', month: 'short', year: 'numeric'
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
