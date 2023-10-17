import { render, screen } from "@testing-library/react";
import AuthForm from "./AuthForm"

describe("Input", async () => {
    it('Should Render The Input', () => {
        render(<AuthForm
                username = "username"
             />)
        
    })
})
