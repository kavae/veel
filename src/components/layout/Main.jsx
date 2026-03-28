import { Herosection } from "./Herosection"
import { Sidebar } from "./Sidebar"

export const Main = () => {
    return (
        <div className="grid grid-cols-6">
            <Sidebar />
            <Herosection className="col-span-5" />
        </div>
    )
}