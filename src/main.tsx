import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { CartContextProvider } from "@cart/application/providers/CartContextProvider";
import { Routes as RoutesEnum } from "@routes/index";
import BookDetail from "@modules/books/infrastructure/ui/BookDetail";
import Checkout from "@modules/checkout/infrastructure/ui";
import Home from "@modules/home/infrastructure/ui";
import HomeLayout from "@shared/layouts/HomeLayout";
import Landing from "@modules/landing/infrastructure/ui";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path={RoutesEnum.Home} element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path={RoutesEnum.Checkout} element={<Checkout />} />
            <Route
              path={`${RoutesEnum.BookDetail}:id`}
              element={<BookDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </StrictMode>
);
