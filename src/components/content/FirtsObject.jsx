import React from 'react';
import Chiabatta from './pictures/Chiabatta.png'
import Quasoo from './pictures/Quasoo.png'

const FirstObject = () => {
    return (
        <div className='FirstObject'>

            <div className='leftSide'>
                <h1>Для тех, кто хочет подешевле...</h1>
                <p>Мы знаем, что иногда очень хочется нашей выпечки. Именно для вас мы сделали эту промоакцию!</p>
                <p>Чиабатта всего за полцены.</p>
                <a className='linksInTheDesctription' href='avito.com'>Ну что за вкуснота!</a>
            </div>

            <div className='rightSide'>
                <div className='firstPromoBlock'>
                    <div className='promoImage1'>
                        <img className='promoImage' src={Chiabatta}/>
                    </div>
                    <div className='Description'>
                    <h3>Итальянская чиабатта</h3>
                    <p className='Promo'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  cupidatat non proident”</p>
                    <h3 className='beforeDiscount'>322 руб</h3>
                    <h3 className='afterDiscount'>212 руб</h3>
                    </div>
                </div>

                <div className='secondPromoBlock'>
                    <div className='promoImage2'>
                        <img className='promoImage' src={Quasoo}/>
                    </div>
                    <div className='Description'>
                          <h3>Круассан с шоколадкой</h3>
                          <p className='Promo'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  cupidatat non proident” </p>
                          <h3 className='beforeDiscount'>296 руб</h3>
                          <h3 className='afterDiscount'>196 руб</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstObject;