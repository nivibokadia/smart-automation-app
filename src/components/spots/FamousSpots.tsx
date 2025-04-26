
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bus, Train, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface SpotTransport {
  mode: string;
  duration: string;
  frequency: string;
}

interface FamousSpot {
  name: string;
  description: string;
  imageUrl: string;
  transport: SpotTransport[];
}

interface FamousSpotsProps {
  city: string;
  spots: FamousSpot[];
}

const FamousSpots = ({ city, spots }: FamousSpotsProps) => {
  const [selectedSpot, setSelectedSpot] = useState<FamousSpot | null>(null);

  return (
    <ScrollArea className="h-[70vh]">
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold mb-4">Famous Spots in {city}</h3>
        {spots.map((spot, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedSpot(spot)}
          >
            <CardHeader>
              <CardTitle>{spot.name}</CardTitle>
              <CardDescription>{spot.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full mb-4 overflow-hidden rounded-md">
                <img 
                  src={spot.imageUrl} 
                  alt={spot.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">How to get there:</h4>
                {spot.transport.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    {t.mode === 'bus' ? (
                      <Bus className="h-4 w-4 text-amber-600" />
                    ) : (
                      <Train className="h-4 w-4 text-indigo-600" />
                    )}
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{t.duration}</span>
                    <span className="text-gray-500">• Every {t.frequency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedSpot !== null} onOpenChange={(open) => !open && setSelectedSpot(null)}>
        <DialogContent className="max-w-2xl">
          {selectedSpot && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedSpot.name}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                  <img 
                    src={selectedSpot.imageUrl} 
                    alt={selectedSpot.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-6">{selectedSpot.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Transportation Options:</h4>
                  {selectedSpot.transport.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      {t.mode === 'bus' ? (
                        <Bus className="h-5 w-5 text-amber-600" />
                      ) : (
                        <Train className="h-5 w-5 text-indigo-600" />
                      )}
                      <div>
                        <p className="font-medium">{t.mode === 'bus' ? 'Bus Service' : 'Train Service'}</p>
                        <p className="text-sm text-gray-600">
                          Travel time: {t.duration} • Frequency: Every {t.frequency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ScrollArea>
  );
};

export default FamousSpots;
