import { render, fireEvent, screen } from "@testing-library/react";
import Email_input from "../components/mail-component";
//import '@testing-library/jest-dom';
//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Email_input />);

//select the elements you want to interact with
const counter = screen.getByTestId("field_user");
const incrementBtn = screen.getByTestId("sendData");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter.textContent).toBe("admin");
});