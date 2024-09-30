export const About = () => {
    return (
        <div className="w-full">
        <div className="py-12 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">About Us</h1>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  We are a team of passionate individuals dedicated to making the world a better place through technology.
                  Our mission is to innovate, inspire, and impact lives.
                </p>
              </div>
              <img
                alt="About Us"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-top lg:order-last lg:aspect-[4/3]"
                height="300"
                src="/about.png"
                width="700"
              />
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col space-y-1">
                    <img
                      alt="Team Member"
                      className="aspect-square rounded-lg object-cover"
                      height="150"
                      src="/male.png"
                      width="150"
                    />
                    <div className="flex-1 grid gap-1.5">
                      <h3 className="font-semibold">Archit Gupta</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <img
                      alt="Team Member"
                      className="aspect-square rounded-lg object-cover"
                      height="150"
                      src="/female.png"
                      width="150"
                    />
                    <div className="flex-1 grid gap-1.5">
                      <h3 className="font-semibold">Tanishqa Bansal</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <img
                      alt="Team Member"
                      className="aspect-square rounded-lg object-cover"
                      height="150"
                      src="/male.png"
                      width="150"
                    />
                    <div className="flex-1 grid gap-1.5">
                      <h3 className="font-semibold">Manan Alfred</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <img
                      alt="Team Member"
                      className="aspect-square rounded-lg object-cover"
                      height="150"
                      src="/male.png"
                      width="150"
                    />
                    <div className="flex-1 grid gap-1.5">
                      <h3 className="font-semibold">Ghanim</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mission and Values</h2>
                <p className="max-w-prose text-gray-500 md:text-xl dark:text-gray-400">
                  Our mission is to innovate, inspire, and impact lives. We achieve this through our core values of
                  creativity, teamwork, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}