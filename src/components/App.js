import './App.scss';

function Supercontainer() {
  return (
    <div className="Supercontainer">
      <Animated_bg />
      <Seccion_A />
      <Seccion_B />
    </div>
  );
}

function Seccion_A() {
  return (
    <div className='Seccion_A'>

      <a href="https://us02web.zoom.us/j/85410931139">
        <button className="ingresar-link">
          🖥️ Ingresar a la clase
        </button>
      </a>

      <div className="idpass-container">
        <div className="id">
          <p>ID:</p>
          <p>83404916691</p>
        </div>
        <div className="pass">
          <p>PASS:</p>
          <p>La1917</p>
        </div>
      </div>

    </div>
  )
}

function Seccion_B() {
  return (
    <div className='Seccion_B'>
      {/* CLASES */}
      {/* MISCELÁNEO */}
    </div>
  )
}

function Animated_bg() {
  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
    </>
  )
}

export default Supercontainer;