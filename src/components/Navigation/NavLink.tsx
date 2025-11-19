import { NavItem } from './data';

interface NavLinkProps {
  item: NavItem;
  onClick: (id: string) => void;
  isActive: boolean;
}

export default function NavLink({ item, onClick, isActive }: NavLinkProps) {
  return (
    <li>
      <button
        onClick={() => onClick(item.id)}
        className={`nav-link ${isActive ? 'active' : ''}`}
      >
        <span className="nav-icon">{item.icon}</span>
        {item.label}
      </button>
    </li>
  );
}
