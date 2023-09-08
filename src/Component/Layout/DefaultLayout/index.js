import Header from "./Header";
import Sidebar from "./Sidebar";

function defaultLayout({ children }) {
  return ( 
    <div>
      <Header />
      <div> 
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default defaultLayout;