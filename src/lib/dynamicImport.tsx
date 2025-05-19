import dynamic from 'next/dynamic'
import { ComponentType, ReactNode } from 'react'

export interface LoadingProps {
  children?: ReactNode
}

const DefaultLoading = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse">Loading...</div>
  </div>
)

interface DynamicImportOptions {
  ssr?: boolean
}

export function dynamicImport<T = any>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: DynamicImportOptions = {}
) {
  const { ssr = true } = options
  
  return dynamic(importFunc, {
    ssr,
    loading: DefaultLoading,
  })
} 