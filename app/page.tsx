import { PHONE_MODELS } from '@/data/phones';
import PhoneModelCard from '@/components/PhoneModelCard';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">


      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Select Your Device
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Choose your phone model to start designing your custom case.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {PHONE_MODELS.map((model) => (
            <PhoneModelCard key={model.id} model={model} />
          ))}
        </div>
      </main>
    </div>
  );
}

