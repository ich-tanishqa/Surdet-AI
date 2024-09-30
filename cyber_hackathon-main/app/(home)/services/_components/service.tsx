import Link from "next/link"

export const Service = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              We provide a wide range of services to help protect from and mitigate the impact of cyber threats.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
            <Link href="/">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-gray-200  overflow-hidden  dark:border-gray-800">
                <img
                  alt="Icon"
                  className="rounded-full object-cover object-center w-full h-full"
                  height="48"
                  src="/malicious.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width="48"
                />
              </div>
              <h3 className="text-lg font-bold">Malicious URL Scanner</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Protection from spurious links.</p>
            </div>
            </Link>
            <Link href="/services/phone">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-gray-200 overflow-hidden dark:border-gray-800">
                <img
                  alt="Icon"
                  className="rounded-full object-cover object-center w-full h-full"
                  height="48"
                  src="/phone.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width="48"
                />
              </div>
              <h3 className="text-lg font-bold">Malicious Phone Scanner</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Scanning fraudlent Phones.</p>
            </div>
            </Link >
            <Link href="http://localhost:8501/">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-gray-200 overflow-hidden  dark:border-gray-800">
                <img
                  alt="Icon"
                  className="rounded-full object-cover object-center w-full h-full"
                  height="48"
                  src="/spam.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width="48"
                />
              </div>
              <h3 className="text-lg font-bold">Email Spam Detection</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Detect Spam Emails.</p>
            </div>
            </Link>
          
            <Link href="/services/leaked_passwords">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-gray-200 overflow-hidden  dark:border-gray-800">
                <img
                  alt="Icon"
                  className="rounded-full object-cover object-center w-full h-full"
                  height="48"
                  src="/leaked_passwords.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width="48"
                />
              </div>
              <h3 className="text-lg font-bold">Leaked Passwords</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Find leaked passwords on Dark Web.</p>
            </div>
            </Link>
          </div>
          <div className="flex justify-center md:justify-start mt-2">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/contact"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    )
}