import Logo from "@/assets/LogoHeader.svg"
import User from "@/assets/icon-user.svg"


const App = () => {
  return (
    <div>
      <header className="w-full h-stack-xxl pr-inline-xxs flex items-center justify-between ">
        <img src={Logo} alt="logotipo" className="w-inline-xl" />
        <button className="w-inline-sm h-stack-sm bg-primary-main rounded-circle flex justify-center items-center">
          <img src={User} alt="user button" />
        </button>
      </header>
      <main>
        
      </main>
    </div>
  );
};

export default App;
