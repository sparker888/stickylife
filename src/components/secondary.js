import * as React from "react"
import { Link } from "gatsby"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  categories: [
    {
      name: 'Stickers & Static Clings',
      featured: [
        {
          name: 'Vinyl Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567859/Custom-Paper-Stickers_wmti9a.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Bumper Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567918/circle-vinyl-sticker_eidzkj.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Paper Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Reflective Stickers',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
        {
          name: 'Static Clings',
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
      name: 'Decals & Lettering',
      featured: [
        {
          name: 'Decals',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567859/Custom-Paper-Stickers_wmti9a.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Wall Decals',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567918/circle-vinyl-sticker_eidzkj.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Custom Cut Decals',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Vinyl Lettering',
          href: '../page-3/',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
        {
          name: 'Boat Lettering',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'ATV Lettering',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Signs & Banners',
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
          imageAlt: 'Tousled polaroid tilde praxis poutine godard synth blue bottle.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
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
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
        },
      ],
    },
    {
      name: 'Cars, Boats & ATVs',
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
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
        },
      ],
    },
    {
      name: 'Apparel & Tattoos',
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
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
        },
      ],
    },
    {
      name: 'Dog Tags & Keychains',
      featured: [
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566275/competitor-image-1_iknytc.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566341/competitor-image-2_edwmzr.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
        },
      ],
    },
    {
      name: 'Accessories',
      featured: [
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566275/competitor-image-1_iknytc.jpg',
          imageAlt: 'Stickers you remember as a kid and the type your parents hated to clean up afterwards.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566341/competitor-image-2_edwmzr.jpg',
          imageAlt: 'This is what most people are likely looking for when shopping for stickers.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566369/competitor-image-3_s0jzy1.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648566391/competitor-image-4_xmiac6.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648567954/Reflective-StickerSheets_hd14ud.jpg',
          imageAlt: 'Custom reflective stickers as an option for high visibility in low light scenarios.',
        },
        {
          name: 'Additional category',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1648502160/custom-stickers_opcjbp.jpg',
          imageAlt: 'Custom stickers delivered kiss-cut on individual liners..',
        },
      ],
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Secondary() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
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
                              selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
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
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-8 flex-1 items-center justify-between">
                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0 justify-center">
                      <div className="h-full flex space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex justify-center">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'border-cyan-500 text-cyan-500'
                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                    )}
                                  >
                                    {category.name}
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
                                  <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="max-w-7xl mx-auto px-8">
                                        <div className="grid grid-cols-6 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item) => (
                                            <div key={item.name} className="group relative">
                                              <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-center object-cover"
                                                />
                                              </div>
                                              <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                {item.name}
                                              </a>
                                              <p aria-hidden="true" className="mt-1">
                                                Shop now
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
                      </div>
                    </Popover.Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
