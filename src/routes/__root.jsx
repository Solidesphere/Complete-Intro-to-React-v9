import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";
import PizzaOfTheDay from "../PizzaOfTheDay";

export const Route = createRootRoute({
  component: () => {
    const carthook = useState([]);
    return (
      <>
        <CartContext.Provider value={carthook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
