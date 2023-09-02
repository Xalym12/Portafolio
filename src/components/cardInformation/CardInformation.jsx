import "./cardInformation.css"

export const CardInformation = (props) => {
  const {subtitle, description} = props

  return (
    <div class="card">
      <img class="img-card" src="./web-icon.png" alt="imageCard"/>
      <h1>{subtitle}</h1>
      <p>
        {description}
      </p>
    </div>
  )
}

export default CardInformation
