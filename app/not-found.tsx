import Link from 'next/link';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { serviceCategories, vadodaraAreas } from '@/lib/ffc-config';

export default function NotFound() {
  const topServices = serviceCategories.slice(0, 6);
  const topAreas = vadodaraAreas.slice(0, 8);

  return (
    <>
      <FFCHeader />
      <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-600 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need for your perfect celebration!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              Go Home
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors font-semibold"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Internal links for SEO link equity */}
          <div className="max-w-4xl mx-auto text-left">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-serif">Our Services</h3>
                <ul className="space-y-2">
                  {topServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}`}
                        className="text-amber-600 hover:text-amber-700 hover:underline"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-serif">Areas We Serve</h3>
                <ul className="space-y-2">
                  {topAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/${area.slug}`}
                        className="text-amber-600 hover:text-amber-700 hover:underline"
                      >
                        {area.name}, Vadodara
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FFCFooter />
    </>
  );
}
