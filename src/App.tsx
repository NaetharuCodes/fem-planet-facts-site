import AppShell from "./components/AppShell";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

export default App;
