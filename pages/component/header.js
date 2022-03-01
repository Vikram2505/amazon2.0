import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"

function header() {
    return (
        //   Top nav bar
        <header className="sticky top-0 relative z-50">
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>

            {/* Search bar */}
            <div className="hidden sm:flex h-10 items-center bg-yellow-400 hover:bg-yellow-500 rounded-md flex-grow cursor-pointer">
                <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none" />
                <SearchIcon className='h-12 p-4' />
            </div>

            {/* Right side menu */}
            <div className="flex items-center space-x-4 mx-6 whitespace-nowrap">
                <div className="text-white link">
                    <p className="text-xs">Hello Vikram</p>
                    <p className="text-sm font-bold">Account & Lists</p>
                </div>

                <div className="text-white link">
                    <p className="text-xs">Returns</p>
                    <p className="text-sm font-bold">& Orders</p>
                </div>

                <div className="link relative">
                    <span className="text-white absolute -top-1 right-0 md:right-15 text-xs bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold">5</span>
                    <ShoppingCartIcon className="h-8 text-white" />
                </div>
            </div>

        </div>
            {/* Bottom nav */}
            <div className="flex p-2 space-x-3 pl-6 items-center text-white bg-amazon_blue-light">
                <p className="flex link text-base md:text-base">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link text-xs md:text-base">Prime Video</p>
                <p className="link text-xs md:text-base">Amazon Business</p>
                <p className="link text-xs md:text-base">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>

            </div>
        </header>
    );
}

export default header;
