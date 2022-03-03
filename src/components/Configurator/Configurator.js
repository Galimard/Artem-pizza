import React, {useState} from "react";

const Configurator = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const changeRadioHandler = (e) => {
        const target = e.target;
        const value = Number(target.value);
        
        setTotalPrice(value);
       
    };

    const changeCheckboxHandler = (e) => {
        const target = e.target;
        const value = Number(target.value);
        setTotalPrice(
                totalPrice + value
        );
        console.log(totalPrice)
    }


    return (
        <div className="configurator">
            <div className="container">
                <form action="#" method="post" className="form">

                    <div className="form-item__wrap">
                        <div className="size">
                            <p className="form__subtitle">Размер</p>
                            <div className="form-item">
                                <input id="size1" type="radio" value="200" name="sizePrice" onChange={ changeRadioHandler } defaultChecked />
                                <label htmlFor="size1">30 см</label>
                            </div>
                            <div className="form-item">
                                <input id="size2" type="radio" value="250" name="sizePrice" onChange={ changeRadioHandler } />
                                <label htmlFor="size2">35 см</label>
                            </div>
                        </div>

                        <div className="pastry">
                            <p className="form__subtitle">Тесто</p>
                            <div className="form-item">
                                <input id="pastry1" type="radio" value="0" name="pastry" defaultChecked/>
                                <label htmlFor="pastry1">Тонкое</label>
                            </div>
                            <div className="form-item">
                                <input id="pastry2" type="radio" value="0" name="pastry"/>
                                <label htmlFor="pastry2">Пышное</label>
                            </div>
                        </div>
                    </div>

                    <div className="sauce">
                        <p className="form__subtitle">Выберите соус</p>
                        <div className="form-item">
                            <input id="sauce1" type="radio" value="0" name="sauce" defaultChecked/>
                            <label htmlFor="sauce1">Томатный</label>
                        </div>
                        <div className="form-item">
                            <input id="sauce2" type="radio" value="0" name="sauce"/>
                            <label htmlFor="sauce2">Белый</label>
                        </div>
                        <div className="form-item">
                            <input id="sauce3" type="radio" value="0" name="sauce"/>
                            <label htmlFor="sauce3">Острый</label>
                        </div>
                    </div>

                    <div className="cheese">
                        <p className="form__subtitle">Добавьте сыр</p>
                        <div className="form-item">
                            <input id="cheese1" type="checkbox" value="29" name="cheese" onChange={ changeCheckboxHandler } />
                            <label htmlFor="cheese1">Моцарелла</label>
                        </div>
                        <div className="form-item">
                            <input id="cheese2" type="checkbox" value="29" name="cheese" onChange={ changeCheckboxHandler } />
                            <label htmlFor="cheese2">Чеддер</label>
                        </div>
                        <div className="form-item">
                            <input id="cheese3" type="checkbox" value="29" name="cheese" onChange={ changeCheckboxHandler } />
                            <label htmlFor="cheese3">Дор Блю</label>
                        </div>
                    </div>

                    <div className="vegetables">
                        <p className="form__subtitle">Добавьте овощи</p>
                        <div className="form-item">
                            <input id="vegetables1" type="checkbox" value="29" name="vegetables" onChange={ changeCheckboxHandler } />
                            <label htmlFor="vegetables1">Томаты</label>
                        </div>
                        <div className="form-item">
                            <input id="vegetables" type="checkbox" value="29" name="vegetables" onChange={ changeCheckboxHandler } />
                            <label htmlFor="vegetables2">Грибы</label>
                        </div>
                        <div className="form-item">
                            <input id="vegetables3" type="checkbox" value="29" name="vegetables" onChange={ changeCheckboxHandler } />
                            <label htmlFor="vegetables3">Перец</label>
                        </div>
                    </div>

                    <div className="meat">
                        <p className="form__subtitle">Добавьте мясо</p>
                        <div className="form-item">
                            <input id="meat1" type="checkbox" value="29" name="meat" onChange={ changeCheckboxHandler } />
                            <label htmlFor="meat1">Бекон</label>
                        </div>
                        <div className="form-item">
                            <input id="meat2" type="checkbox" value="29" name="meat" onChange={ changeCheckboxHandler } />
                            <label htmlFor="meat2">Пепперони</label>
                        </div>
                        <div className="form-item">
                            <input id="meat3" type="checkbox" value="29" name="meat" onChange={ changeCheckboxHandler } />
                            <label htmlFor="meat3">Ветчина</label>
                        </div>
                    </div>

                    <button type="submit">
                        Заказать за <span>{ totalPrice }</span> руб.
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Configurator;
