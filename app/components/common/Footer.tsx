
import img1 from "@/assests/footer/2.png"
import img2 from "@/assests/footer/2.png"
import img3 from "@/assests/footer/2.png"
import img4 from "@/assests/footer/2.png"


export default function Footer() {
    const paymentMethods = [
      {
        name: "bKash",
        numbers: ["01990779766", "01309014614"],
        logo: img1,
      },
      {
        name: "Nagad",
        numbers: ["01309014614"],
        logo: img2,
      },
      {
        name: "Rocket",
        numbers: ["01309014614"],
        logo: img3,
      },
      {
        name: "SSLCOMMERZ",
        logo:img4,
      },
    ]
  
    return (
      <footer className="w-full bg-white">
        {/* Payment Methods Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-xl font-semibold text-center mb-8">Our Payment Merchant</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-sm border border-gray-100">
                <img src={method.logo || "/placeholder.svg"} alt={method.name} className="h-12 object-contain mb-4" />
                {method.numbers && (
                  <div className="text-center">
                    {method.numbers.map((number, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        {number}
                      </div>
                    ))}
                  </div>
                )}
                {method.name === "SSLCOMMERZ" && <div className="text-sm font-medium text-gray-600">SSLCOMMERZ</div>}
              </div>
            ))}
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg?height=40&width=40" alt="Creative IT Institute" className="h-10" />
                <div className="text-red-600 font-bold">
                  CREATIVE
                  <br />
                  IT INSTITUTE
                </div>
              </div>
  
              {/* Copyright */}
              <div className="text-sm text-gray-600 text-center">
                Copyright © 2024 Creative IT Institute. All right reserved |
                <a href="#" className="text-red-600 ml-1">
                  Sitemap
                </a>
                <div className="text-sm text-gray-500">e-TIN: 570007703094, TL: TRAD/DSCC/228155/2019</div>
              </div>
  
              {/* Social Links */}
              <div className="flex gap-4">
                {["facebook", "linkedin", "youtube", "instagram"].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="sr-only">{social}</span>
                    <img src={`/placeholder.svg?height=20&width=20`} alt={social} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  