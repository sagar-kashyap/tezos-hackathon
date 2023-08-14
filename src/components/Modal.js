import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function ModalComponent(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    // const [reset,setReset]=useState(false)
    function resetCards(){
        props.resetCards(false)
        props.modalReset("")
    }
    
  return (
    <>
      <Button isDisabled={!(props.modalButton==="reset")} onPress={onOpen} color="danger">Try Again</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}
              classNames={{
                // body: "py-6",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
               <p>Want to try again??</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose} onClick={()=>resetCards()}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
