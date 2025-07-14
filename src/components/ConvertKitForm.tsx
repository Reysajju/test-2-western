import React, { useEffect } from 'react';

const ConvertKitForm: React.FC = () => {
  useEffect(() => {
    // Initialize ConvertKit form when component mounts
    const initializeConvertKit = () => {
      // Check if ConvertKit script is loaded
      if (window.ConvertKit) {
        // Initialize the form
        window.ConvertKit.init();
      } else {
        // Wait for script to load
        setTimeout(initializeConvertKit, 100);
      }
    };

    initializeConvertKit();
  }, []);

  return (
    <div className="convertkit-form-container">
      {/* ConvertKit form will be automatically injected here */}
      <div data-uid="f7f96add48"></div>
    </div>
  );
};

export default ConvertKitForm;