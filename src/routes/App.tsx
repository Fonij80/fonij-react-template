import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "@/lib/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
