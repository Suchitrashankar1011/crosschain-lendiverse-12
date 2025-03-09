
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Wallet, BarChart3, History, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const DashboardSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Wallet', icon: Wallet, path: '/wallet' },
    { name: 'Markets', icon: BarChart3, path: '/markets' },
    { name: 'History', icon: History, path: '/history' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Help', icon: HelpCircle, path: '/help' },
  ];

  return (
    <div className="h-screen border-r dark:border-lending-border light:border-gray-200 flex flex-col dark:bg-lending-dark light:bg-white">
      <div className="p-6 border-b dark:border-lending-border light:border-gray-200">
        <Link to="/" className="text-2xl font-bold dark:text-white light:text-gray-900">
          Lendiverse
        </Link>
      </div>
      
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                isActive(item.path)
                  ? 'dark:bg-lending-primary/20 light:bg-indigo-100 dark:text-white light:text-gray-900 font-medium'
                  : 'dark:text-gray-300 light:text-gray-700 hover:dark:bg-lending-primary/10 hover:light:bg-indigo-50'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t dark:border-lending-border light:border-gray-200">
        <button
          onClick={logout}
          className="flex w-full items-center px-4 py-3 text-sm rounded-md dark:text-gray-300 light:text-gray-700 hover:dark:bg-lending-primary/10 hover:light:bg-indigo-50 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
