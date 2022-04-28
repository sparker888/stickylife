import * as React from "react"
import { Link } from "gatsby"
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { QuestionMarkCircleIcon, ShoppingBagIcon } from '@heroicons/react/solid'


const currencies = ['USD', 'CAD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Stickers',
      featured: [
        {
          name: 'Paper Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567859/Custom-Paper-Stickers_wmti9a.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Vinyl Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567918/circle-vinyl-sticker_eidzkj.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Reflective Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Various Shapes',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Signs',
      featured: [
        {
          name: 'Paper Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566275/competitor-image-1_iknytc.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Vinyl Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566341/competitor-image-2_edwmzr.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Reflective Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Magnets',
      featured: [
        {
          name: 'Paper Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566275/competitor-image-1_iknytc.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Vinyl Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566341/competitor-image-2_edwmzr.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Reflective Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Auto',
      featured: [
        {
          name: 'Paper Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566275/competitor-image-1_iknytc.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Vinyl Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566341/competitor-image-2_edwmzr.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Reflective Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Apparel',
      featured: [
        {
          name: 'Paper Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566275/competitor-image-1_iknytc.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Vinyl Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566341/competitor-image-2_edwmzr.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Reflective Stickers',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Accessories', href: '#' },
    { name: 'Design Ideas', href: '#' },
  ],
}

const products = [
  {
    id: 1,
    name: 'Cat Sticker',
    description:
      'This is the coolest cat sticker in the world!',
    href: '#',
    quantity: 1000,
    price: '$32.00',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1649269368/liminal-trading-co-logo-sticker-resize_ksa0up.jpg',
    imageAlt: 'StickyLife.com Cat Sticker.',
  },
]

const trendingProducts = [
  {
    id: 1,
    name: 'Custom Vinyl Decals',
    color: 'No minimum quantity limits.',
    price: '100+ decal shapes to choose from.',
    href: '../page-3/',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648495732/decal-application_1_fsshzf.webp',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 2,
    name: 'Custom Stickers',
    color: 'Paper, Vinyl or Reflective',
    price: 'Delivered kiss-cut on individual liners',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
    imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
  },
  {
    id: 3,
    name: 'Car Magnets',
    color: 'Think it. You can stick it!',
    price: '40 shapes offered in almost any size',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502461/car-magnets_egwfnl.webp',
    imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
  },
  {
    id: 4,
    name: 'Temporary Tattoos',
    color: 'FDA approved for skin contact',
    price: 'Check out our five shape categories!',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502864/Temporary-Tattoo_r6okqs.jpg',
    imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
  },
  {
    id: 5,
    name: 'Reflective Stickers',
    color: 'Tagline goes here.',
    price: 'Secondary tagline goes here.',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648504680/website_prodecal_reflective_zusw9w.webp',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 6,
    name: 'Apparel',
    color: 'Tagline goes here.',
    price: 'Secondary tagline goes here.',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648504781/custom-printed-facemasks_2_hfrsmr.jpg',
    imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
  },
  {
    id: 7,
    name: 'Static Clings',
    color: 'Tagline goes here.',
    price: 'Secondary tagline goes here.',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648504875/FaceCling_Mockup_72dpi_zblnxk.webp',
    imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
  },
  {
    id: 8,
    name: 'Dog Tags & Key Chains',
    color: 'Tagline goes here.',
    price: 'Secondary tagline goes here.',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648504969/Custom-Dog-Tags_kelbgv.jpg',
    imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
  },

  // More products...
]

const footerNavigation = {
  styleguide: [
    { name: 'Featured Artists', href: '#' },
    { name: 'Get Featured', href: '#' },
    { name: 'Design Ideas', href: '#' },
    { name: 'How Tos and Tips', href: '#' },
    { name: 'Promotions', href: '#' },
    { name: 'Trending Designs', href: '#' },
  ],
  policies: [
    { name: 'Payment policy', href: '#' },
    { name: 'Shipping policy', href: '#' },
    { name: 'Refunds/Returns', href: '#' },
    { name: 'Terms of service', href: '#' },
    { name: 'Your privacy', href: '#' },
  ],
  customerService: [
    { name: '1-800-356-8904', href: '#' },
    { name: 'Hours: 8am - 5pm ET', href: '#' },
    { name: 'info@stickylife.com', href: '#' },
    { name: '7868 US-70 Bus Suite D Clayton, NC 27520 USA', href: '#' },
    { name: 'About StickyLife', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
    {/* Mobile menu */}
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-red-500 bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-cyan-500 border-cyan-500' : 'text-cyan-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                            </div>
                            <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                              Start Designing 
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create an account
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {/* Currency selector */}
                <form>
                  <div className="inline-block">
                    <label htmlFor="mobile-currency" className="sr-only">
                      Currency
                    </label>
                    <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                      <select
                        id="mobile-currency"
                        name="currency"
                        className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-cyan-900 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                      >
                        {currencies.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                      <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 text-gray-500"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M6 8l4 4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-cyan-500">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div>
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="-ml-2 group relative bg-cyan-500 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="bg-none bg-cyan-500 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-red-800 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-gray-300"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <p className="flex-1 text-center text-sm font-medium text-red-800 lg:flex-none">
                Join Us in Supporting Multiple Sclerosis Month!
              </p>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm font-medium text-cyan-900 hover:text-red-800">
                  Sign in
                </a>
                <a href="#" className="text-sm font-medium text-cyan-900 hover:text-red-800">
                  Create an account
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex-1 lg:flex lg:items-center">
                  <a href="/page-2">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto"
                      src="https://res.cloudinary.com/gravital-digital/image/upload/v1648486325/logo_qojvzx.svg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="px-4 bottom-0 inset-x-0">
                    <div className="h-full flex justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open ? 'text-cyan-500' : 'font-bold text-black hover:text-orange-600',
                                    'relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium'
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-cyan-500' : '',
                                      'absolute z-20 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute z-10 top-full inset-x-0 bg-white text-sm text-cyan-900">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className={classNames(
                                        open ? 'bg-gray-200' : 'bg-transparent',
                                        'w-full h-px transition-colors ease-out duration-200'
                                      )}
                                    />
                                  </div>

                                  <div className="relative">
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                      <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                        {category.featured.map((item) => (
                                          <div key={item.name} className="group relative">
                                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-center object-cover"
                                              />
                                            </div>
                                            <a href={item.href} className="mt-4 block font-medium text-red-800">
                                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                                              {item.name}
                                            </a>
                                            <p aria-hidden="true" className="mt-1">
                                              Start your design<span aria-hidden="true"> &rarr;</span>
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-bold text-black hover:text-orange-600"
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <img
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1648487162/sticky-foot_z0zkqz.png"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>

                <div className="flex-1 flex items-center justify-end">
                  <a href="#" className="hidden text-sm font-medium text-cyan-900 hover:text-orange-600 lg:block">
                    Search
                  </a>

                  <div className="flex items-center lg:ml-8">
                    {/* Help */}
                    <a href="#" className="p-2 text-cyan-900 hover:text-orange-600 lg:hidden">
                      <span className="sr-only">Help</span>
                      <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                    <a href="#" className="hidden text-sm font-medium text-cyan-900 hover:text-orange-600 lg:block">
                      Help
                    </a>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 p-2 flex items-center">
                        <ShoppingBagIcon
                          className="flex-shrink-0 h-6 w-6 text-cyan-500 group-hover:text-orange-600"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-cyan-900 group-hover:text-orange-600">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main section */}
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-red-800">Thank you!</h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">It's on the way!</p>
          <p className="mt-2 text-base text-cyan-900">Your order #14034056 has shipped and will be with you soon.</p>

          <dl className="mt-12 text-sm font-semibold">
            <dt className="text-black">Tracking number</dt>
            <dd className="text-red-800 mt-2">51547878755545848512</dd>
          </dl>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="sr-only">Your order</h2>

          <h3 className="sr-only">Items</h3>
          {products.map((product) => (
            <div key={product.id} className="py-10 border-b border-gray-200 flex space-x-6">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
              />
              <div className="flex-auto flex flex-col">
                <div>
                  <h4 className="font-black text-black">
                    <a href={product.href}>{product.name}</a>
                  </h4>
                  <p className="mt-2 text-sm text-cyan-900">{product.description}</p>
                </div>
                <div className="mt-6 flex-1 flex items-end">
                  <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                    <div className="flex">
                      <dt className="font-semibold text-semibold">Quantity</dt>
                      <dd className="ml-2 text-cyan-900">{product.quantity}</dd>
                    </div>
                    <div className="pl-4 flex sm:pl-6">
                      <dt className="font-semibold text-black">Price</dt>
                      <dd className="ml-2 text-cyan-900">{product.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
              <div>
                <dt className="font-medium text-black">Shipping address</dt>
                <dd className="mt-2 text-cyan-900">
                  <address className="not-italic">
                    <span className="block">Kristin Watson</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-black">Billing address</dt>
                <dd className="mt-2 text-cyan-900">
                  <address className="not-italic">
                    <span className="block">Kristin Watson</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </address>
                </dd>
              </div>
            </dl>

            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
              <div>
                <dt className="font-medium text-black">Payment method</dt>
                <dd className="mt-2 text-cyan-900">
                  <p>Apple Pay</p>
                  <p>Mastercard</p>
                  <p>
                    <span aria-hidden="true">•••• </span>
                    <span className="sr-only">Ending in </span>1545
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-black">Shipping method</dt>
                <dd className="mt-2 text-cyan-900">
                  <p>DHL</p>
                  <p>Takes up to 3 working days</p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
              <div className="flex justify-between">
                <dt className="font-medium text-black">Subtotal</dt>
                <dd className="text-cyan-900">$36.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-black">
                  Discount
                  <span className="rounded-full bg-cyan-200 text-xs text-red-800 py-0.5 px-2 ml-2">STICKY10</span>
                </dt>
                <dd className="text-cyan-900">-$3.60 (10%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-black">Shipping</dt>
                <dd className="text-cyan-900">$5.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-black">Total</dt>
                <dd className="text-black">$37.40</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Trending products section */}
      <section aria-labelledby="trending-heading">
          <div className="bg-contain bg-[url('https://res.cloudinary.com/gravital-digital/image/upload/v1648503475/color-background_m2vfv2.jpg')]">
            <div className="max-w-7xl mx-auto pt-6 pb-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <h2 id="favorites-heading" className="text-2xl font-black tracking-tight text-black">
                  Trending StickyLife Products
                </h2>
                <a href="#" className="hidden text-sm font-medium text-cyan-900 hover:text-orange-600 md:block">
                  See all our products!<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                {trendingProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-black text-black">
                      <a href={product.href}>
                        <span className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-red-800">{product.color}</p>
                    <p className="mt-1 text-sm font-medium text-cyan-900">{product.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-sm md:hidden">
                <a href="#" className="font-medium text-cyan-900 hover:text-orange-600">
                See all our products!<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer aria-labelledby="footer-heading" className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                <img
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1648487162/sticky-foot_z0zkqz.png"
                  alt=""
                  className="h-8 w-auto"
                />
              </div>

              {/* Sitemap sections */}
              <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-bold text-black">Style Guide</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.styleguide.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-cyan-900 hover:text-orange-600">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black">Help</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.policies.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-cyan-900 hover:text-orange-600">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black">Customer Service</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-cyan-900 hover:text-orange-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                <h3 className="text-lg font-lg italic text-red-800">Sign up for StickyLife's newsletter!</h3>
                <p className="mt-6 text-sm text-cyan-900">The latest deals and savings, sent to your inbox monthly. You’ll also be entered into our monthly FREE promo giveaway.</p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-cyan-900 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-purple-400"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-cyan-500 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-semibold text-black hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <div className="py-10">
                <img
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1648501873/firefox_KWNzb3dfqo_yytmdi.png"
                  alt=""
                  className="w-auto"
                />
              </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-black">All Content Copyright © 2009-2022 stickylife.com Use of this web site constitutes acceptance of the Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

