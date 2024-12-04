interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <div className="min-h-screen bg-neutralDark">
      <div className="max-w-screen-sm bg-primary mx-auto min-h-screen shadow-lg rounded-lg">
        <header className="bg-red-500 w-full flex items-center justify-between p-4">
          <h1>Riego: 22/12/2024</h1>
          <div>Icono</div>
        </header>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
