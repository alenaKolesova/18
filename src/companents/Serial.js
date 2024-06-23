export default function Serial(props) {

    return (
        <>
            <h2 className='text-header' key={props.Serialindex}>{props.serial.name}</h2>
            <input value={props.serial.name} onChange={(e) => {
                console.log(e.target.value)
                props.onchange(e, 'name')
            }}>
            </input>

            <img width='45%' src={props.serial.poster} alt='poster' />

            <div className='description'>
                <h2>Сюжет</h2>
                <p className='storyline'>{props.serial.description}</p>
            </div>

            <input value={props.serial.description} onChange={(e) => {
                console.log(e.target.value)
                props.onchange(e, 'description')
            }}>
            </input>
        </>
    )
}