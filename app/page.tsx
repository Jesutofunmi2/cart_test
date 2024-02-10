"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Navbar />
        <MobileNavbar />
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:col-span-2">
              <ProductList />
            </div>
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default App;
