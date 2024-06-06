import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SupabaseAuthProvider } from './integrations/supabase/auth.jsx'; // Updated import
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseAuthProvider> {/* Updated provider */}
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);
