"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export const Report = () => {

    
    const [url, setUrl] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const form = event.currentTarget;
        const formObject = {
          url: url,
          email: email,
          description: description
        }

        const data = await fetch("/api" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formObject)
        }).then(() => {
            console.log("URL reported successfully!");
        })

        form.reset();

    }
    
    
    return (
        <form  onSubmit={handleSubmit} className="grid w-full max-w-sm gap-4">
      <div className="grid w-full gap-0.5">
        <Label htmlFor="url">URL</Label>
        <Input aria-errormessage="Enter a valid URL." id="url" placeholder="Enter URL here" required type="url" onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div className="grid w-full gap-0.5">
        <Label htmlFor="email">Email</Label>
        <Input aria-errormessage="Enter a valid email." onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter email here" required type="email" />
      </div>
      <div className="grid w-full gap-0.5">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter description here" required onChange={(e) => setDescription(e.target.value)} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
    )
}