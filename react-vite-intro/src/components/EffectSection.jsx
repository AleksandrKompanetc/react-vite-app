import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState } from 'react';

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  )
}