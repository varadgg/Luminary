import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import AdminHeader from '../components/admin/AdminHeader';
import AdminTable from '../components/admin/AdminTable';

export default function Admin() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch('http://localhost:5000/api/registrations', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        
        if (response.ok) {
          setRegistrations(data.data);
        } else {
          setError(data.message || 'Failed to fetch data');
        }
      } catch (err) {
        setError('Error connecting to server. Is the backend running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(reg => 
    reg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    reg.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToExcel = () => {
    const exportData = filteredRegistrations.map(reg => ({
      'Application ID': reg.applicationId || 'N/A',
      'Name': reg.name,
      'Email': reg.email,
      'Mobile': reg.mobile,
      'Domain': reg.domain,
      'College': reg.college,
      'City': reg.city,
      'Date Registered': new Date(reg.createdAt).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
      })
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, `luminary_registrations_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  return (
    <div className="bg-background min-h-screen text-on-surface font-body selection:bg-primary/30">
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-6 py-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-headline font-bold text-white mb-2">Registration Dashboard</h1>
            <p className="text-on-surface-variant">View and manage all student enrollments.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                className="w-full md:w-80 bg-surface-container border border-outline-variant/30 rounded-xl py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={exportToExcel}
              disabled={filteredRegistrations.length === 0}
              className="shrink-0 flex items-center gap-2 bg-green-500/15 hover:bg-green-500/25 text-green-400 border border-green-500/30 px-4 py-2 rounded-xl font-medium text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span className="hidden sm:inline">Download Excel</span>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-xl text-center">
            <span className="material-symbols-outlined text-4xl mb-2">error</span>
            <p>{error}</p>
          </div>
        ) : (
          <div className="glass-panel rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl">
            <AdminTable data={filteredRegistrations} />
          </div>
        )}
      </main>
    </div>
  );
}
