/// <reference types="vite/client" />

interface CustomCardProps {
  id: string | number;
  title: string;
  description: string;
  status: "Pending" | "Approved" | "Rejected";
  tags?: string[];
}
