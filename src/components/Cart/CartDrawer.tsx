'use client'

import Link from 'next/link'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'
import { useCart } from '@/src/hooks/useCart'

const products = [
  {
    id: 1,
    name: 'Livro Personalizado - Aventura',
    href: '/product/slug-example',
    price: 'R$ 49,90',
    color: 'Aventura',
    size: 'Médio',
    inStock: true,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-03-product-04.jpg',
    imageAlt: 'Livro personalizado de aventura para crianças.',
  },
  {
    id: 2,
    name: 'Livro Personalizado - Fantasia',
    href: '/product/slug-example',
    price: 'R$ 49,90',
    color: 'Fantasia',
    inStock: false,
    leadTime: '7-8 dias',
    size: 'Grande',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: 'Livro personalizado de fantasia para crianças.',
  },
  {
    id: 3,
    name: 'Livro Personalizado - Educativo',
    href: '/product/slug-example',
    price: 'R$ 49,90',
    color: 'Educativo',
    inStock: true,
    size: 'Grande',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: 'Livro personalizado educativo para crianças.',
  },
]

export default function CartDrawer() {
  const { isOpen, close } = useCart()

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Carrinho de compras</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={close}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Fechar painel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <Link href={product.href}>{product.name}</Link>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                              </div>
                              <div className="mt-4 flex flex-1 items-end justify-between">
                                <p className="flex items-center space-x-2 text-sm text-gray-700">
                                  {product.inStock ? (
                                    <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                                  ) : (
                                    <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                                  )}
                                  <span>{product.inStock ? 'Em estoque' : `Enviará em ${product.leadTime}`}</span>
                                </p>

                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remover
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>R$ 96,00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Frete e impostos calculados no checkout.</p>
                  <div className="mt-6">
                    <Link
                      href="/cart/checkout"
                      onClick={close}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Finalizar Pedido
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ou{' '}
                      <button
                        type="button"
                        onClick={close}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continuar Comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

