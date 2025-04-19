import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

export const AppBar = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("authToken");
    navigate("/signin");
  }

  return (
    <>
      <header className="flex justify-between px-10 border-b items-center py-4">
        <h1 className="text-2xl font-bold cursor-pointer">Medium</h1>
        <div onClick={logout} className="cursor-pointer">
          <Avatar authorName="Utkarsh Pant" size={12} textSize="md" />
        </div>
      </header>
    </>
  );
};
