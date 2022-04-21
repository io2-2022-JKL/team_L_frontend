import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DoctorPatientList from "../../pages/doctor/logged/patientList/DoctorPatientList";

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
    render(<DoctorPatientList />, container);
  });
  expect(container.textContent).toContain("Former Appointments list");
});
