export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          description: string
          id: string
          imageUrl: string
          name: string
          topics: string[]
          url: string | null
        }
        Insert: {
          description: string
          id: string
          imageUrl: string
          name: string
          topics: string[]
          url?: string | null
        }
        Update: {
          description?: string
          id?: string
          imageUrl?: string
          name?: string
          topics?: string[]
          url?: string | null
        }
      }
      users: {
        Row: {
          emailAddress: string | null
          firstName: string | null
          id: string
          lastName: string | null
        }
        Insert: {
          emailAddress?: string | null
          firstName?: string | null
          id: string
          lastName?: string | null
        }
        Update: {
          emailAddress?: string | null
          firstName?: string | null
          id?: string
          lastName?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
