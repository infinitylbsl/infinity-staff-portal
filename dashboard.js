import React, { useState } from 'react';
import { Bell, Users, FileText, Layout, Landmark, CreditCard, ShieldCheck, PieChart } from 'lucide-react';

const InfinityPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Professional Minimalist Theme (Blue-Green & White)
  const theme = {
    sidebar: "bg-slate-900",
    activeNav: "bg-gradient-to-r from-teal-600 to-cyan-600 shadow-md",
    accent: "text-teal-600",
    bg: "bg-[#f8fafc]",
    card: "bg-white border border-slate-200 shadow-sm rounded-xl"
  };

  return (
    <div className={`min-h-screen ${theme.bg} flex flex-col md:flex-row font-sans text-slate-900`}>
      {/* SIDEBAR */}
      <nav className={`w-full md:w-72 ${theme.sidebar} text-white p-6 flex flex-col`}>
        <div className="mb-10 px-2">
          <h1 className="text-xl font-bold tracking-tight text-white">INFINITY <span className="text-teal-400">LBSL</span></h1>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Staff Portal v2.0</p>
        </div>
        
        <ul className="space-y-2 flex-1">
          <NavItem icon={<Layout size={18}/>} label="Executive Overview" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={<Users size={18}/>} label="HRMS & Attendance" active={activeTab === 'hrms'} onClick={() => setActiveTab('hrms')} />
          <NavItem icon={<CreditCard size={18}/>} label="Loan Management" active={activeTab === 'loans'} onClick={() => setActiveTab('loans')} />
          <NavItem icon={<Landmark size={18}/>} label="Empower CBS Data" active={activeTab === 'cbs'} onClick={() => setActiveTab('cbs')} />
          <NavItem icon={<Bell size={18}/>} label="Notices & Circulars" active={activeTab === 'notices'} onClick={() => setActiveTab('notices')} />
        </ul>

        <div className="mt-auto p-4 bg-slate-800/50 rounded-lg text-xs text-slate-400">
          Logged in as: <strong>HOD_User</strong>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 capitalize">{activeTab.replace('_', ' ')}</h2>
            <p className="text-slate-500 text-sm mt-1">Infinity Laghubitta Bittiya Sanstha Ltd. Centralized Management</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-200 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold">A</div>
            <span className="text-sm font-semibold">Admin Panel</span>
          </div>
        </header>

        {/* INTEGRATED QUICK STATS */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Active Staff" value="156" trend="+4 this month" icon={<Users className="text-teal-600"/>} />
            <StatCard title="Loan Portfolio" value="NPR 12.4M" trend="Empower Live" icon={<PieChart className="text-blue-600"/>} />
            <StatCard title="Pending Approvals" value="23" trend="Requires Action" icon={<ShieldCheck className="text-amber-600"/>} />
            <StatCard title="Daily Collection" value="NPR 840K" trend="92% Target" icon={<Landmark className="text-cyan-600"/>} />
          </div>
        )}

        {/* DYNAMIC CONTENT AREA */}
        <div className={`mt-8 ${theme.card} overflow-hidden`}>
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800">System Integration Module</h3>
          </div>
          
          <div className="p-6">
            {activeTab === 'cbs' && (
              <div className="animate-in fade-in duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-semibold text-teal-800">Empower CBS Sync: Branch Reports</h4>
                  <button className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-md border border-teal-200 hover:bg-teal-100">Refresh Data</button>
                </div>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold">
                      <tr>
                        <th className="p-4">Branch Code</th>
                        <th className="p-4">Staff Count</th>
                        <th className="p-4">Outstanding Loan</th>
                        <th className="p-4">Savings Balance</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 font-medium">BR-001 (Bharatpur)</td>
                        <td className="p-4">12</td>
                        <td className="p-4 font-semibold">4,200,500.00</td>
                        <td className="p-4 text-teal-600 font-semibold">1,840,000.00</td>
                        <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">SYNCED</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-700 flex items-center gap-2"><Bell size={16}/> Recent Notices</h4>
                  <div className="p-4 border-l-4 border-teal-500 bg-teal-50/30 rounded-r-lg">
                    <p className="text-xs font-bold text-teal-700 mb-1">MARCH 30, 2026</p>
                    <p className="text-sm font-semibold">System Maintenance: Empower CBS will be offline for 2 hours tonight.</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
                  <FileText className="text-slate-300 mb-2" size={40} />
                  <p className="text-sm text-slate-500">Drop files here to upload Monthly Branch Reports<br/>(Photos or PDFs accepted)</p>
                </div>
              </div>
            )}

            {activeTab === 'hrms' && <div className="p-10 text-center text-slate-400">HRMS Database Connected to Supabase. Staff directory loading...</div>}
            {activeTab === 'loans' && <div className="p-10 text-center text-slate-400">Loan Approval Workflow Module (Empower Integrated).</div>}
            {activeTab === 'notices' && <div className="p-10 text-center text-slate-400">Internal Circulars & PDF Notice Board.</div>}
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components
const NavItem = ({ icon, label, active, onClick }) => (
  <li 
    onClick={onClick}
    className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-200 font-medium text-sm ${
      active ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-900/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
    }`}
  >
    {icon} <span>{label}</span>
  </li>
);

const StatCard = ({ title, value, trend, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between h-32">
    <div className="flex justify-between items-start">
      <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{trend}</span>
    </div>
    <div>
      <p className="text-2xl font-black text-slate-800 tracking-tight">{value}</p>
      <p className="text-xs font-bold text-slate-400 uppercase">{title}</p>
    </div>
  </div>
);

export default InfinityPortal;