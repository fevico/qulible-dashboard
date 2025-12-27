import { ChartBarIcon, HeartIcon, ShoppingBagIcon, DollarSign , Banknote , UsersIcon, Motorbike  } from "lucide-react";
import StatisticsCard from "./card";
import Promo from "./promo";
import PayoutRequest from "./payout";

const cardData = [
  {
    title: 'Total Revenue',
    value: '$12,450',
    icon: <DollarSign  className="h-6 w-6" />,
    trend: '+18%',
    color: 'bg-green-500',
  },
  {
    title: 'Total Resturant',
    value: '2,847',
    icon: <UsersIcon className="h-6 w-6" />,
    trend: '+5%',
    color: 'bg-blue-500',
  },
  {
    title: 'Active Orders',
    value: '156',
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    trend: '-2%',
    color: 'bg-purple-500',
  },
  {
    title: 'Low Stock Alert',
    value: '4.2%',
    icon: <ChartBarIcon className="h-6 w-6" />,
    trend: '+0.8%',
    color: 'bg-indigo-500',
  },
  {
    title: 'Active Users',
    value: '$89.50',
    icon: <UsersIcon  className="h-6 w-6" />,
    trend: '+12%',
    color: 'bg-yellow-500',
  },
  {
    title: 'Active Riders',
    value: '92%',
    icon: <Motorbike className="h-6 w-6" />,
    trend: '+3%',
    color: 'bg-pink-500',
  },
];

const HomeStats = () => {   
    return ( <div>
        <Promo/>      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cardData.map((data, index) => (
        <StatisticsCard key={index} title={data.title} value={data.value} icon={data.icon} color={data.color} trend={data.trend} />
            ))}
        </div>
            <PayoutRequest/>
    </div> );
}
 
export default HomeStats;