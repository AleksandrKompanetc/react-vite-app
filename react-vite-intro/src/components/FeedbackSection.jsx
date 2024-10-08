import { useState, useRef } from 'react';
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef()
  // const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      {/* <h1>{input.current?.value}</h1> */}
      <h3>Input value: {show && input.current.value}</h3>
      <input 
        ref={input}
        type="text" 
        className='control' 
        // value={value} 
        onKeyDown={handleKeyDown}
        // onChange={(e) => setValue(e.target.value)} 
      />
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help'
  })
  // const [name, setName] = useState('');
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState('help');

  function handleNameChange(event) {
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)

    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))

    // setForm({
    //   name: event.target.value,
    //   hasError: event.target.value.trim().length === 0,
    //   reason: form.reason,
    // })
  }

  // function toggleError() {
  //   setHasError((prev) => !prev)
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{marginBottom: '1rem'}}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : null
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          {/* {JSON.stringify(form, null, 2)} */}
          {/* Name: {form.name}
          <br />
          Reason: {form.reason} */}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
      </form>

      <hr />
      <StateVsRef />
    </section>
  )
}