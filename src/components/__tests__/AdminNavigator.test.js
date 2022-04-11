import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import AdminNavigation from "../../pages/admin/navigator/adminNavigation";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders AdminPatientPage", () => {
  act(() => {
    render(
      <BrowserRouter>
        <AdminNavigation />
      </BrowserRouter>,
      container
    );
  });
  expect(container.textContent).toContain("Home");
  expect(container.textContent).toContain("Doctors list");
  expect(container.textContent).toContain("Patients list");
});
