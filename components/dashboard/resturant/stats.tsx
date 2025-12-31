import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatisticsCard from "../home/card";
import { DollarSign, ShoppingBagIcon, UsersIcon } from "lucide-react";

const RegisteredData = [
  {
    title: 'Total Resturant',
    value: '800',
    icon: <DollarSign  className="h-6 w-6" />,
    trend: '+18%',
    color: 'bg-green-500',
  },
  {
    title: 'Active Resturant',
    value: '2,847',
    icon: <UsersIcon className="h-6 w-6" />,
    trend: '+5%',
    color: 'bg-blue-500',
  },
  {
    title: 'Inactive Resturant',
    value: '156',
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    trend: '-2%',
    color: 'bg-purple-500',
  },
];

const ResturantStats = () => {
    return (
        <div className="flex justify-center p-4"> {/* Reduced padding to p-4; removed min-h-screen to avoid full-height forcing */}
            <Tabs defaultValue="registered" className="w-full max-w-6xl"> {/* Increased max-w to 6xl (96rem/~1536px) for more room on wider screens */}
                <TabsList className="flex flex-row justify-center gap-4 bg-background border rounded-md p-2">
                    <TabsTrigger 
                        value="registered" 
                        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md px-4 py-2 transition-colors"
                    >
                        Registered Resturant
                    </TabsTrigger>
                    <TabsTrigger 
                        value="partner onboarding" 
                        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md px-4 py-2 transition-colors"
                    >
                        Orders
                    </TabsTrigger>
                    <TabsTrigger 
                        value="order management" 
                        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md px-4 py-2 transition-colors"
                    >
                        Products
                    </TabsTrigger>
                    <TabsTrigger 
                        value="menu management" 
                        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md px-4 py-2 transition-colors"
                    >
                        Products
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="registered" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"> {/* Reduced inner p-6 to p-4 for less squeezing */}
                        {RegisteredData.map((data, index) => (
                            <StatisticsCard key={index} title={data.title} value={data.value} icon={data.icon} color={data.color} trend={data.trend} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};
 
export default ResturantStats;