'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Image src="/cassandra-logo.png" alt="Cassandra logo" width={32} height={32} className="h-8 w-8" />
            <span>Cassandra</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/analyze"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/analyze')
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Analyze
            </Link>
            <Link
              href="/report"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/report')
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Report
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
