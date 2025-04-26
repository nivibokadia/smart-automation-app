
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Plane, Train, Bus, MapPin } from "lucide-react";

interface TransportMapProps {
  type: 'flight' | 'train' | 'bus';
  transportId: string;
  status: string;
}

const TransportMap = ({ type, transportId, status }: TransportMapProps) => {
  const getIcon = () => {
    switch (type) {
      case 'flight': return <Plane className="h-5 w-5 text-blue-600" />;
      case 'train': return <Train className="h-5 w-5 text-indigo-600" />;
      case 'bus': return <Bus className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
  };

  const getLocation = () => {
    // In a real app, this would be dynamic based on real-time data
    return status.includes('Delayed') ? 'En route - Delayed' : 'At station';
  };

  return (
    <div className="relative h-48 bg-gray-100 rounded-lg p-4">
      <div className="w-full h-full relative">
        {/* Simple station route visualization */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 transform -translate-y-1/2" />
        <div className="absolute left-0 top-1/2 w-4 h-4 bg-gray-400 rounded-full transform -translate-y-1/2" />
        <div className="absolute right-0 top-1/2 w-4 h-4 bg-gray-400 rounded-full transform -translate-y-1/2" />
        
        {/* Transport indicator */}
        <HoverCard>
          <HoverCardTrigger>
            <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <div className="p-2 bg-white rounded-full shadow-md">
                {getIcon()}
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">{transportId}</div>
              <div className="text-sm text-gray-600">
                <MapPin className="h-4 w-4 inline mr-1" />
                {getLocation()}
              </div>
              <div className="text-sm text-gray-600">Status: {status}</div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default TransportMap;
