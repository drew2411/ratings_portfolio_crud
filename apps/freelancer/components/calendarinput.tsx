"use client"
// changes the view of the calendar input field
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[11.5rem] h-[1.5rem] relative right-[] text-left font-normal bg-[#1E1F22]",
            !date && "text-muted-foreground"
          )}
        >
 
          {date ? format(date, "PPP") : <span style={{visibility: "hidden"}}>Pick a date</span>}
          <CalendarIcon className="mr-2 h-4 w-4 relative left-[2rem]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
