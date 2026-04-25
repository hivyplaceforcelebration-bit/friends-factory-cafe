import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: { value: number; label: string }
  className?: string
  iconColor?: string
  iconBg?: string
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
  iconColor = 'text-amber-600',
  iconBg = 'bg-amber-50',
}: StatsCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-[13px] font-medium text-gray-500">{title}</p>
          <p className="text-[28px] font-bold leading-tight tracking-tight text-gray-900">
            {value}
          </p>
          {subtitle && (
            <p className="text-[12px] font-medium text-gray-400">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center gap-1.5 pt-0.5">
              <span
                className={cn(
                  'inline-flex items-center rounded-full px-1.5 py-0.5 text-[11px] font-semibold',
                  trend.value >= 0
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-red-50 text-red-500'
                )}
              >
                {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-[11px] text-gray-400">{trend.label}</span>
            </div>
          )}
        </div>
        <div className={cn('rounded-xl p-2.5', iconBg)}>
          <Icon className={cn('h-5 w-5', iconColor)} />
        </div>
      </div>
    </div>
  )
}
