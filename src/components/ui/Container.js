export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-10 2xl:px-14 ${className}`}>
      {children}
    </div>
  );
}

