import { Popularcontents } from "./Popularcontents"
import { Brandscampaigns } from "./Brandscampaigns"
import { Featuredcreators } from "./Featuredcreators"

export const Herosection = () => {
    return (
        <div className="flex flex-col col-span-5 p-4 gap-4">
            <div className="">
                <div className="text-4xl">Brands and Creators, Building Together</div>
                <div className="text-xl">A trusted space where brands and creators ome together</div>
                <div className="text-xl">to create authentic user content.</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                
                {/* Popular Contents start */}
                <Popularcontents />
                {/* Popular Contents End */}

                {/* Brands Campaigns start */}
                <Brandscampaigns />
                {/* Brands Campaigns end */}

                {/* Featured Creators start */}
                <Featuredcreators />
                {/* Featured Creators end */}

            </div>

            {/*  */}
        </div>
    )
}