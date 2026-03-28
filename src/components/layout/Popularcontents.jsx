export const Popularcontents = () => {
    return (
        <>
            <div className="row-span-2">
                    <h2 className="text-2xl">Popular Contents</h2>
                    <div className="p-4 border rounded-xl">
                        <div className="flex place-content-between">
                            <div className="flex gap-2">
                                <img className="h-10" src="src/assets/circle-dashed-svgrepo-com.svg" alt="" />
                                <div>
                                    <div>Michele Morrone</div>
                                    <div className="text-xs">Aspiring Content Creator</div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-right">
                                    <div>Adidas</div>
                                    <div className="text-xs">Impossible in Nothing</div>
                                </div>
                                <img className="h-10" src="src/assets/circle-dashed-svgrepo-com.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            "Keeping it real. That's what I love making."
                        </div>
                        <div>
                            Honestly talking! This was a colaboration but I still love the product.
                        </div>
                        <img className="rounded-2xl" src="src/assets/sanjoy-saha-zkCgXR2zARU-unsplash.jpg" alt="" />
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 py-2">  
                                <span className="flex gap-0.5">
                                    <img className="h-6" src="src/assets/heart-svgrepo-com.svg" alt="" />
                                    <span>19K</span>
                                </span>
                                <span className="flex gap-0.5">
                                    <img className="h-6" src="src/assets/comment-4-svgrepo-com.svg" alt="" />
                                    <span>4K</span>
                                </span>
                                <span className="flex gap-0.5">
                                    <img className="h-6" src="src/assets/share-svgrepo-com.svg" alt="" />
                                    <span>125</span>
                                </span>
                            </div>
                            <div className="flex gap-0.5">
                                <img className="h-6" src="src/assets/users-svgrepo-com.svg" alt="" />
                                <span>23/45</span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                        <button className="border rounded-xl px-1 text-white bg-indigo-600">
                            Apply to collaborate
                        </button>
                        </div>
                    </div>
                </div>
        </>
    )
}