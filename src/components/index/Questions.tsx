
import { QuestionsForm } from "./questions/QuestionsForm";
import { QuestionsVideos } from "./questions/QuestionsVideos";

const Questions = () => {

  return(
    <div className="container mx-auto pt-10">
    <div className="grid grid-cols-2 bg-shadow-video">
      <div className="flex items-center bg-video">
        <QuestionsVideos></QuestionsVideos>
      </div>
      <div className="desc p-10">
        <h3 className="pb-5 text-2xl font-semibold">Leave Your Questions</h3>
        <QuestionsForm></QuestionsForm>
      </div>
    </div>
    <div>
    
    
    </div>
  </div>
  )
 
};

export { Questions };
