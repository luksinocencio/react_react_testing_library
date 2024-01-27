import { useState } from 'react'

export default function DataForm() {
  const [email, setEmail] = useState('johndoe@mail.com')

  return (
    <form>
      <h3>Enter Data</h3>

      <div data-testid="image wrapper">
        <img src="data.jpg" alt="data" />
      </div>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="color">Color</label>
      <input id="color" placeholder="Red" />

      <button title="Click when ready to submit">Submit</button>
    </form>
  )
}
