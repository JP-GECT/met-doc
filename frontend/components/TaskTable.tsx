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
  
  

  interface TableDemoProps {
    assigned: any[]
  }
  
  export function TableDemo({assigned} : TableDemoProps) {
    console.log(assigned)
    return (
      <Table className="bg-white rounded-lg mt-5">
        <TableCaption></TableCaption>
        <TableHeader>
        <TableRow>
            <TableCell colSpan={3} className="text-bold text-lg">ACTIVE TASKS</TableCell>
            {/* <TableCell className="text-right text-lg">10</TableCell> */}
          </TableRow>
          <TableRow>
            <TableHead colSpan={3} className="w-[100px]">Tasks</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Estimate Time</TableHead>
            {/* <TableHead className="text-right">Priority</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))} */}
          {assigned?.map((assign) => (
            <TableRow key={assign.task}>
              <TableCell colSpan={3} className="font-medium">{assign.task}</TableCell>
              <TableCell>{assign.name}</TableCell>
              <TableCell>{assign["time estimate"]}</TableCell>
              {/* <TableCell className="text-right">{assign.totalAmount}</TableCell> */}
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
  