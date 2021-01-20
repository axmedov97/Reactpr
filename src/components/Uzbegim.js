import './ozbegim.css'

function Uzbegim() {
    return(
        <div className="Uzbegim ">
            <div className="container ">
                <div className="card-header my-5 d-flex justify-content-between ">
                    <img src="Group.png"  width="200px" height="60px" alt=""/>
                    <p className="text-white mt-4" >О жилом комплексе</p>
                    <p className="text-white mt-4 ">Что есть рядом</p>
                    <p className="text-white mt-4 ">Транслция видеоъемки 24.7</p>
                    <p className="text-white mt-4 ">О компании</p>
                    <h4 className="text-white mt-3 ">RU</h4>
                    <h4 className="text-white mt-3">O'Z</h4>
                    <h4 className="text-white mt-3">ENG</h4>
                </div>
                <div className="card-body offset-3 mt-3 ">
                    <img src="Group.png" width="600px" height="180px" alt=""/>
                </div>
                <div className="BB offset-5 mb-4">
                    <button className="btn btn-danger align-items-center text-white p-4 px-5">Выберите корпус </button>
                </div>
                <div className="AA offset-6">
                    <button className="btn btn-info text-white mb-4">Оставить заявку </button>
                </div>

            </div>
            <div className="footer">
                <div className="container">
                    <div className="card-footer">
                        <table className="text-white">
                            <tr>
                                <td><span className="text-bold">Адрес</span></td>
                                <td><span className="text-bold">Телефон:</span></td>
                                <td><span className="text-bold">Мы в социальных сетях</span></td>

                            </tr>
                            <tr>
                                <td><span className="text-bold">Головной офис Solidity Group: г. Ташкент.</span></td>
                                <td><span className="text-bold"></span></td>
                                <td><span className="text-bold">Головной офис Solidity Group: г. Ташкент.</span></td>

                            </tr>
                            <tr>
                                <td>Яккасарайский р-н, ул. Ш.Руставели, 25</td>
                            </tr>
                            <tr>
                                <td><span className="text-bold">Адрес ЖК O'zbegim:</span> г. Ташкент, Яккасрайский р-н,</td>
                            </tr>
                            <tr>
                                <td>Пересечение улиц Бабура и Нукусской</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Uzbegim;