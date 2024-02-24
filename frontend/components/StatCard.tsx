import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatCardProps {
  title: string;
  description: string;
  content: string;
  footer: string;
}

const StatCard = ({ title, description, content, footer }: StatCardProps) => {
  return (
    <Card className="min-w-[18vw] h-[26vh] pb-2 ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-extrabold text-2xl">{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
};

export default StatCard;
