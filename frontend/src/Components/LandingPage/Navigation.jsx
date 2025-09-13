import React from 'react';

const Navigation = () => {
  const navItems = ['Membership', 'Shop', 'Article', 'Contact Us'];
  
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex space-x-12">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className={`
                  text-gray-600 hover:text-black px-1 py-2 text-base font-normal 
                  border-b-2 border-transparent hover:border-green-600 transition-colors
                  ${index === 0 ? 'border-green-600 text-black' : ''}
                `}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
