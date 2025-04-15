import Image from "next/image"
import img1 from "@/assests/footer/rocket.png"
import img2 from "@/assests/footer/2.png"

export default function PaymentMerchants() {
  const paymentMethods = [
    {
      name: "bKash",
      logo: img1,
      contactNumbers: ["01990779766", "01309014614"],
      color: "rgb(231, 24, 85)", // bKash brand color
    },
    {
      name: "Nagad",
      logo: img2,
      contactNumbers: ["01309014614"],
      color: "rgb(236, 86, 35)", // Nagad brand color
    },
    {
      name: "Rocket",
      logo:img1,
      contactNumbers: ["01309014143"],
      color: "rgb(143, 35, 179)", // Rocket brand color
    },
    {
      name: "SSLCOMMERZ",
      logo: img2,
      contactNumbers: [],
      displayName: "SSLCOMMERZ",
      color: "rgb(0, 84, 166)", // SSLCOMMERZ brand color
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Payment Merchant</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentMethods.map((method, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="h-20 flex items-center justify-center mb-4">
              <div
                style={{ backgroundColor: method.color + "10" }}
                className="p-2 rounded-full w-full h-full flex items-center justify-center"
              >
                <Image
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              {method.contactNumbers.map((number, idx) => (
                <p key={idx} className="text-lg font-medium text-gray-800">
                  {number}
                </p>
              ))}
              {method.displayName && <p className="text-lg font-medium text-gray-800">{method.displayName}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

