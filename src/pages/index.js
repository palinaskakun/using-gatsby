import * as React from "react"

const bucketListItems = [
  "Travel to Iceland",
  "Learn Italian",
  "Take figure skating classes",
  "Write a book about my family history",
  "Travel to Japan",
  "Travel to Australia",
  "Visit Universal Studios Park",
  "See the Eiffel Tower",
  "See Northern Lights",
  "Go bungee jumping",
  "Kayaking",
  "Complete a marathon",
  "Taylor Swift concert",
  "Become famous for something good",
  "Make a million dollars",
  "Visit Grand Canyon",
  "Go on a long roadtrip in Russia"
]

const IndexPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-purple-800 mb-8">
        My Bucket List
      </h1>
      <ul className="grid grid-cols-1 gap-4">
        {bucketListItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="ml-3 text-lg text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
