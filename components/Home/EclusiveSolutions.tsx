import { Card, CardContent } from "@/components/ui/card"
import { Heart, BriefcaseIcon, PlayCircle } from "lucide-react"

export default function ExclusiveSolutions() {
  const solutions = [
    {
      icon: <Heart className="w-12 h-12 text-purple-500" />,
      title: "Lifetime Support",
      description:
        "Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you to overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.",
    },
    {
      icon: <BriefcaseIcon className="w-12 h-12 text-sky-500" />,
      title: "Career Placement Support",
      description:
        "Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager. So far this department has helped more than 42000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 46% in 2024.",
    },
    {
      icon: <PlayCircle className="w-12 h-12 text-green-500" />,
      title: "Class Videos",
      description:
        "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.",
    },
  ]

  return (
    <section className="py-16 bg-white min-h-scree">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Solutions that Set Us Apart</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our aim is to make your learning experience the best possible by providing you with additional facilities
            that will help you to grow without bounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-[#fdfdf7] border-none shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="rounded-full p-2 bg-white shadow-sm">{solution.icon}</div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary   hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Our Facility
          </button>
        </div>
      </div>
    </section>
  )
}

