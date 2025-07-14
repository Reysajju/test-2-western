import React, { useEffect } from 'react';

const ConvertKitForm: React.FC = () => {
  useEffect(() => {
    // Wait for ConvertKit script to load and initialize
    const checkConvertKit = () => {
      if (typeof window !== 'undefined' && (window as any).ConvertKit) {
        (window as any).ConvertKit.init();
      } else {
        setTimeout(checkConvertKit, 500);
      }
    };
    
    // Start checking after a short delay to ensure DOM is ready
    setTimeout(checkConvertKit, 1000);
  }, []);

  return (
    <div className="convertkit-form-container w-full">
      {/* ConvertKit form will be automatically injected here */}
      <div data-uid="23453ee44b" className="w-full"></div>
    </div>
  );
};

export default ConvertKitForm;