const Baner = () => {
  return (
    <div className="mb-8">
      {/* Desktop Section */}
      <div className="hidden sm:flex flex-col justify-center items-center gap-2">
        <span className="flex gap-2 text-3xl">
          <p className="bg-pink-500 text-white rounded-lg p-1">لوکس</p> ترین ها
          را از ما بخواهید
        </span>
        <span className="text-3xl text-gray-400 border-b-2">
          Luxury Shose Gallery
        </span>
      </div>

      {/* Mobile Section */}
      <div className="flex items-center justify-between sm:hidden">
        Mobile Section
      </div>
    </div>
  );
};

export default Baner;
