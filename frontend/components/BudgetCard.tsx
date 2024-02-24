import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BudgetCardProps {
  cost: any;
}

const BudgetCard = ({ cost }: BudgetCardProps) => {
  return (
    <Card className="min-w-[20vw]">
      <CardHeader>
        <CardTitle>Estimated Budget</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p className="font-extrabold text-2xl">{cost}</p>
      </CardContent>
      {/* <CardFooter>
          <p>{footer}</p>
        </CardFooter> */}
    </Card>
  );
};

export default BudgetCard;
