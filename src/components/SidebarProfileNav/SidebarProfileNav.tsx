'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { UserCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Meu Perfil', href: '/profile', icon: UserCircleIcon },
  { name: 'Minhas Compras', href: '/profile/my-orders', icon: ShoppingBagIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarProfileNav() {
  const pathname = usePathname()

  return (
    <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0">
      <nav className="flex-none px-4 sm:px-6 lg:px-0">
        <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
          {navigation.map((item) => {
            const isCurrent = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    isCurrent
                      ? 'bg-gray-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                    'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm/6 font-semibold',
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      isCurrent ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                      'size-6 shrink-0',
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

