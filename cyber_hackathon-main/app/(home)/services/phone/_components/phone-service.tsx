"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCheck, CheckCircleIcon, ChevronRightIcon, ShieldAlertIcon } from "lucide-react"
import { useState } from "react"

export const PhoneService = () => {


    const [phone, setPhone] = useState("");
  const [isClicked , setIsClicked] = useState(false);

  const handleChange =async (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
      if(phone === ""){
          setIsClicked(false);
      }    
  }
  const [res, setRes] = useState("");
  const handleSubmit =async () => {
        
      setIsClicked(true);
      setRes("");
      const result = await fetch("/api/phone", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({phone})
      })
      const data = await result.json();
      setRes(data.res);
  }

  return (
    <div className="container grid max-w-5xl items-center gap-4 px-4 py-6 md:gap-8 md:px-6 md:py-12 lg:gap-10 lg:py-16">
          <div className="space-y-4 text-center md:space-y-5 lg:text-left lg:space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Check any Phone Number for suspicious activity</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter a Phone Number below to scan for potential threats and Spamming content.
            </p>
            <div className="mx-auto max-w-sm space-y-4 md:flex md:space-y-0 md:space-x-4 lg:space-x-6">
              <Input className="max-w-[300px] flex-1" placeholder="Enter a Phone Number" type="number" onChange={handleChange}/>
              <Button onClick={handleSubmit}>Scan Phone Number</Button>
            </div> 
              
            
          </div>
          {isClicked && phone && (<div className="flex items-center justify-center"> 
            {res === "Phone number is safe" ? <CheckCheck className="w-5 h-5 mr-2 text-green-600" />  : <ShieldAlertIcon className="w-5 h-5 mr-2 text-red-600" />}
            {res}
          </div>)}
          <div className="mx-auto w-full max-w-3xl grid gap-4 lg:gap-6 my-4">
            <Card>
              <CardHeader>
                <h3 className="card-title">Most Scanned</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="font-bold">123-456-7890</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">India</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      <ChevronRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="font-bold">987-654-3210</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Russia</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      <ChevronRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="font-bold">555-555-5555</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">India</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      <ChevronRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
  )
}