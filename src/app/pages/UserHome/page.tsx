"use client"

import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar/Navbar"
import Link from "next/link"
import { User } from "lucide-react"

export default function ProductPage() {
  const [pause, setPause] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance" as const,
    drag: true,
    slides: {
      perView: 1,
    },
  })

  useEffect(() => {
    if (!instanceRef.current) return

    let intervalId: ReturnType<typeof setTimeout> | null = null

    const advanceSlide = () => {
      try {
        if (!pause && instanceRef.current) {
          instanceRef.current.next()
        }
      } catch (error) {
        console.error("Error advancing slide:", error)
        if (intervalId) clearInterval(intervalId)
      }
    }

    intervalId = setInterval(advanceSlide, 5000) // Updated to 5 seconds

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
    }
  }, [pause, instanceRef])

  const images = [
    "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30227444/2024/7/24/0ce2319e-2529-4d53-adf2-f2f52f2284951721811896406-Snitch-Men-Smart-Slim-Fit-Opaque-Casual-Shirt-57717218118963-11.jpg",
    "https://rukminim3.flixcart.com/image/850/1000/xif0q/shirt/i/q/y/xxl-4mss2622-02-snitch-original-imagvvuu2gtfx5ra.jpeg?q=90&crop=false",
    "https://m.media-amazon.com/images/I/81tD3mU5nbL._AC_UY1100_.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20250411/6sqj/67f8166f55340d4b4fc5909a/-473Wx593H-700070982-white-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20240323/TocF/65fde0e716fd2c6e6a7a5a38/-473Wx593H-467195598-white-MODEL.jpg",
    "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/b8ac/0ac4/a918/1bd9/f117/a97b/50ea/6476/d824/e8e7/e8e7.jpeg"
  ]

  interface Product {
    name: string;
    price: string;
    image: string;
    link: string;
  }

  const products: Product[] = [
    {
      name: "Smart Casual Shirt",
      price: "$40.00",
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30227444/2024/7/24/0ce2319e-2529-4d53-adf2-f2f52f2284951721811896406-Snitch-Men-Smart-Slim-Fit-Opaque-Casual-Shirt-57717218118963-11.jpg",
      link: "#",
    },
    {
      name: "Slim Fit Jeans",
      price: "$50.00",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20250411/jlAM/67f816157a6cd4182fbe25e7/-473Wx593H-464267341-black-MODEL.jpg",
      link: "#",
    },
    {
      name: "Trendy Sneakers",
      price: "$60.00",
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/SH0116-01-4282copy.jpg?v=1740966497&quality=50",
      link: "#",
    },
    {
      name: "Formal Watch",
      price: "$120.00",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20250411/6sqj/67f8166f55340d4b4fc5909a/-473Wx593H-700070982-white-MODEL.jpg",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* User Profile Button */}
      <div className="fixed top-20 right-4 z-10">
        <Link href="/pages/profile">
          <Button
            className="rounded-full w-12 h-12 bg-slate-800 hover:bg-slate-700 p-2"
            aria-label="User profile"
          >
            <User size={24} />
          </Button>
        </Link>
      </div>

      {/* Image Slider */}
      <div
        ref={sliderRef}
        className="keen-slider w-full h-screen max-w-full mx-auto rounded-xl overflow-hidden shadow-lg"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center transition-all duration-700 ease-in-out"
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-lg shadow-xl"
            />
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 mx-auto max-w-7xl p-4">
        {products.map((product, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardHeader className="p-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-56 rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-500">{product.price}</p>
              <Button asChild className="mt-4 w-full text-blue-400 hover:text-blue-300 hover:bg-blue-100" variant="ghost">
                <Link href={product.link}>View Product</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
