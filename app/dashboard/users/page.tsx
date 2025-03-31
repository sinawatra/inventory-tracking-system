import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample user data
const users = [
  {
    id: "USR-001",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "Today at 10:45 AM",
  },
  {
    id: "USR-002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "Manager",
    status: "Active",
    lastActive: "Today at 9:32 AM",
  },
  {
    id: "USR-003",
    name: "Michael Brown",
    email: "m.brown@example.com",
    role: "Staff",
    status: "Active",
    lastActive: "Yesterday at 4:15 PM",
  },
  {
    id: "USR-004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    role: "Staff",
    status: "Inactive",
    lastActive: "Mar 25, 2025",
  },
  {
    id: "USR-005",
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    role: "Manager",
    status: "Active",
    lastActive: "Today at 11:20 AM",
  },
  {
    id: "USR-006",
    name: "Jennifer Taylor",
    email: "j.taylor@example.com",
    role: "Staff",
    status: "Active",
    lastActive: "Yesterday at 2:45 PM",
  },
]

export default function UsersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Users</h2>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="grid gap-2 flex-1">
            <label htmlFor="search" className="text-sm font-medium">
              Search Users
            </label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="search" type="search" placeholder="Search by name or email..." className="pl-8" />
            </div>
          </div>

          <div className="grid gap-2 w-full md:w-[180px]">
            <label htmlFor="role" className="text-sm font-medium">
              Role
            </label>
            <Select defaultValue="all">
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${user.name.charAt(0)}`} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/dashboard/users/${user.id}`}>Edit</Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

