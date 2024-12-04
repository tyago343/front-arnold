import { BsPerson } from "react-icons/bs";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <div className="min-h-screen bg-neutralLight px-2 sm:px-10">
      <div className="max-w-screen-sm bg-white mx-auto min-h-screen shadow-lg rounded-lg">
        <header className="w-full flex items-center justify-between p-4 border-b border-neutral">
          <h1 className="text-info text-lg">Próximo evento: 22/12/2024</h1>
          <div className="text-neutralDark cursor-pointer">
            <BsPerson size={24} />
          </div>
        </header>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
