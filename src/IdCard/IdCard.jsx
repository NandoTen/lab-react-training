import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {



    return (
        <article className='idCard'>
            <img src={picture} alt={firstName} />
            <div className='texts'>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>


            </div>
        </article>
    )
}

export default IdCard

//<p><strong>Birth:</strong> {birth}</p>