import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DateCardProps {
  end_date: any;
}

const DateCard = ({ end_date }: DateCardProps) => {
  return (
    <Card className="min-w-[20vw]">
      <CardHeader>
        <CardTitle>Expected Deadline</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p className="font-extrabold text-2xl">{end_date}</p>
      </CardContent>
      {/* <CardFooter>
            <p>{footer}</p>
          </CardFooter> */}
    </Card>
  );
};

export default DateCard;
