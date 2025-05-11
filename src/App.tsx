import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { calculateTotalRevenue } from "./utils/calculateTotalRevenue";
import type { Product, Sale } from "./types";

const products: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 50 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 499.99, stock: 100 },
  { id: 3, name: "Headphones", category: "Electronics", price: 99.99, stock: 200 },
  { id: 4, name: "T-shirt", category: "Clothing", price: 19.99, stock: 300 },
  { id: 5, name: "Jeans", category: "Clothing", price: 49.99, stock: 150 }
];

const sales: Sale[] = [
  { id: 1, productId: 1, quantity: 2, date: "2024-03-01", customerId: 101 },
  { id: 2, productId: 2, quantity: 1, date: "2024-03-01", customerId: 102 },
  { id: 3, productId: 1, quantity: 1, date: "2024-03-02", customerId: 103 },
  { id: 4, productId: 4, quantity: 3, date: "2024-03-02", customerId: 101 },
  { id: 5, productId: 3, quantity: 2, date: "2024-03-03", customerId: 104 }
];

function App() {
  const [count, setCount] = useState(0);

  console.log(calculateTotalRevenue(products, sales))

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
