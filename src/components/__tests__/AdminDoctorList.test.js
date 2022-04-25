import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AdminDoctorList from "../../pages/admin/loged/Doctorlist/AdminDoctorList";

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
    render(<AdminDoctorList />, container);
  });
  expect(container.textContent).toContain("Loading...");
});
