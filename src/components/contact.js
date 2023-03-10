import { useState } from "react"

const Section = ({title,desc,isVisible,setIsVisible,element})=>{
    return (
        <div className="border-2 border-black bg-slate-300 rounded-xl">
            <h1 className="w-96 text-center font-bold text-2xl">{title}</h1>
            {(isVisible )?
               ( <button onClick={()=> setIsVisible('')}>Hide</button>):
                (<button onClick={()=> setIsVisible(element)}>Show</button>)
            }
            {isVisible && <p className="font-semibold">{desc}</p>}


        </div>
    )
}



const Contact = ()=>{
    const [visibleSection , setVisibleSection] = useState(null)



    return (
        <div className=" flex place-items-center flex-col">
            <h1 className="font-bold text-4xl">Contact Us</h1>
            <Section title={"Email"} desc={'@gmail.com'} isVisible = {visibleSection === 'email'} setIsVisible = {(value)=>setVisibleSection(value)} element = {'email'}/>
            <Section title={"Mobile No."} desc={'+9124566484'} isVisible = {visibleSection === 'mobile'} setIsVisible = {(value)=>setVisibleSection(value)} element = {'mobile'}/>
            <Section title={"Location"} desc={'Near Ambani House'} isVisible = {visibleSection === 'location'} setIsVisible = {(value)=>setVisibleSection(value)} element = {'location'}/>
            
        </div>
       
    )
}
export default Contact