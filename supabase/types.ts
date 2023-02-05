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
      clients: {
        Row: {
          id: string
          logo: string | null
          name: string
          url: string
        }
        Insert: {
          id: string
          logo?: string | null
          name: string
          url: string
        }
        Update: {
          id?: string
          logo?: string | null
          name?: string
          url?: string
        }
      }
      jobs: {
        Row: {
          clientId: string
          dateFrom: string
          dateTo: string | null
          id: string
          jobDescription: string[]
          jobTitle: string
          projectNames: string[] | null
        }
        Insert: {
          clientId: string
          dateFrom: string
          dateTo?: string | null
          id: string
          jobDescription: string[]
          jobTitle: string
          projectNames?: string[] | null
        }
        Update: {
          clientId?: string
          dateFrom?: string
          dateTo?: string | null
          id?: string
          jobDescription?: string[]
          jobTitle?: string
          projectNames?: string[] | null
        }
      }
      projects: {
        Row: {
          clientId: string | null
          description: string
          id: string
          imageUrl: string
          name: string
          slogan: string | null
          topics: string[]
          url: string | null
        }
        Insert: {
          clientId?: string | null
          description: string
          id: string
          imageUrl: string
          name: string
          slogan?: string | null
          topics: string[]
          url?: string | null
        }
        Update: {
          clientId?: string | null
          description?: string
          id?: string
          imageUrl?: string
          name?: string
          slogan?: string | null
          topics?: string[]
          url?: string | null
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
