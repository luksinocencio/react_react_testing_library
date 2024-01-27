import { useEffect, useState } from 'react'

function fakeFetchColors(): any {
  return Promise.resolve(['red', 'green', 'blue'])
}

export default function LoadableColorList() {
  const [colors, setColors] = useState([])

  useEffect(() => {
    fakeFetchColors().then((c: any) => setColors(c))
  }, [])

  const renderedColors = colors.map((color) => {
    return <li key={color}>{color}</li>
  })

  return <ul>{renderedColors}</ul>
}
