import { useState } from "react";
import { Camera, Key, Mail, Phone,  User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "Admin",
    lastName: "admin",
    email: "admin@gmail.com",
    phone: "+998 90 123 45 67",
  });

  const [passwords, setPasswords] = useState({
    new: "",
    confirm: "",
  });

  const handleSaveProfile = () => {
    toast.success("Profil ma'lumotlari saqlandi");
  };

  const handleChangePassword = () => {
    if ( !passwords.new || !passwords.confirm) {
      toast.error("Barcha maydonlarni to'ldiring");
      return;
    }
    if (passwords.new !== passwords.confirm) {
      toast.error("Yangi parollar mos kelmaydi");
      return;
    }
    if (passwords.new.length < 6) {
      toast.error("Parol kamida 6 ta belgidan iborat bo'lishi kerak");
      return;
    }
    toast.success("Parol muvaffaqiyatli o'zgartirildi");
    setPasswords({  new: "", confirm: "" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Profil</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card-elevated p-6 lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {profile.firstName[0]}
                  {profile.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h3 className="text-xl font-semibold">
              {profile.firstName} {profile.lastName}
            </h3>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profile.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{profile.phone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="kpi-icon-primary">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Shaxsiy ma'lumotlar</h3>
                <p className="text-sm text-muted-foreground">
                  Profilingizni yangilang
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ism</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) =>
                      setProfile({ ...profile, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Familiya</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) =>
                      setProfile({ ...profile, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
              </div>
              <Button onClick={handleSaveProfile}>Saqlash</Button>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="kpi-icon-accent">
                <Key className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Parolni o'zgartirish</h3>
                <p className="text-sm text-muted-foreground">
                  Xavfsizlik uchun parolingizni yangilang
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Yangi parol</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwords.new}
                    onChange={(e) =>
                      setPasswords({ ...passwords, new: e.target.value })
                    }
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) =>
                      setPasswords({ ...passwords, confirm: e.target.value })
                    }
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <Button variant="outline" onClick={handleChangePassword}>
                Parolni o'zgartirish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
