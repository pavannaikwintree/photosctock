import Faq from "../components/Pricing/FAQ";
import PricingTable from "../components/Pricing/PricingTable";

function PricingPage() {

    return (
        <div className="bg-gray-600 bg-opacity-60">
            <PricingTable />
            <Faq />
        </div>
    )

}

export default PricingPage;