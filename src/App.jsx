import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <h1>
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"
            alt=""
          />
          Planets
        </h1>
      </header>
      <main>{<Outlet />}</main>
      <footer>Made with 💖 by the Front End Team</footer>
    </QueryClientProvider>
  );
}

export default App;
