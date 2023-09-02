import "./mainInformation.css"

const MainInformation = (props) => {
  const {informationM} = props
  return(
    <div className="wrap-mainInformation">
      <article>
        <p>
          {informationM}
        </p>
      </article>
      <img src="../../assets/images/imagenMain1.jpg" alt="image1" />
      <article>
        <p>
          {informationM}
        </p>
      </article>
      <img src="../../assets/images/imagenMain2.jpg" alt="image2" />
      <article>
        <p>
          {informationM}
        </p>
      </article>
      <img src="../../assets/images/imagenMain3.jpg" alt="image3" />
    </div>
  );
};

export default MainInformation