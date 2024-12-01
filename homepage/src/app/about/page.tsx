import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-12 md:py-16 lg:py-32  text-left" style={{ minWidth:"80%" }}>
        <h1 className="font-bold">Tarinamme</h1>
        <p>
          Olemme firma Espoosta jahuu me halutaa mökki!
        </p>
      </div>
      
      <div className="w-full flex flex-col items-center md:flex-row md:justify-evenly p-4 lg:p-8 bg-slate-300">
        <Card className="h-60 w-96 md:h-96 md:w-60 my-4 flex justify-center">Jan</Card>
        <Card className="h-60 w-96 md:h-96 md:w-60 my-4 flex justify-center">Lauri</Card>
        <Card className="h-60 w-96 md:h-96 md:w-60 my-4 flex justify-center">Ville</Card>
        <Card className="h-60 w-96 md:h-96 md:w-60 my-4 flex justify-center">Onni</Card>
      </div>
    </div>
  )
}