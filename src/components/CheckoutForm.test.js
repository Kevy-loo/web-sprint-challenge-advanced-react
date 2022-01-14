import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    //data-testid successMessage

    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, "kevin");
    

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, "liu");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "20 kevin street");

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "Smallville");

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "New Jersey");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "99999");
    
    const button = screen.getByRole("button");
    userEvent.click(button)

    const success = await screen.findByTestId("successMessage");
    expect(success).toBeInTheDocument();
    expect(success).toHaveTextContent(/kevin/i);
    expect(success).toHaveTextContent(/liu/i);
    expect(success).toHaveTextContent(/20 kevin street/i);
    expect(success).toHaveTextContent(/Smallville/i);
    expect(success).toHaveTextContent(/New Jersey/i);
    expect(success).toHaveTextContent("99999");



});
