import React, { useState } from "react";
import {Card, CardHeader, CardBody, Image, CardFooter,Button} from "@nextui-org/react";
import './card.scss'


export default function CardComponent(props) {
    
    const [front,setFront]=useState(false)

    function flipLogic(){
        if(props.enable==false){
            setFront(!front)
            props.disable(true)
        }
        }
        function reset(){
            setFront(!front)
            props.reset("reset")
        }
 
  return (
    <div className="flip">
        
         <Card
         isPressable onPress={() => flipLogic()}
      isFooterBlurred
      radius="lg"
      className={`border-none front ${front?"front-flip":""}`}
    >
        <CardBody className="overflow-visible p-0">
      <Image 
        alt="card background"
        // className="object-cover"
        // height={270}
        src="/cardbg.jpg"
        width={250}
        className="object-cover h-[280px] overflow-hidden"
      />
      {/* <Button onPress={()=>console.log("lol")}>press</Button> */}
      </CardBody>
      {!props.enable?(

          <CardFooter className="footer justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-large text-white">Click Here</p>
        </CardFooter>
      ):(
        null
      )
    }
    </Card>
    <Card 
    isPressable onPress={() => {flipLogic()}}
    className={`py-4 back ${front?"back-flip":""}`}>
      <CardHeader className="pb-0 pt-0 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Back</p> */}
        <Button color="danger" onClick={()=>reset()}>Reset</Button>
        {/* <small className="text-default-500">12 Tracks</small> */}
        {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
        radius="lg"
        width="100%"
        className="w-full object-cover h-[190px]"
          alt="Card background"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        
        />
        {/* <Button onPress={()=>console.log("lol")}>Press</Button> */}
      </CardBody>
    </Card>
  
    </div>
    
  );
}
