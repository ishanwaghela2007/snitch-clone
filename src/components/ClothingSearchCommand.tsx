'use client';

import { useState } from "react";
import {
  Search,
  History,
  Shirt,
  TrendingUp,
  Filter,
  Tag,
  Heart,
  ShoppingCart,
} from "lucide-react";

import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandSeparator,
} from "@/components/ui/command";

export function ClothingSearchCommand() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentSearches = ["summer shirts", "slim fit jeans", "oxford shoes"];
  const trendingItems = ["graphic tees", "bomber jackets", "cargo pants", "oversized sweaters"];
  const categories = ["T-Shirts", "Shirts", "Jeans", "Trousers", "Jackets", "Accessories"];

  const filteredCategories = categories.filter((c) =>
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRecentSearches = recentSearches.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredTrendingItems = trendingItems.filter((t) =>
    t.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] bg-white">
      {/* Wrapping the input and icon in a relative container */}
      <div className="relative px-3 pt-3">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <CommandInput
          placeholder="Search for clothes, categories, styles..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          className="pl-10"
        />
      </div>

      <CommandList className="max-h-[300px] overflow-y-auto py-2">
        <CommandEmpty>No results found for "{searchQuery}".</CommandEmpty>

        {filteredRecentSearches.length > 0 && (
          <CommandGroup heading="Recent Searches">
            {filteredRecentSearches.map((search, index) => (
              <CommandItem key={index}>
                <History className="mr-2 h-4 w-4" />
                {search}
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {filteredRecentSearches.length > 0 &&
          (filteredCategories.length > 0 || filteredTrendingItems.length > 0) && <CommandSeparator />}

        {filteredCategories.length > 0 && (
          <CommandGroup heading="Categories">
            {filteredCategories.map((category, index) => (
              <CommandItem key={index}>
                <Shirt className="mr-2 h-4 w-4" />
                {category}
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {filteredCategories.length > 0 && filteredTrendingItems.length > 0 && <CommandSeparator />}

        {filteredTrendingItems.length > 0 && (
          <CommandGroup heading="Trending">
            {filteredTrendingItems.map((item, index) => (
              <CommandItem key={index}>
                <TrendingUp className="mr-2 h-4 w-4 text-red-500" />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>

      <CommandSeparator />

      <CommandGroup heading="Quick Actions">
        <CommandItem>
          <Filter className="mr-2 h-4 w-4" />
          Advanced Filters
        </CommandItem>
        <CommandItem>
          <Tag className="mr-2 h-4 w-4" />
          Browse Sales
        </CommandItem>
        <CommandItem>
          <Heart className="mr-2 h-4 w-4" />
          Wishlist
        </CommandItem>
        <CommandItem>
          <ShoppingCart className="mr-2 h-4 w-4" />
          View Cart
        </CommandItem>
      </CommandGroup>

      <CommandSeparator />

      <div className="px-3 py-2 text-xs text-gray-500 flex justify-between">
        <span>Use ↑↓ to navigate</span>
        <span>Press Enter to select</span>
        <span>Esc to close</span>
      </div>
    </Command>
  );
}
