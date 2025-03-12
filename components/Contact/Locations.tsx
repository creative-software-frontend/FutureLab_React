import { Phone, Clock, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type OfficeLocation = {
  title: string
  type: "Head Office" | "Branch Office"
  address: string[]
  phones: string[]
  email: string
  mapSrc: string
  visitTime: string
}

const locations: OfficeLocation[] = [
  {
    title: "Head Office [Main Campus, Dhaka]",
    type: "Head Office",
    address: ["Momtaz Plaza (5th Floor)", "Opposite of Labaid Hospital", "Dhanmondi 27", "Dhaka - 1205, Bangladesh"],
    phones: ["+880 1727308777", "+880 1727308778", "+880 1552186444", "+880 1966177177", "+880 1625555444"],
    email: "info@creativeitinstitute.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2258800127246!2d90.37352807538926!3d23.738122178607744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a02be491%3A0x5b5e96c0c5c1c0f0!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1709825437444!5m2!1sen!2sbd",
    visitTime: "9:30 am to 9:00 pm",
  },
  {
    title: "Head Office [Dhanmondi, Dhaka]",
    type: "Head Office",
    address: ["Mirpur Tech (5th floor)", "House#15/A, Road#3 Dhanmondi", "Dhaka - 1205, Bangladesh"],
    phones: ["+880 1625555444", "+880 1966177177", "+880 1958155245"],
    email: "info@creativeitinstitute.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2258800127246!2d90.37352807538926!3d23.738122178607744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a02be491%3A0x5b5e96c0c5c1c0f0!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1709825437444!5m2!1sen!2sbd",
    visitTime: "9:30 am to 9:00 pm",
  },
  {
    title: "Branch Office [Chattogram Branch]",
    type: "Branch Office",
    address: ["H.M. Harongate Road (4th Floor)", "Beside Mimi Super Market", "Chattogram 4203, Bangladesh"],
    phones: ["+880 1847422968", "+880 1847422969", "+880 1847422969"],
    email: "ctg@creativeitinstitute.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2258800127246!2d90.37352807538926!3d23.738122178607744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a02be491%3A0x5b5e96c0c5c1c0f0!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1709825437444!5m2!1sen!2sbd",
    visitTime: "9:30 am to 9:00 pm",
  },
]

export default function ContactSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-primary  mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-12">
          You are welcome to visit our office for any information related to course and training. You can also reach us
          through the below number or messenger.
        </p>

        <div className="space-y-12">
          {locations.map((location, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-0 lg:left-4 z-10">
                <span className="inline-block bg-green-500 text-white px-3 py-1 text-sm font-medium rounded">
                  {location.type}
                </span>
              </div>

              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Map Section */}
                  <div className="relative h-[250px] lg:h-full min-h-[200px]">
                    <iframe
                      src={location.mapSrc}
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* Contact Information */}
                  <div className="p-6">
                    <CardHeader className="px-0">
                      <CardTitle className="text-xl font-bold text-red-600">{location.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 space-y-6">
                      {/* Address */}
                      <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        <div className="space-y-1">
                          {location.address.map((line, i) => (
                            <p key={i} className="text-gray-600">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Phone Numbers */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="h-5 w-5 text-gray-500" />
                          <h3 className="font-semibold">Phone Number</h3>
                        </div>
                        <div className="space-y-1 ml-7">
                          {location.phones.map((phone, i) => (
                            <p key={i} className="text-gray-600">
                              {phone}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Office Visit Time */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <h3 className="font-semibold">Office Visit Time</h3>
                        </div>
                        <p className="text-gray-600 ml-7">
                          Saturday - Friday
                          <br />
                          {location.visitTime}
                        </p>
                      </div>

                      {/* Email */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="h-5 w-5 text-gray-500" />
                          <h3 className="font-semibold">E-Mail</h3>
                        </div>
                        <p className="text-gray-600 ml-7">{location.email}</p>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

