'use client'

import SidebarProfileNav from '@/src/components/SidebarProfileNav/SidebarProfileNav'

export default function ProfilePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pt-8 sm:pt-12 lg:flex lg:gap-x-16 px-4 sm:px-6 lg:px-8 bg-white">
        <h1 className="sr-only">Configurações Gerais</h1>

        <SidebarProfileNav />

        <main className="px-4 sm:px-6 lg:flex-auto lg:px-0">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Perfil</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Esta informação será exibida publicamente, então tenha cuidado com o que compartilhar.
              </p>

              <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Nome completo</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Tom Cook</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Atualizar
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">E-mail</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">tom.cook@example.com</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Atualizar
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Título</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Gerente de Recursos Humanos</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Atualizar
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Contas bancárias</h2>
              <p className="mt-1 text-sm/6 text-gray-500">Conecte contas bancárias à sua conta.</p>

              <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">TD Canada Trust</div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Atualizar
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">Royal Bank of Canada</div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Atualizar
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button type="button" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                  <span aria-hidden="true">+</span> Adicionar outra conta
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Integrações</h2>
              <p className="mt-1 text-sm/6 text-gray-500">Conecte aplicativos à sua conta.</p>

              <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">QuickBooks</div>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Atualizar
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button type="button" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                  <span aria-hidden="true">+</span> Adicionar outro aplicativo
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base/7 font-semibold text-gray-900">Idioma e datas</h2>
              <p className="mt-1 text-sm/6 text-gray-500">
                Escolha qual idioma e formato de data usar em toda a sua conta.
              </p>

              <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Idioma</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Português</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Atualizar
                    </button>
                  </dd>
                </div>
                <div className="py-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Formato de data</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">DD-MM-AAAA</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Atualizar
                    </button>
                  </dd>
                </div>
                <div className="flex pt-6">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Fuso horário automático</dt>
                  <dd className="flex flex-auto items-center justify-end">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
                      <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5" />
                      <input
                        defaultChecked
                        name="automatic-timezone"
                        type="checkbox"
                        aria-label="Fuso horário automático"
                        className="absolute inset-0 size-full appearance-none focus:outline-none"
                      />
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
