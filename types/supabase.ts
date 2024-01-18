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
      ads: {
        Row: {
          created_at: string
          end_at: string | null
          id: number
          is_active: boolean
          position: Database["public"]["Enums"]["ads_position"]
          site_id: number
        }
        Insert: {
          created_at?: string
          end_at?: string | null
          id?: number
          is_active?: boolean
          position?: Database["public"]["Enums"]["ads_position"]
          site_id: number
        }
        Update: {
          created_at?: string
          end_at?: string | null
          id?: number
          is_active?: boolean
          position?: Database["public"]["Enums"]["ads_position"]
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "ads_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ads_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      autolinks: {
        Row: {
          created_at: string
          id: number
          is_active: boolean
          keyword: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_active?: boolean
          keyword?: string
          url?: string
        }
        Update: {
          created_at?: string
          id?: number
          is_active?: boolean
          keyword?: string
          url?: string
        }
        Relationships: []
      }
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
      cons: {
        Row: {
          content: string
          content_cn: string
          created_at: string
          id: number
          order: number
        }
        Insert: {
          content?: string
          content_cn?: string
          created_at?: string
          id?: number
          order?: number
        }
        Update: {
          content?: string
          content_cn?: string
          created_at?: string
          id?: number
          order?: number
        }
        Relationships: []
      }
      cryptos: {
        Row: {
          avatar: string
          avatar_source: string
          created_at: string
          description: string
          id: number
          is_active: boolean
          name: string
          order: number
          shortcode: string
          updated_at: string
        }
        Insert: {
          avatar: string
          avatar_source: string
          created_at: string
          description: string
          id?: number
          is_active: boolean
          name: string
          order: number
          shortcode: string
          updated_at: string
        }
        Update: {
          avatar?: string
          avatar_source?: string
          created_at?: string
          description?: string
          id?: number
          is_active?: boolean
          name?: string
          order?: number
          shortcode?: string
          updated_at?: string
        }
        Relationships: []
      }
      delivers: {
        Row: {
          created_at: string
          domains: Json
          id: number
          mail_id: number | null
          site_id: number
          updated_at: string
        }
        Insert: {
          created_at: string
          domains: Json
          id?: number
          mail_id?: number | null
          site_id: number
          updated_at: string
        }
        Update: {
          created_at?: string
          domains?: Json
          id?: number
          mail_id?: number | null
          site_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivers_mail_id_9875fa82_fk_tmr_mail_id"
            columns: ["mail_id"]
            isOneToOne: false
            referencedRelation: "mails"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivers_site_id_228028f3_fk_sites_id"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivers_site_id_228028f3_fk_sites_id"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      filters: {
        Row: {
          created_at: string
          description: string
          id: number
          is_active: boolean
          navigation_id: number
          order: number
          supplement: string
          tag1_id: number
          tag2_id: number
          updated_at: string
        }
        Insert: {
          created_at: string
          description: string
          id?: number
          is_active: boolean
          navigation_id: number
          order: number
          supplement: string
          tag1_id: number
          tag2_id: number
          updated_at: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          is_active?: boolean
          navigation_id?: number
          order?: number
          supplement?: string
          tag1_id?: number
          tag2_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "filters_navigation_id_fkey"
            columns: ["navigation_id"]
            isOneToOne: false
            referencedRelation: "navigations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filters_tag1_id_fkey"
            columns: ["tag1_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filters_tag2_id_fkey"
            columns: ["tag2_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
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
      mails: {
        Row: {
          address: string
          created_at: string
          id: number
          updated_at: string
        }
        Insert: {
          address: string
          created_at: string
          id?: number
          updated_at: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      navigations: {
        Row: {
          created_at: string
          id: number
          is_active: boolean
          name: string
          order: number
          updated_at: string
        }
        Insert: {
          created_at: string
          id?: number
          is_active: boolean
          name: string
          order: number
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          is_active?: boolean
          name?: string
          order?: number
          updated_at?: string
        }
        Relationships: []
      }
      navis: {
        Row: {
          created_at: string
          deliver_id: number | null
          id: number
          is_active: boolean
          name: string
          order: number
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at: string
          deliver_id?: number | null
          id?: number
          is_active: boolean
          name: string
          order: number
          title: string
          updated_at: string
          url: string
        }
        Update: {
          created_at?: string
          deliver_id?: number | null
          id?: number
          is_active?: boolean
          name?: string
          order?: number
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "navis_deliver_id_fkey"
            columns: ["deliver_id"]
            isOneToOne: false
            referencedRelation: "delivers"
            referencedColumns: ["id"]
          }
        ]
      }
      payments: {
        Row: {
          created_at: string
          id: number
          logo: string | null
          name: string
          name_cn: string
        }
        Insert: {
          created_at?: string
          id?: number
          logo?: string | null
          name?: string
          name_cn?: string
        }
        Update: {
          created_at?: string
          id?: number
          logo?: string | null
          name?: string
          name_cn?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_id: string | null
          created_at: string
          excerpt: string
          featured_image: string | null
          ghost_id: string | null
          html: string | null
          id: number
          is_active: boolean
          is_cn: boolean
          is_important: boolean
          keywords: string | null
          slug: string
          title: string
          uid: string
          updated_at: string
          visited: number
        }
        Insert: {
          author_id?: string | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          ghost_id?: string | null
          html?: string | null
          id?: number
          is_active?: boolean
          is_cn?: boolean
          is_important?: boolean
          keywords?: string | null
          slug?: string
          title?: string
          uid: string
          updated_at?: string
          visited?: number
        }
        Update: {
          author_id?: string | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          ghost_id?: string | null
          html?: string | null
          id?: number
          is_active?: boolean
          is_cn?: boolean
          is_important?: boolean
          keywords?: string | null
          slug?: string
          title?: string
          uid?: string
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
          categories: string[] | null
          created_at: string
          excerpt: string
          featured_image: string | null
          html: string | null
          id: number
          is_cn: boolean
          is_verified: boolean
          keywords: string[] | null
          markdown: string | null
          post_id: number | null
          secrets: Json | null
          slug: string | null
          source: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          author_id?: string | null
          categories?: string[] | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          html?: string | null
          id?: number
          is_cn?: boolean
          is_verified?: boolean
          keywords?: string[] | null
          markdown?: string | null
          post_id?: number | null
          secrets?: Json | null
          slug?: string | null
          source?: string | null
          tags?: string[] | null
          title?: string
        }
        Update: {
          author_id?: string | null
          categories?: string[] | null
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          html?: string | null
          id?: number
          is_cn?: boolean
          is_verified?: boolean
          keywords?: string[] | null
          markdown?: string | null
          post_id?: number | null
          secrets?: Json | null
          slug?: string | null
          source?: string | null
          tags?: string[] | null
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
      posts_sites: {
        Row: {
          created_at: string
          post_id: number
          site_id: number
        }
        Insert: {
          created_at?: string
          post_id: number
          site_id: number
        }
        Update: {
          created_at?: string
          post_id?: number
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "posts_sites_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_sites_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "v_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_sites_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_sites_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
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
      promos: {
        Row: {
          bonus: string
          bonus_cn: string
          code: string
          created_at: string
          id: number
          is_active: boolean
          order: number
          site_id: number
          uid: string
          updated_at: string
          url: string
          url_short: string
        }
        Insert: {
          bonus: string
          bonus_cn?: string
          code: string
          created_at: string
          id?: number
          is_active: boolean
          order: number
          site_id: number
          uid: string
          updated_at: string
          url: string
          url_short: string
        }
        Update: {
          bonus?: string
          bonus_cn?: string
          code?: string
          created_at?: string
          id?: number
          is_active?: boolean
          order?: number
          site_id?: number
          uid?: string
          updated_at?: string
          url?: string
          url_short?: string
        }
        Relationships: [
          {
            foreignKeyName: "promos_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promos_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      pros: {
        Row: {
          content: string
          content_cn: string
          created_at: string
          id: number
          order: number
        }
        Insert: {
          content?: string
          content_cn?: string
          created_at?: string
          id?: number
          order?: number
        }
        Update: {
          content?: string
          content_cn?: string
          created_at?: string
          id?: number
          order?: number
        }
        Relationships: []
      }
      sites: {
        Row: {
          alias: string[] | null
          avatar: string | null
          background_style: Json
          banner: string | null
          created_at: string
          description: string
          description_cn: string
          domains: string[] | null
          id: number
          is_active: boolean
          is_cn: boolean
          is_lower_priority: boolean
          is_recommended: boolean
          is_secondary_domain: boolean
          keywords: string
          name: string
          name_cn: string
          order: number
          rating: number
          short_description: string
          short_description_cn: string
          short_name: string | null
          sides_image: string | null
          square_image: string | null
          type: Database["public"]["Enums"]["type"]
          uid: string
          updated_at: string
          url_source: string
        }
        Insert: {
          alias?: string[] | null
          avatar?: string | null
          background_style?: Json
          banner?: string | null
          created_at?: string
          description?: string
          description_cn?: string
          domains?: string[] | null
          id?: number
          is_active?: boolean
          is_cn?: boolean
          is_lower_priority?: boolean
          is_recommended?: boolean
          is_secondary_domain?: boolean
          keywords?: string
          name?: string
          name_cn?: string
          order?: number
          rating?: number
          short_description?: string
          short_description_cn?: string
          short_name?: string | null
          sides_image?: string | null
          square_image?: string | null
          type?: Database["public"]["Enums"]["type"]
          uid: string
          updated_at?: string
          url_source?: string
        }
        Update: {
          alias?: string[] | null
          avatar?: string | null
          background_style?: Json
          banner?: string | null
          created_at?: string
          description?: string
          description_cn?: string
          domains?: string[] | null
          id?: number
          is_active?: boolean
          is_cn?: boolean
          is_lower_priority?: boolean
          is_recommended?: boolean
          is_secondary_domain?: boolean
          keywords?: string
          name?: string
          name_cn?: string
          order?: number
          rating?: number
          short_description?: string
          short_description_cn?: string
          short_name?: string | null
          sides_image?: string | null
          square_image?: string | null
          type?: Database["public"]["Enums"]["type"]
          uid?: string
          updated_at?: string
          url_source?: string
        }
        Relationships: []
      }
      sites_categories: {
        Row: {
          category_id: number
          created_at: string
          site_id: number
        }
        Insert: {
          category_id: number
          created_at?: string
          site_id: number
        }
        Update: {
          category_id?: number
          created_at?: string
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_categories_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_categories_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_configs: {
        Row: {
          created_at: string
          email: string
          footer: Json
          header: Json
          id: number
          page_size: number
          site_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string
          footer?: Json
          header?: Json
          id?: number
          page_size?: number
          site_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          footer?: Json
          header?: Json
          id?: number
          page_size?: number
          site_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sites_configs_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: true
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_configs_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: true
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_cons: {
        Row: {
          con_id: number
          created_at: string
          site_id: number
        }
        Insert: {
          con_id: number
          created_at?: string
          site_id: number
        }
        Update: {
          con_id?: number
          created_at?: string
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_cons_con_id_fkey"
            columns: ["con_id"]
            isOneToOne: false
            referencedRelation: "cons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_cons_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_cons_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_cryptos: {
        Row: {
          created_at: string
          crypto_id: number
          site_id: number
        }
        Insert: {
          created_at?: string
          crypto_id: number
          site_id: number
        }
        Update: {
          created_at?: string
          crypto_id?: number
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_cryptos_crypto_id_fkey"
            columns: ["crypto_id"]
            isOneToOne: false
            referencedRelation: "cryptos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_cryptos_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_cryptos_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_detail_posts: {
        Row: {
          created_at: string
          order: number
          post_id: number
          site_id: number
        }
        Insert: {
          created_at?: string
          order?: number
          post_id: number
          site_id: number
        }
        Update: {
          created_at?: string
          order?: number
          post_id?: number
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_detail_posts_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_detail_posts_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "v_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_detail_posts_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_detail_posts_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_payments: {
        Row: {
          created_at: string
          payment_id: number
          site_id: number
        }
        Insert: {
          created_at?: string
          payment_id: number
          site_id: number
        }
        Update: {
          created_at?: string
          payment_id?: number
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_payments_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_payments_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_payments_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_pros: {
        Row: {
          created_at: string
          pro_id: number
          site_id: number
        }
        Insert: {
          created_at?: string
          pro_id: number
          site_id: number
        }
        Update: {
          created_at?: string
          pro_id?: number
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_pros_pro_id_fkey"
            columns: ["pro_id"]
            isOneToOne: false
            referencedRelation: "pros"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_pros_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_pros_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_tags: {
        Row: {
          created_at: string
          site_id: number
          tag_id: number
        }
        Insert: {
          created_at?: string
          site_id: number
          tag_id: number
        }
        Update: {
          created_at?: string
          site_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_tags_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_tags_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_tips: {
        Row: {
          content: string
          count: number
          created_at: string
          id: number
          site_id: number
        }
        Insert: {
          content?: string
          count?: number
          created_at?: string
          id?: number
          site_id: number
        }
        Update: {
          content?: string
          count?: number
          created_at?: string
          id?: number
          site_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sites_tips_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_tips_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
            referencedColumns: ["id"]
          }
        ]
      }
      sites_visits: {
        Row: {
          created_at: string
          headers: Json | null
          id: number
          ip: string
          site_id: number
          user_agent: string
        }
        Insert: {
          created_at?: string
          headers?: Json | null
          id?: number
          ip?: string
          site_id: number
          user_agent?: string
        }
        Update: {
          created_at?: string
          headers?: Json | null
          id?: number
          ip?: string
          site_id?: number
          user_agent?: string
        }
        Relationships: [
          {
            foreignKeyName: "sites_visits_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_visits_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "v_sites"
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
          name_cn: string
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
          name_cn?: string
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
          name_cn?: string
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
          ghost_id: string | null
          html: string | null
          id: number | null
          is_active: boolean | null
          is_cn: boolean | null
          is_important: boolean | null
          slug: string | null
          title: string | null
          uid: string | null
          updated_at: string | null
        }
        Relationships: []
      }
      v_sites: {
        Row: {
          alias: string[] | null
          avatar: string | null
          background_style: Json | null
          banner: string | null
          bonus: string | null
          bonus_cn: string | null
          categories: string[] | null
          code: string | null
          created_at: string | null
          description: string | null
          description_cn: string | null
          domains: string[] | null
          id: number | null
          is_active: boolean | null
          is_cn: boolean | null
          is_lower_priority: boolean | null
          is_recommended: boolean | null
          is_secondary_domain: boolean | null
          keywords: string | null
          name: string | null
          name_cn: string | null
          order: number | null
          rating: number | null
          short_description: string | null
          short_description_cn: string | null
          short_name: string | null
          sides_image: string | null
          square_image: string | null
          type: Database["public"]["Enums"]["type"] | null
          uid: string | null
          updated_at: string | null
          url: string | null
          url_source: string | null
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

