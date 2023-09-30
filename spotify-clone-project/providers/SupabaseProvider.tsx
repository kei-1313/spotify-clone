"use client"

import { Database } from "@/types_db"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"

interface SupabaseProviderProps {
  children: React.ReactNode
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children
}) => {
  cosnt[createClientComponentClient] = useState(() => {
    createClientComponentClient<Database>
  })

  
}