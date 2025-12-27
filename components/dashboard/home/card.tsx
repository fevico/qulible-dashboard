import React from 'react';

interface StatisticsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string; // e.g., "+12%" or "-5%"
  color?: string; // e.g., "bg-blue-500" for icon background
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = 'bg-blue-500',
}) => {
  return (
    <div className="bg-[#1F2050] rounded-lg shadow-md p-6 w-full max-w-sm border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon && (
            <div className={`p-2 rounded-full ${color} text-white mr-3`}>
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        {trend && (
          <span className={`text-sm font-medium ${
            trend.startsWith('+') ? 'text-green-600' : 'text-red-600'  
          }`}>  
            {trend}
          </span>
        )}
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="flex flex-row justify-between text-white">
        <span>{trend}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default StatisticsCard;