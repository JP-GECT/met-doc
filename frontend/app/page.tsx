import { Button } from "@/components/ui/button";
import AudioForm from "@/components/AudioForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div>Hello</div>
      <Button>Click me</Button>
      <AudioForm />
    </main>
  );
}
