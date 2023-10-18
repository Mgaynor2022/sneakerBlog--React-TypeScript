import { render, screen, userEvent, fireEvent } from "../../Utils/Test-Utils";
import Auth from './Auth'

describe("Input", async () => {
    it('Should Render The Input', () => {
        render(<Auth btnText="Sign Up" />);
            expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    })
    it(" Display Username", async () => {
        render(<Auth />)
           const input = screen.getByPlaceholderText(/MikeG/i)
            await fireEvent.change(input, {target: {value: 'Test Username'}} )
            expect(input.value).toBe("Test Username");
    })
})

// describe("Button Allow Login or Signup" , async () => {
//     it('Button Should Trigger Submit Event', () => {
//         render(<AuthForm />)
//     })
// })