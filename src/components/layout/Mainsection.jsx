import { Herosection } from "./Herosection"
import { Sidebar } from "./Sidebar"

export const Mainsection = () => {
    return (
        <div className="grid grid-cols-6">
            <Sidebar />
            <Herosection />
        </div>
    )
}