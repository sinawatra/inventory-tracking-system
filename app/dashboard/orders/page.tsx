import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Search } from "lucide-react"

// Sample order data
const orders = [
  {
    id: "ORD-1001",
    customer: "John Smith",
    date: "2025-03-30",
    total: 149.97,
    status: "Completed",
    items: 3,
  },
  {
    id: "ORD-1002",
    customer: "Sarah Johnson",
    date: "2025-03-29",
    total: 89.99,
    status: "Processing",
    items: 1,
  },
  {
    id: "ORD-1003",
    customer: "Michael Brown",
    date: "2025-03-28",
    total: 245.5,
    status: "Shipped",
    items: 4,
  },
  {
    id: "ORD-1004",
    customer: "Emily Davis",
    date: "2025-03-27",
    total: 59.99,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-1005",
    customer: "Robert Wilson",
    date: "2025-03-26",
    total: 129.95,
    status: "Completed",
    items: 2,
  },
  {
    id: "ORD-1006",
    customer: "Jennifer Taylor",
    date: "2025-03-25",
    total: 349.99,
    status: "Cancelled",
    items: 5,
  },
  {
    id: "ORD-1007",
    customer: "David Martinez",
    date: "2025-03-24",
    total: 74.5,
    status: "Completed",
    items: 1,
  },
]

export default function OrdersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Orders</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">Add Order</Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="grid gap-2 flex-1">
            <label htmlFor="search" className="text-sm font-medium">
              Search Orders
            </label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="search" type="search" placeholder="Search by order ID or customer..." className="pl-8" />
            </div>
          </div>

          <div className="grid gap-2 w-full md:w-[180px]">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>
            <Select defaultValue="all">
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2 w-full md:w-[180px]">
            <label htmlFor="date" className="text-sm font-medium">
              Date Range
            </label>
            <Select defaultValue="all">
              <SelectTrigger id="date">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Completed"
                          ? "default"
                          : order.status === "Processing"
                            ? "outline"
                            : order.status === "Shipped"
                              ? "secondary"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/orders/${order.id}`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between px-4 py-2 border-t">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-7</strong> of <strong>42</strong> orders
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="font-medium">
                1
              </Button>
              <Button variant="ghost" size="sm">
                2
              </Button>
              <Button variant="ghost" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

