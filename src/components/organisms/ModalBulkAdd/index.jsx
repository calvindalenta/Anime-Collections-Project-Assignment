import { useState } from "react"
import { COLLECTION_TYPE } from "components/molecules/SelectCollection"
import BulkAddSteps from "components/molecules/BulkAddSteps"
import BulkAddStepOne from "./BulkAddStepOne"
import BulkAddStepTwo from "./BulkAddStepTwo"
import useCollection from "hooks/useCollection"
import Modal from "components/atoms/Modal"
import Text from "components/atoms/Text"

const ModalBulkAdd = ({ visible, onRequestClose }) => {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ stepOne: [], stepTwo: {} })
  const [info, setInfo, { createCollection, addAnime }] = useCollection()

  const goNext = () => setStep(step+1)
  const goPrev = () => setStep(step-1)
  const closeModal = () => {
    setStep(0)
    setData({ stepOne: [], stepTwo: {} })
    onRequestClose()
  }

  return (
    <Modal
      width={800}
      footer={null}
      destroyOnClose
      visible={visible}
      onCancel={closeModal}
      title={<Text><p style={{ textAlign: "center" }}>Add Anime to Your Collection</p></Text>}
    >
      <BulkAddSteps 
        curStep={step}
        stepOne={
          <BulkAddStepOne
            initValue={data.stepOne}
            goNext={(stepOne) => {
              setData(prev => ({ ...prev, stepOne }))
              goNext()
            }}
          />
        }
        stepTwo={
          <BulkAddStepTwo 
            initValue={data.stepTwo}
            goPrev={goPrev}
            goNext={(collectionInfo) => {
              const { value, type } = collectionInfo
              if (type === COLLECTION_TYPE.NEW){
                createCollection({ name: value })
              }
              addAnime({ anime: data.stepOne, collection: value })
              closeModal()
            }}
          />
        } 
      />
    </Modal>
  )
}

export default ModalBulkAdd