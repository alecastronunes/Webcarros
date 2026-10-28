import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function DashboardHeader() {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="w-full items-center flex h-10 rounded-lg text-white font-medium gap-4 px-4 bg-red-500 mb-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/new">Cadastrar carro</Link>

      <button className="ml-auto curso3r-pointer" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
