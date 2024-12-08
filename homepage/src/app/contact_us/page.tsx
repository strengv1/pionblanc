'use client'

import { ChangeEvent, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneCallIcon } from 'lucide-react'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="max-w-screen-md w-full mx-auto mt-24 px-4 flex-1">
      <h1 className="text-3xl font-bold text-center my-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea
            id="message"
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>

      <div className="flex flex-col mt-12">
        <p className="flex items-center">
          <PhoneCallIcon className="mr-2" /><span>+358 50 494 5684</span>
        </p>
        <p className="flex items-center">
          <MailIcon className="mr-2" /> <span>villes-97@hotmail.com</span>
        </p>
      </div>
    </div>
  )
}
