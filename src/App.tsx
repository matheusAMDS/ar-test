import { useRef } from "react"

import WebXRPolyfill from 'webxr-polyfill'

function App() {
  const xrSession = useRef<XRSession>()

  async function createXRSession() {
    let xr: XRSystem | undefined = navigator.xr

    if (!xr) {
      xr = new WebXRPolyfill() as XRSystem
    }

    try {
      const session = await xr.requestSession("immersive-ar")

      xrSession.current = session
    } catch (err) {
      alert("Unable to setup AR environment: " + err.message)

      console.log(err)
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={createXRSession}>Start XR Session</button>
    </>
  )
}

export default App
