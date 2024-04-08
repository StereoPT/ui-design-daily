import SidebarNavigationItem from './SidebarNavigationItem';

const SidebarNavigation = () => {
  return (
    <ul className="text-white cursor-pointer">
      <SidebarNavigationItem label="Software Update" />
      <SidebarNavigationItem label="General Settings" active />
      <SidebarNavigationItem label="Apps" />
      <SidebarNavigationItem label="Storage" />
      <SidebarNavigationItem label="Data Usage" />
      <SidebarNavigationItem label="Security" />
      <SidebarNavigationItem label="Other Settings" />
    </ul>
  );
};

export default SidebarNavigation;
