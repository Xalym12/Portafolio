import "./login.css"

const Login = () => {
  return(
    <div className="wrapFather">
      <div className="content-aside">
      <h2>login</h2>
      <form className="login-box" action="">
        <label for="usuario">Usuario: </label>
        <input type="text" placeholder="Coloca un usuario" />
      </form>
      <br />
      <form className="login-box" action="">
        <label for="contraseña">Contraseña: </label>
        <input type="password" placeholder="Coloca una contraseña" />
      </form>
      <br />
      <form className="login-box" action="">
        <label for="contraseña">Confirma tu contraseña: </label>
        <input type="password" placeholder="contraseña" />
      </form>
      <div className="boton-login">
        <input type="button" value="Submit"/>
      </div>
    </div>
    </div>
  )
}

export default Login