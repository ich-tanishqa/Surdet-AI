
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FolderClosedIcon, MapPinIcon, PhoneIcon } from "lucide-react"

export const ContactUs = () => {

    
  return (
    <div className="container grid gap-12 px-4 py-12 md:py-24 md:grid-cols-2 lg:px-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400">We'll get back to you as soon as possible.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter the subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
          <Button  type="submit">Send message</Button>
        </form>
      </div>
      <div className="flex flex-col items-start gap-4 text-sm min-w-0">
        <div className="flex items-center gap-4">
          <MapPinIcon className="w-6 h-6 flex-shrink-0" />
          <div className="space-y-1.5">
            <h3 className="font-semibold">Visit Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">123 Street Name, City, Country</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-6 h-6 flex-shrink-0" />
          <div className="space-y-1.5">
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">+1 (234) 567-8900</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FolderClosedIcon className="w-6 h-6 flex-shrink-0" />
          <div className="space-y-1.5">
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">hello@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}


