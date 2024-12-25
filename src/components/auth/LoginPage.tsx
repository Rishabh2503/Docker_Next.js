'use client'

import { LoginForm } from './LoginForm'

export const LoginPage = () => {
  return (
    <div className="w-full max-w-md p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}