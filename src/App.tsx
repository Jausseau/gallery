import { BrowserRouter as Router } from "react-router-dom";
import AppNav from "./router/nav";
import AppRouter from "./router";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer />
        <AppNav />
        <AppRouter />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
