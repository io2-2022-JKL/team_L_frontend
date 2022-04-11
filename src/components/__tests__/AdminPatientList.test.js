import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AdminPacientList from "../../pages/admin/loged/pacientList/AdminPacientList";

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
    render(<AdminPacientList />, container);
  });
  expect(container.textContent).toContain("Patients list");
});
