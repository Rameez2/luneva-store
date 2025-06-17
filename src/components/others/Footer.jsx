import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                ✨ Store
              </h3>
              <p className="text-gray-300 text-sm">Curating the finest products for your modern lifestyle.</p>
            </div>

            {[
              { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
              { title: "Support", links: ["Contact Us", "Shipping Info", "Returns", "Size Guide"] },
              { title: "Company", links: ["About", "Careers", "Privacy", "Terms"] },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Store. All rights reserved. Made with 💜</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
