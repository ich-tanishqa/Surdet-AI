"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCheck, CheckCircleIcon, ChevronRightIcon, ShieldAlertIcon } from "lucide-react"
import { useState } from "react"

export const Leaked = () => {
    
        const [password, setPassword] = useState("");
  const [isClicked , setIsClicked] = useState(false);

  const handleChange =async (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if(password === ""){
          setIsClicked(false);
      }    
  }
  const [res, setRes] = useState("");
  const handleSubmit =async () => {
        
      setIsClicked(true);
      setRes("");
      const result = await fetch("/api/password", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({password})
      })
      const data = await result.json();
      setRes(data.res);
  }

  return (
    <div className="container grid max-w-5xl items-center gap-4 px-4 py-6 md:gap-8 md:px-6 md:py-12 lg:gap-10 lg:py-16 mb-48 mt-32">
          <div className="space-y-4 text-center md:space-y-5 lg:text-left lg:space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Check your password if it is leaked or not</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter a Password below to scan for potential threats and leaked content.
            </p>
            <div className="mx-auto max-w-sm space-y-4 md:flex md:space-y-0 md:space-x-4 lg:space-x-6">
              <Input className="max-w-[300px] flex-1" placeholder="Enter your Password" type="text" onChange={handleChange}/>
              <Button onClick={handleSubmit}>Scan Password</Button>
            </div> 
              
            
          </div>
          {isClicked && password && (<div className="flex items-center justify-center"> 
            {res === "Password is not leaked" ? <CheckCheck className="w-5 h-5 mr-2 text-green-600" />  : <ShieldAlertIcon className="w-5 h-5 mr-2 text-red-600" />}
            {res}
          </div>)}
    </div>
  )
}