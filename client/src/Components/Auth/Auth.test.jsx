import { render, screen, userEvent, fireEvent } from "../../Utils/Test-Utils";
import Auth from './Auth'

describe("Input", async () => {
    it('Should Render The Input', () => {
        render(<Auth btnText="Sign Up" />);
            expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    })
    it("Check If User Can Type Username", async () => {
        render(<Auth />)
           const inputUsername = screen.getByPlaceholderText(/MikeG/i)
            await fireEvent.change(inputUsername, {target: {value:'Test Username'}} )
            expect(inputUsername.value).toBe("Test Username");
            
        })
        it(" Check If User Can Type Password", async () => {
          render(<Auth />);
          const inputPassword = screen.getByPlaceholderText(/••••••••/i);
          await fireEvent.change(inputPassword, { target: { value: "Password" } });
          expect(inputPassword.value).toBe("Password");
    
        });

        it("Have Empty Password Input Once Login or Sign Up is Clicked", async () => {
          render(<Auth />);
                    const inputPassword =
                      screen.getByPlaceholderText(/••••••••/i);

          const buttonElement = screen.getByRole("button");
          await fireEvent.change(inputPassword, { target: { value: "Password" } });
          fireEvent.click(buttonElement)
          expect(inputPassword.value).toBe("")
        });
    
})

