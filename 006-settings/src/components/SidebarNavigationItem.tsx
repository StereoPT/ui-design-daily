import { FiChevronRight } from 'react-icons/fi';

type SidebarNavigationItemProps = {
  label: string;
  active?: boolean;
};

const SidebarNavigationItem = ({
  label,
  active = false,
}: SidebarNavigationItemProps) => {
  return (
    <li
      className={`flex gap-8 items-center justify-between px-8 py-5 hover:bg-[#1e2129] ${
        active && 'bg-[#1e2129]'
      }`}>
      {label} <FiChevronRight size={20} />
    </li>
  );
};

export default SidebarNavigationItem;
