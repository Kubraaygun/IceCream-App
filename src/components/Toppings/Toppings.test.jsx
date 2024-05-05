import { render,screen } from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event"

test ("Api dan gelen veriler için ekrana kartlaar basılıyor mu?", async()=>{
    render (<Toppings/>)

const images=await screen.findAllByAltText("sos-resim")
expect(images.length).toBeGreaterThan(0)

})


test("Sosları ve ekleme ve çıkarma işlemlerinin toplama etki eder",()=>{
    const user=userEvent.setup()
    render(<Toppings/>)
})