import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="mb-12 py-6 border-b border-gray-300">
      <div className="container flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-6">
          <li>
            <button type="button" className="btn btn-secondary">
              Login
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-primary">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
