declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_API_URL?: string
      REVALIDATION_SECRET?: string
    }
  }
} 