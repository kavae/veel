export const Featuredcreators = () => {
    return (
        <>
            <div>
                    <div className="flex justify-between">
                        <h2 className="text-2xl">Featured Creators</h2>
                        <button className="flex items-center gap-1 text-indigo-600">
                            <span>See all</span>
                            <img className="h-3.5" src="src/assets/arrow-right-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                    <div className="p-2 border rounded-xl grid grid-cols-2 grid-rows-2">
                        <div className="flex gap-2 border-b-2 border-r-2">
                            <div>
                                <img className="h-10" src="src/assets/circle-dashed-svgrepo-com.svg" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p>
                                        Jesika Jon
                                    </p>
                                    <p className="text-sm">
                                        Just Do It
                                    </p>
                                    <p className="text-xs">
                                        Published #2 days ago
                                    </p>
                                </div>
                                <div>
                                    <img className="h-4" src="src/assets/arrow-right-svgrepo-com.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 border-b-2">
                            <div>
                                <img className="h-10" src="src/assets/circle-dashed-svgrepo-com.svg" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p>
                                        Jesika Jon
                                    </p>
                                    <p className="text-sm">
                                        Just Do It
                                    </p>
                                    <p className="text-xs">
                                        Published #2 days ago
                                    </p>
                                </div>
                                <div>
                                    <img className="h-4" src="src/assets/arrow-right-svgrepo-com.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 border-r-2">
                            <div>
                                <img className="h-10" src="src/assets/circle-dashed-svgrepo-com.svg" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p>
                                        Jesika Jon
                                    </p>
                                    <p className="text-sm">
                                        Just Do It
                                    </p>
                                    <p className="text-xs">
                                        Published #2 days ago
                                    </p>
                                </div>
                                <div>
                                    <img className="h-4" src="src/assets/arrow-right-svgrepo-com.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <img className="h-10" src="src/assets/circle-dashed-svgrepo-com.svg" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p>
                                        Jesika Jon
                                    </p>
                                    <p className="text-sm">
                                        Just Do It
                                    </p>
                                    <p className="text-xs">
                                        Published #2 days ago
                                    </p>
                                </div>
                                <div>
                                    <img className="h-4" src="src/assets/arrow-right-svgrepo-com.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            Leo Pompun
                        </div>
                        <div>
                            Omar Sculp
                        </div>
                        <div>
                            Joseph Morone
                        </div> */}
                    </div>
                </div>
        </>
    )
}