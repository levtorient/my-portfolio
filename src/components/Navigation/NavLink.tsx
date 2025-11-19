import { NavItem } from './data'

interface NavLinkProps {
  item: NavItem
  onClick: (id: string) => void
}

export default function NavLink({ item, onClick }: NavLinkProps) {
  return (
    <li>
      <button onClick={() => onClick(item.id)} className="nav-link">
        <span className="nav-icon">{item.icon}</span>
        {item.label}
      </button>
    </li>
  )
}
