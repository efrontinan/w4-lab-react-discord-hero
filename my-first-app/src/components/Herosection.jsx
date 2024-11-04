import './Herosection.css'
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"


function Herosection({title, message, primaryButton, secondaryButton}) {

    return (

        <div className="Herosection">
            <h1>{title}</h1>
            <p>{message}</p>

            <div className="buttons">
                <ButtonPrimary text={primaryButton} />
                <ButtonSecondary text={secondaryButton} />
            </div>

            <img src=".\src\assets\discord-background.png" alt="discord background" />

        </div>

    )

}

export default Herosection