'use client';
import { ClothingSearchCommand } from "@/components/ClothingSearchCommand";

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold mb-6">Search for Clothing</h1>
      <ClothingSearchCommand />
    </div>
  );
}
