'use client';

import { PhoneModel } from '@/types/phone';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Smartphone, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PhoneModelCardProps {
  model: PhoneModel;
}

export default function PhoneModelCard({ model }: PhoneModelCardProps) {
  const router = useRouter();

  const handleSelect = () => {
    localStorage.setItem('selectedPhoneModel', JSON.stringify(model));
    router.push(`/customize?model=${model.id}`);
  };

  return (
    <Card className="group overflow-hidden border-border/40 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/5] p-6 bg-gradient-to-b from-muted/50 to-muted/10 flex items-center justify-center">
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
           <span className="bg-background/80 backdrop-blur text-xs font-medium px-2 py-1 rounded-full border">
             {model.id}
           </span>
        </div>
        
        <Image
          src={model.image}
          alt={model.displayName}
          width={240}
          height={480}
          className="object-contain h-full w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      <CardContent className="p-5 text-center">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {model.displayName}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Custom Tough Case
        </p>
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ${model.price.toFixed(2)}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button 
          onClick={handleSelect} 
          className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
          size="lg"
        >
          Select Model
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
