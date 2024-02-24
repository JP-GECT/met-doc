import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Interface } from "readline";
  

  
interface issueTableProps {
    issues: any[]
}

  export function IssueTable({issues}:issueTableProps) {
    return (
      <Table className="bg-white rounded-lg mt-5 drop-shadow-md">
        <TableCaption></TableCaption>
        <TableHeader>
        <TableRow>
            <TableCell colSpan={3} className="text-bold text-lg">ISSUES</TableCell>
            <TableCell className="text-right text-lg">{issues.length}</TableCell>
          </TableRow>
         
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue}>
              <TableCell className="font-medium">{issue}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  