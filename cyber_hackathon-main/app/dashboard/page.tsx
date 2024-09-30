
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { retrieveData } from "@/lib/data-creation-retrieval-service";


const Dashboard =async () => {

    const reports =await retrieveData();
    return ( 
        <div className="p-[150px]">
            <Card className="w-full max-w-6xl">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-6xl">DashBoard</CardTitle>
        <CardDescription className="text-xl">Manage Dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-gray-100">ID</TableHead>
                  <TableHead>Website URL</TableHead>
                  <TableHead>Email ID</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                    <TableRow key={report.id}>
                        <TableCell>{report.id}</TableCell>
                        <TableCell>{report.url}</TableCell>
                        <TableCell>{report.email}</TableCell>
                        <TableCell>{report.description}</TableCell>
                        <TableCell>
                        <Badge
                            color={
                            report.status === "pending"
                                ? "yellow"
                                : report.status === "approved"
                                ? "green"
                                : "red"
                            }
                        >
                            {report.status}
                        </Badge>
                        </TableCell>
                    </TableRow>
                    
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
        </div>
     );
}
 
export default Dashboard;