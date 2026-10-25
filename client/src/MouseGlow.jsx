import { useEffect, useState } from "react"


const MouseGlow = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[])

    console.log(position)
  return (
    <div 
        className="pointer-events-none fixed z-50 w-10 h-10 rounded-full bg-transparent border border-zinc-100/20 "
        style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
        }}
    >

    </div>
  )
}

export default MouseGlow