import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AdminPatientList from "../../pages/admin/loged/patientList/AdminPatientList";

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
    render(<AdminPatientList />, container);
  });
  expect(container.textContent).toContain("Loading...");
});
