export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-32 bg-white/20 rounded" />
            <div className="h-10 w-3/4 bg-white/20 rounded" />
            <div className="h-6 w-1/2 bg-white/20 rounded" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-4/5 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
