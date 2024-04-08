import SidebarNavigation from './SidebarNavigation';

const Sidebar = () => {
  return (
    <div className="bg-[#3d5e6e]">
      <ul className="px-4 py-8">
        <div className="text-white px-4 py-4">Settings</div>
        <li className="text-[#ccbaab] font-light py-3">Airplane mode</li>
        <li className="text-[#ccbaab] font-light py-3">WI-FI</li>
        <li className="text-[#ccbaab] font-light py-3">Bluetooth</li>
        <li className="text-[#ccbaab] font-light py-3">Notifications</li>
      </ul>
      <SidebarNavigation />
    </div>
  );
};

export default Sidebar;
