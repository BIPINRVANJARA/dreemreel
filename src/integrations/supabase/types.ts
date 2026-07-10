export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      leads: {
        Row: {
          created_at: string
          email: string | null
          event_date: string | null
          event_type: string | null
          id: string
          message: string | null
          name: string
          phone: string | null
          source: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          event_date?: string | null
          event_type?: string | null
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          event_date?: string | null
          event_type?: string | null
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          source?: string | null
        }
        Relationships: []
      }
      reels: {
        Row: {
          category: Database["public"]["Enums"]["reel_category"]
          created_at: string
          duration_seconds: number | null
          featured: boolean
          id: string
          location: string | null
          orientation: string
          published: boolean
          sort_order: number
          thumbnail_url: string | null
          title: string
          video_url: string
        }
        Insert: {
          category?: Database["public"]["Enums"]["reel_category"]
          created_at?: string
          duration_seconds?: number | null
          featured?: boolean
          id?: string
          location?: string | null
          orientation?: string
          published?: boolean
          sort_order?: number
          thumbnail_url?: string | null
          title: string
          video_url: string
        }
        Update: {
          category?: Database["public"]["Enums"]["reel_category"]
          created_at?: string
          duration_seconds?: number | null
          featured?: boolean
          id?: string
          location?: string | null
          orientation?: string
          published?: boolean
          sort_order?: number
          thumbnail_url?: string | null
          title?: string
          video_url?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          deliverables: Json
          description: string | null
          duration: string | null
          icon: string | null
          id: string
          price_from: string | null
          published: boolean
          slug: string
          sort_order: number
          title: string
        }
        Insert: {
          deliverables?: Json
          description?: string | null
          duration?: string | null
          icon?: string | null
          id?: string
          price_from?: string | null
          published?: boolean
          slug: string
          sort_order?: number
          title: string
        }
        Update: {
          deliverables?: Json
          description?: string | null
          duration?: string | null
          icon?: string | null
          id?: string
          price_from?: string | null
          published?: boolean
          slug?: string
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          created_at: string
          handle: string | null
          id: string
          name: string
          published: boolean
          quote: string
          rating: number
          sort_order: number
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          handle?: string | null
          id?: string
          name: string
          published?: boolean
          quote: string
          rating?: number
          sort_order?: number
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          handle?: string | null
          id?: string
          name?: string
          published?: boolean
          quote?: string
          rating?: number
          sort_order?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      reel_category:
        | "wedding"
        | "pre_wedding"
        | "birthday"
        | "commercial"
        | "instagram_reel"
        | "event"
        | "drone"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      reel_category: [
        "wedding",
        "pre_wedding",
        "birthday",
        "commercial",
        "instagram_reel",
        "event",
        "drone",
        "other",
      ],
    },
  },
} as const
