import { Card } from "@/components/ui/card";

export default function About() {

  const cardClass = "h-60 w-96 md:h-96 md:w-60 my-4 flex justify-center"
  return (
    <div className="w-full flex flex-1 flex-col items-center">
      <div className="py-20 lg:py-32  text-left" style={{ minWidth:"80%" }}>
        <h1 className="font-bold">Tarinamme</h1>
        <p>
          Olemme firma Espoosta jahuu me halutaa mökki!
        </p>
      </div>
      
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center bg-muted">
        <Card className={`${cardClass}`}>Jan</Card>
        <Card className={`${cardClass}`}>Lauri</Card>
        <Card className={`${cardClass}`}>Ville</Card>
        <Card className={`${cardClass}`}>Onni</Card>
      </div>
    </div>
  )
}