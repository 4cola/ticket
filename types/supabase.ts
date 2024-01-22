export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          description: string
          id: number
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          description?: string
          id?: number
          name?: string
          slug: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      configs: {
        Row: {
          created_at: string
          id: number
          key: string
          updated_at: string
          value: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          key?: string
          updated_at?: string
          value?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          key?: string
          updated_at?: string
          value?: Json | null
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string
          description: string
          hash: string | null
          id: number
          source: string | null
          url: string
        }
        Insert: {
          created_at?: string
          description?: string
          hash?: string | null
          id?: number
          source?: string | null
          url?: string
        }
        Update: {
          created_at?: string
          description?: string
          hash?: string | null
          id?: number
          source?: string | null
          url?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_id: string | null
          created_at: string
          excerpt: string
          featured_image: string | null
          html: string | null
          id: number
          is_active: boolean
          keywords: string | null
          slug: string
          title: string
          updated_at: string
          visited: number
        }
        Insert: {
          author_id?: string | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          html?: string | null
          id?: number
          is_active?: boolean
          keywords?: string | null
          slug?: string
          title?: string
          updated_at?: string
          visited?: number
        }
        Update: {
          author_id?: string | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          html?: string | null
          id?: number
          is_active?: boolean
          keywords?: string | null
          slug?: string
          title?: string
          updated_at?: string
          visited?: number
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_categories: {
        Row: {
          category_id: number
          created_at: string
          post_id: number
        }
        Insert: {
          category_id: number
          created_at?: string
          post_id: number
        }
        Update: {
          category_id?: number
          created_at?: string
          post_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "posts_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_categories_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_categories_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "v_posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_raw: {
        Row: {
          author_id: string | null
          created_at: string
          excerpt: string
          featured_image: string | null
          html: string | null
          id: number
          is_verified: boolean
          keywords: string[] | null
          markdown: string | null
          post_id: number | null
          secrets: Json | null
          slug: string | null
          source: string | null
          title: string
        }
        Insert: {
          author_id?: string | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          html?: string | null
          id?: number
          is_verified?: boolean
          keywords?: string[] | null
          markdown?: string | null
          post_id?: number | null
          secrets?: Json | null
          slug?: string | null
          source?: string | null
          title?: string
        }
        Update: {
          author_id?: string | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          html?: string | null
          id?: number
          is_verified?: boolean
          keywords?: string[] | null
          markdown?: string | null
          post_id?: number | null
          secrets?: Json | null
          slug?: string | null
          source?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_raw_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_raw_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: true
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_raw_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: true
            referencedRelation: "v_posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_secrets: {
        Row: {
          created_at: string
          data: Json | null
          id: number
          post_id: number
          version: string | null
        }
        Insert: {
          created_at?: string
          data?: Json | null
          id?: number
          post_id: number
          version?: string | null
        }
        Update: {
          created_at?: string
          data?: Json | null
          id?: number
          post_id?: number
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_secrets_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: true
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_secrets_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: true
            referencedRelation: "v_posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_tags: {
        Row: {
          created_at: string
          post_id: number
          tag_id: number
        }
        Insert: {
          created_at?: string
          post_id: number
          tag_id: number
        }
        Update: {
          created_at?: string
          post_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "posts_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "v_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      tags: {
        Row: {
          count: number
          created_at: string
          description: string
          id: number
          is_active: boolean
          name: string
          order: number
          slug: string
          updated_at: string
        }
        Insert: {
          count?: number
          created_at?: string
          description?: string
          id?: number
          is_active?: boolean
          name?: string
          order?: number
          slug: string
          updated_at?: string
        }
        Update: {
          count?: number
          created_at?: string
          description?: string
          id?: number
          is_active?: boolean
          name?: string
          order?: number
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      v_posts: {
        Row: {
          categories: string[] | null
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          html: string | null
          id: number | null
          is_active: boolean | null
          slug: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      generate_uid: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      ads_position: "sides" | "banner" | "right-sticky"
      type: "navi" | "promo" | "spider" | "undo" | "unknown"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

