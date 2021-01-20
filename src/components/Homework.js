import React, {Component} from 'react';
import Mmm from "./Mmm";

class Homework extends Component {
    render() {
        return (
            <div className="Homework">
                <div className="container">
                    <div className="header d-flex justify-content-between">
                        <img src="logocard.jpg" alt=""/>
                        <p>Loyiha haqida</p>
                        <p>Dasturlash tillari</p>
                        <p>Narxlar</p>

                    </div>
                    <div className="row">
                        <div className="col-4">

                                <h3>+ Kurs yaratish</h3>

                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4 btn btn-block">
                            <Mmm sarlavha="JAVA" body="128ta topshiriq | 38 ta bo'lim" matn={{piase:"Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya,\n" +
                                    "                            razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit\n" +
                                    "                            OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye\n" +
                                    "                            kompanii, sochi kak - Oracle, RedHat, IBM, Google "}} />

                        </div>
                        <div className="col-4 btn btn-block">
                            <Mmm sarlavha="PYTHON" body="122ta topshiriq | 13 ta bo'lim" matn={{piase:" Python - vysokourovnevyy yazyk programirova\n" +
                                    "                            niya obshchego naznacheniya, orientirovannyy na povyshenie proizvoditelnosti razrabotchika i\n" +
                                    "                            chitaemosti koda. Syntaxxd Python minimalis tichen. V toni vremya standartnaya biblioteka\n" +
                                    "                            vklyuchaet bolshoy ob'yom poleznyx fonksiyont"}} />

                        </div>
                        <div className="col-4 btn btn-block">
                            <Mmm sarlavha="GO" body="122ta topshiriq | 13 ta bo'lim" matn={{piase:" Go - kompilyumemyy multilogo yazyk program\n" +
                                    "                            movaniya, razrabotannyy vnutri kompanii Google.\n" +
                                    "                            Razrabotka Go nachalas v sentabr 2007 goda, ego neposredstvennym projektirovaniem zanima lis\n" +
                                    "                            Robert Grizmer, Rob Pikk i Ken Thompson, zanimavshiesya do etogo proektom razrabotki"}} />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homework;