import { useState } from "react";
import Serial from './companents/Serial';

export default function App() {

    const [serials, setSerials] = useState([
        {
            'name': 'Одни из нас (Last of us)',
            'poster': 'poster.webp',
            'description': 'В конце сентября 2003 года по всей планете произошло массовое заражение людей кордицепсом. Прежде паразитировавший только на насекомых гриб приспособился выживать в человеческом теле, полностью подчиняя себе волю носителя и меняя его облик. В первый же день оказавшийся в эпицентре пандемии строитель Джоэл понёс невосполнимую утрату.',
        },
        {
            'name': 'Fallout',
            'poster': 'posterFallout.webp',
            'description': 'В будущем, спустя сотни лет с момента ядерной катастрофы, которая уничтожила или изуродовала все живое на планете, мирные жители Лос Анджелеса вынуждены прятаться в подземных бункерах, построенных корпорацией "Волт-Тек". В этих защитных сооружениях они проводят долгие десятилетия, укрываясь от радиации, мутантов и преступных группировок.',
        }
    ])


    return (
        <>
            {serials.map((serial, index) => {
                return (
                    <>
                        <Serial 
                        key={index} 
                        serial={serial}
                        onchange={(e, attrName) =>{
                            let newSerials = [...serials]
                            newSerials[index][attrName] = e.target.value
                            setSerials(newSerials)
                        }} />
                    </>
                )
            })}
        </>
    )
}