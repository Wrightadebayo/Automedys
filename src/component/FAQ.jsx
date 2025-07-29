
import { useState } from "react"
import { questionData } from "../assets/data"
import Questions from "./Questions"

const FAQ = () => {
  const [questions, setQuestions] = useState(questionData)
 return (
    <div>
      <Questions questionData={questionData}/>
    </div>
  )
}

export default FAQ
