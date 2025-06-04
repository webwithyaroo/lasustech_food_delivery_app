import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full px-4 py-10 md:py-20 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
            alt="About"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-start md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold font-inter ">
            {" "}
            Who We Are
          </h2>
          <h2 className="text-xl sm:text-3xl  font-semibold font-inter ">
            <span className="text-accent font-montserrat">Our Story</span>
            <span className="text-gray-500 font-montserrat">
              {" "}
              - A Culinary Journey
            </span>
            <br />
            <span className="text-secondary-foreground font-montserrat">
              From Passion to Plate
            </span>
          </h2>
          <p className="text-secondary-foreground md:text-xl text-lg leading-relaxed font-montserrat">
            Welcome to our cafe, where passion meets flavor. We are a team of
            food enthusiasts dedicated to bringing you the best culinary
            experiences. Our mission is to create a warm and inviting space for
            everyone to enjoy delicious food and great company.
          </p>
          <p className="text-secondary-foreground md:text-xl text-lg leading-relaxed font-montserrat">
            At our cafe, we craft meals with love, using only the freshest
            ingredients. From nutritious breakfasts to indulgent treats, we
            serve food that feeds the soul and delights the senses.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="text-start border-r pr-6">
                <h4 className="text-3xl font-bold text-gray-900">150+</h4>
                <p className="text-sm text-gray-500 mt-1 font-montserrat">
                  Dishes Served
                </p>
              </div>
              <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
              <div className="text-start border-r pr-6">
                <h4 className="text-3xl font-bold text-gray-900">25</h4>
                <p className="text-sm text-gray-500 mt-1 font-montserrat">
                  Team Members
                </p>
              </div>
              <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
              <div className="text-start ">
                <h4 className="text-3xl font-bold text-gray-900">10yrs</h4>
                <p className="text-sm text-gray-500 mt-1 font-montserrat">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
