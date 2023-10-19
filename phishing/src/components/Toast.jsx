import { useAuthContext } from "../context/AuthContext";

export const Toast = ({ text }) => {
  const { loginSuccess, setLoginSuccess, logoutSuccess, setLogoutSuccess } = useAuthContext();
  if(loginSuccess || logoutSuccess) {
    setTimeout(() => {
      setLoginSuccess(false)
      setLogoutSuccess(false)
    }, 2000);
  }
  return (
    <>
      <div className="flex justify-center z-50 w-full fixed top-10 ">
        <div className={`font-bold w-[50%] px-4 py-2 rounded-md ${loginSuccess && 'bg-green-200 text-green-600'} ${logoutSuccess && 'bg-red-200 text-red-600'}`}>
          { text }
        </div>
      </div>
    </>
  );
};
