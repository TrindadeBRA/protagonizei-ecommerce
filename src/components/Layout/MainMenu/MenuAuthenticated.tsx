'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useCart } from '@/src/hooks/useCart'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

interface MenuAuthenticatedProps {
  onToggleAuth: () => void
}

export default function MenuAuthenticated({ onToggleAuth }: MenuAuthenticatedProps) {
  const [open, setOpen] = useState(false)
  const { open: openCart } = useCart()

  return (
    <header className="relative">
      <nav aria-label="Top">
        {/* Top navigation */}
        <div className="relative isolate overflow-hidden bg-gray-50">
          <div
            aria-hidden="true"
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form className="hidden lg:block lg:flex-1">
              <div className="-ml-2 inline-grid grid-cols-1">
                <select
                  id="desktop-currency"
                  name="currency"
                  aria-label="Currency"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-0.5 pl-2 pr-7 text-left text-base font-medium text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-gray-900 sm:text-sm/6"
                >
                  {currencies.map((currency) => (
                    <option key={currency} className="bg-white text-gray-900">{currency}</option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-400"
                />
              </div>
            </form>

            <p className="flex-1 text-center text-sm font-medium text-gray-900 lg:flex-none">
              Frete grátis em pedidos acima de R$ 100
            </p>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <button
                onClick={onToggleAuth}
                className="-m-1 mr-2 p-1 text-gray-400 hover:text-gray-500"
                title="Modo Visitante"
              >
                <span className="sr-only">Modo Visitante</span>
                <ArrowRightOnRectangleIcon aria-hidden="true" className="size-5" />
              </button>
              <span aria-hidden="true" className="h-6 w-px bg-gray-300" />
              <Link href="/profile" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                Minha Conta
              </Link>
              <span aria-hidden="true" className="h-6 w-px bg-gray-300" />
              <Link href="/profile/my-orders" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                Meus Pedidos
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Links */}
              <TabGroup className="mt-2">
                <div className="border-b border-gray-200">
                  <TabList className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <TabPanels as={Fragment}>
                  {navigation.categories.map((category, categoryIdx) => (
                    <TabPanel key={category.name} className="space-y-12 px-4 pb-6 pt-10">
                      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                          <div>
                            <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                              Featured
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                              className="mt-6 space-y-6"
                            >
                              {category.featured.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p id="mobile-categories-heading" className="font-medium text-gray-900">
                              Categories
                            </p>
                            <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                              {category.categories.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                          <div>
                            <p id="mobile-collection-heading" className="font-medium text-gray-900">
                              Collection
                            </p>
                            <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                              {category.collection.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p id="mobile-brand-heading" className="font-medium text-gray-900">
                              Brands
                            </p>
                            <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                              {category.brands.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <button
                  type="button"
                  onClick={() => {
                    openCart()
                    setOpen(false)
                  }}
                  className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <ShoppingCartIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                  Carrinho
                </button>
                <button
                  onClick={() => {
                    onToggleAuth()
                    setOpen(false)
                  }}
                  className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <ArrowRightOnRectangleIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                  Modo Visitante
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Secondary navigation */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-24 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:items-center">
                  <Link href="/">
                    <span className="sr-only">Protagonizei</span>
                    <img
                      alt="Protagonizei"
                      src="/assets/logo black.svg"
                      className="h-20 w-auto"
                    />
                  </Link>
                </div>

                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category, categoryIdx) => (
                      <Popover key={category.name} className="flex">
                        <div className="relative flex">
                          <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
                            {category.name}
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-[open]:bg-indigo-600"
                            />
                          </PopoverButton>
                        </div>
                        <PopoverPanel
                          transition
                          className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />
                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      id={`desktop-featured-heading-${categoryIdx}`}
                                      className="font-medium text-gray-900"
                                    >
                                      Featured
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {category.featured.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                      Categories
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-categories-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {category.categories.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                      Collection
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-collection-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {category.collection.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                      Brands
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-brand-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {category.brands.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </Popover>
                    ))}
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </PopoverGroup>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </button>

                  {/* Search */}
                  <Link href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </Link>
                </div>

                {/* Logo (lg-) */}
                <Link href="/" className="lg:hidden">
                  <span className="sr-only">Protagonizei</span>
                  <img
                    alt="Protagonizei"
                    src="/assets/logo black.svg"
                    className="h-8 w-auto"
                  />
                </Link>

                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <Link href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                        </Link>
                      </div>

                      <div className="flex">
                        <Link href="/profile" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Account</span>
                          <UserIcon aria-hidden="true" className="size-6" />
                        </Link>
                      </div>
                    </div>

                    <span aria-hidden="true" className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" />

                    <div className="flow-root">
                      <button
                        type="button"
                        onClick={openCart}
                        className="group -m-2 flex items-center p-2"
                      >
                        <ShoppingCartIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

