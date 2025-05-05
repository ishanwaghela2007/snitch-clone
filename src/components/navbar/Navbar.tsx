"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"
import React from "react"

// Using a more TypeScript-friendly approach while avoiding explicit prop types
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(function ListItem({ className, title, children, ...restProps }, ref) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-slate-100 focus:bg-slate-700 focus:text-slate-100",
            className,
          )}
          {...restProps}
        >
          <div className="text-sm font-medium leading-none text-slate-100">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-300">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"

export default function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg p-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Sntich
        </Link>
        
        <NavigationMenu className="bg-white-50">
          <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/pages/UserHome"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-700 focus:text-slate-100 disabled:opacity-50 disabled:pointer-events-none bg-slate-800 hover:bg-slate-700 text-slate-100 h-10 py-2 px-4 group"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-slate-50 focus:bg-slate-700">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px] bg-slate-800 rounded-md border border-slate-700">
                  <ListItem href="/pages/products" title="All Products">
                    Browse our complete product catalog
                  </ListItem>
                  <ListItem href="/pages/products/newarrivals" title="New Arrivals">
                    Check out our latest products
                  </ListItem>
                  <ListItem href="/pages/products/saleiteams" title="Sale Items">
                    Great deals on selected items
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/pages/about"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-700 focus:text-slate-100 disabled:opacity-50 disabled:pointer-events-none bg-slate-800 hover:bg-slate-700 text-slate-100 h-10 py-2 px-4 group"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator className="bg-blue-400" />
          <NavigationMenuViewport className="bg-white-50 border border-slate-700 rounded-md shadow-lg" />
        </NavigationMenu>
      </div>
    </nav>
  )
}