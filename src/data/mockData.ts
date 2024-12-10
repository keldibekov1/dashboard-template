export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  registrationDate: string;
  status: "active" | "inactive";
}

export interface Activity {
  id: string;
  type:
    | "user_registered"
    | "payment_received"
  description: string;
  timestamp: string;
  user?: string;
}

export const users: User[] = [
  {
    id: "1",
    firstName: "Aziz",
    lastName: "Karimov",
    phone: "+998581234567",
    birthDate: "1990-05-15",
    registrationDate: "2024-01-10",
    status: "active",
  },
  {
    id: "2",
    firstName: "Dilnoza",
    lastName: "Rahimova",
    phone: "+998581234567",
    birthDate: "1985-08-22",
    registrationDate: "2024-01-12",
    status: "active",
  },
  {
    id: "3",
    firstName: "Bobur",
    lastName: "Toshmatov",
    phone: "+998581234567",
    birthDate: "1978-12-03",
    registrationDate: "2024-01-15",
    status: "inactive",
  },
  {
    id: "4",
    firstName: "Malika",
    lastName: "Umarova",
    phone: "+998581234567",
    birthDate: "1995-03-28",
    registrationDate: "2024-01-18",
    status: "active",
  },
  {
    id: "5",
    firstName: "Sardor",
    lastName: "Aliyev",
    phone: "+998581234567",
    birthDate: "1982-07-11",
    registrationDate: "2024-01-20",
    status: "active",
  },
  {
    id: "6",
    firstName: "Nodira",
    lastName: "Qosimova",
    phone: "+998581234567",
    birthDate: "1988-11-05",
    registrationDate: "2024-01-22",
    status: "active",
  },
  {
    id: "7",
    firstName: "Jasur",
    lastName: "Ergashev",
    phone: "+998581234567",
    birthDate: "1975-04-19",
    registrationDate: "2024-01-25",
    status: "inactive",
  },
  {
    id: "8",
    firstName: "Zarina",
    lastName: "Mirzayeva",
    phone: "+998581234567",
    birthDate: "1992-09-08",
    registrationDate: "2024-01-28",
    status: "active",
  },
  {
    id: "9",
    firstName: "Otabek",
    lastName: "Nazarov",
    phone: "+998581234567",
    birthDate: "1980-01-30",
    registrationDate: "2024-02-01",
    status: "active",
  },
  {
    id: "10",
    firstName: "Gulnora",
    lastName: "Sodiqova",
    phone: "+998581234567",
    birthDate: "1998-06-14",
    registrationDate: "2024-02-05",
    status: "active",
  },
];


export const activities: Activity[] = [

  {
    id: "1",
    type: "payment_received",
    description: "To'lov qabul qilindi - 280,000 so'm",
    timestamp: "2024-01-22 14:45",
    user: "Zarina Mirzayeva",
  },


  {
    id: "2",
    type: "payment_received",
    description: "To'lov qabul qilindi - 350,000 so'm",
    timestamp: "2024-01-22 10:30",
    user: "Sardor Aliyev",
  },
];

export const dashboardStats = {
  totalUsers: 156,
  todayVisits: 24,
  monthUsers: 8,
  todayRevenue: 4850000,
  monthlyUsersData: [
    { month: "Yan", users: 45 },
    { month: "Fev", users: 52 },
    { month: "Mar", users: 61 },
    { month: "Apr", users: 58 },
    { month: "May", users: 72 },
    { month: "Iyun", users: 85 },
    { month: "Iyul", users: 78 },
    { month: "Avg", users: 92 },
    { month: "Sen", users: 105 },
    { month: "Okt", users: 118 },
    { month: "Noy", users: 132 },
    { month: "Dek", users: 156 },
  ],
  paymentStats: [
    { month: "Yan", amount: 12500000 },
    { month: "Fev", amount: 15200000 },
    { month: "Mar", amount: 18100000 },
    { month: "Apr", amount: 16800000 },
    { month: "May", amount: 21500000 },
    { month: "Iyun", amount: 24800000 },
  ],
};


export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("uz-UZ").format(amount) + " so'm";
};

export const formatDate = (dateString: string): string => {
  return dateString;
};

export const getStatusLabel = (status: "active" | "inactive"): string => {
  return status === "active" ? "Faol" : "Nofaol";
};
