import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }: any) {
  return (
    <NavLink
      to={to}
      className="flex flex-col items-center gap-2 group"
    >
      {({ isActive }) => (
        <>
          <div
            className={`h-[2px] w-8 transition-all ${
              isActive ? "bg-black opacity-100" : "opacity-0"
            }`}
          />
          <div className="nav-pill">{children}</div>
        </>
      )}
    </NavLink>
  );
}