    import { Button } from "../shared/Button"

    export default function Navbar() {
        return (
        <div className="grid grid-cols-6 text-center py-4 px-2">
            <div className="text-5xl">
                Logo
            </div>
            <div className=" col-span-5 flex place-content-between p-2">
                <div>
                    <Button>Home</Button>
                    <Button>Feed</Button>
                    <Button>Campaigns</Button>
                    <Button>Creators</Button>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="border-[1.5px] rounded-xl flex items-center gap-2 px-1 py-1.5">
                        <img className="h-4" src="src/assets/search.svg" alt="search" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <img className="h-7" src="src/assets/user-profile.svg" alt="user" />
                </div>
            </div>
        </div>
    )
}