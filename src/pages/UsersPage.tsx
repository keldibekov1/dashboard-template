import { useState, useMemo } from "react";
import { Eye, Pencil, Trash2, Plus, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/ui/DataTable";
import { SearchInput } from "@/components/ui/SearchInput";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ConfirmDeleteModal } from "@/components/modals/ConfirmDeleteModal";
import { users as initialUsers, User, getStatusLabel } from "@/data/mockData";
import { toast } from "sonner";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const itemsPerPage = 8;

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery);
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [users, searchQuery, statusFilter]);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(start, start + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((u) => u.id !== userToDelete.id));
      toast.success("Foydalanuvchi o'chirildi");
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
    }
  };

  const columns = [
    {
      key: "index",
      header: "No",
      render: (_: User, index: number) =>
        (currentPage - 1) * itemsPerPage + index + 1,
    },
    { key: "firstName", header: "Ism" },
    { key: "lastName", header: "Familiya" },
    { key: "birthDate", header: "Tug'ilgan sana" },
    { key: "registrationDate", header: "Ro'yxat sanasi" },
    {
      key: "status",
      header: "Status",
      render: (user: User) => (
        <StatusBadge
          status={user.status === "active" ? "success" : "error"}
          label={getStatusLabel(user.status)}
        />
      ),
    },
    {
      key: "actions",
      header: "Amallar",
      render: (user: User) => (
        <div className="flex items-center gap-2">
          <button className="btn-icon" title="Ko'rish">
            <Eye className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="btn-icon" title="Tahrirlash">
            <Pencil className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            className="btn-icon"
            onClick={() => handleDeleteClick(user)}
            title="O'chirish"
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Foydalanuvchilar</h1>
          <p className="text-muted-foreground">
            Barcha foydalanuvchilarni boshqarish
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Excel
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Yangi qo'shish
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-80">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Qidirish..."
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="all">Barchasi</SelectItem>
            <SelectItem value="active">Faol</SelectItem>
            <SelectItem value="inactive">Nofaol</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="table-container">
        <DataTable
          data={paginatedUsers}
          columns={columns}
          keyExtractor={(user) => user.id}
          emptyMessage="Foydalanuvchilar topilmadi"
        />
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Jami: {filteredUsers.length} ta foydalanuvchi
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Oldingi
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Keyingi
            </Button>
          </div>
        </div>
      )}

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default UsersPage;
