import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResturantStats = () => {
    return ( <div>
        <Tabs>
            <TabsList>
                <TabsTrigger value="registered">Registered Resturant</TabsTrigger>
                <TabsTrigger value="partner onboarding">Orders</TabsTrigger>
                <TabsTrigger value="order management">Products</TabsTrigger>
                <TabsTrigger value="menu management">Products</TabsTrigger>
            </TabsList>
        </Tabs>
    </div> );
}
 
export default ResturantStats;