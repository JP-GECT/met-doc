import Link from "next/link";
import { Button } from "../ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen flex gap-4 justify-center items-center">
      <Button>Register</Button>
      <Button>
        <Link href="/dashboard">Login</Link>
      </Button>
    </div>
  );
};
export default HomePage;
