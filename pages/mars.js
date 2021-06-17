import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'

export default function contact() {
    return (<Layout>
        <div class="language rtl">
            <Link href="/en/mars">
                <a>
                    <MdChat/>
                    English
                </a>
            </Link>
        </div>
        <section class="heroBanner aboutHeroBanner"
            style={
                {background: "#000"}
        }>
            <div class="background-overlay"></div>

            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-5 col-0"></div>

                    <div class="col-md-4 col-sm-3 col-8">
                        <img src="/img/logo-mars.png" width="300px"/>
                    </div>
                    <div class="col-md-4 col-sm-4 col-0"></div>
                </div>
            </div>

        </section>
        <section style={
                {background: "#000000"}
            }
            class="rtl">
            <div class="container">
                <h2 class="mars_section_title"
                    style={
                        {
                            borderBottom: "1px solid red",
                            marginBottom: "30px"
                        }
                }>مميزات النظام</h2>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-12">
                        <div class="mars_features_item">
                            <img src="/img/mar_icon1.png"/>
                            <p>وضع PVP 
                                <br/>
                                (لاعبين ضد لاعبين).</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <div class="mars_features_item">
                            <img src="/img/mar_icon2.png"/>
                            <p>يمكن أن يكون ممتع لأي عدد من الزوار، 
                                <br/>
                                بدئًا من 1 إلى 30 لاعب.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <div class="mars_features_item">
                            <img src="/img/mar_icon3.png"/>
                            <p>الواقع الافتراضي يمكن أن يحول مساحة <br/>
                                داخلية قدرها 80 متر مربع لتبدو بحجم <br/>
                               ملعب كرة سلة.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <div class="mars_features_item">
                            <img src="/img/mar_icon4.png"/>
                            <p>لا يوجد أي تكاليف مطلوبة للديكور 
                                <br/>
                               أو بناء الملاجئ في منطقة اللعب.

                                <br/>
                                
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <div class="mars_features_item">
                            <img src="/img/mar_icon5.png"/>
                            <p>يستغرق الانتقال إلى مكان جديد وبدء التشغيل 
                                <br/>
                               فيه يوم واحد فقط.
                           
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <div class="mars_features_item">
                            <img src="/img/mar_icon6.png"/>
                            <p>ترفيه ممتع للكبار والأطفال من سن 5 
                                <br/>
                               إلى 99 عامًا. <br/>
                              
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section style={
            {background: "#000000"}
        }>
            <div class="container">
                <img src="/img/mars_on_off.jpg"/>
            </div>
        </section>
        <section class="rtl"
            style={
                {background: "#000000"}
        }>
            <div class="rtl" class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-8 col-12">
                        <img src="/img/mars-eq.jpg"/>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <h2 class="mars_section_title">المعدات</h2>
                        <h4 class="mars_h4">مجموعة ألعاب المريخ للواقع الافتراضي
</h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                            <b>سماعة الواقع الافتراضي 
                            </b>— خفيفة الوزن، لاسلكية، عالية الدقة.</p>
                        <br/>

                        <p class="mars_p">
                            <b>فالكون للواقع الافتراضي 
                            </b>— مسدس مزود بمحاكاة لدفع ارتداد الطلقات ومؤشرات اهتزازية للضربات</p>
                    </div>


                </div>

            </div>
        </section>

        <section class="rtl"
            style={
                {background: "#000000"}
        }>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-8 col-12">
                        <img src="/img/mars_soft.jpg"
                            style={
                                {maxWidth: "80%"}
                            }/>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <h2 class="mars_section_title">برنامج السوفت-وير</h2>
                        <h4 class="mars_h4">جهاز لوحي مزود بتطبيق  &nbsp;
                            <span class="mars_color">تشغيل الواقع الافتراضي</span>
                            <br/> لإعداد مجموعات الألعاب والتحكم فيها
</h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                           يقوم بأتمتة عملية ممارسة الألعاب في ساحة الواقع 
                            <br/>الافتراضي بقدر الإمكان.</p>
                        <p class="mars_p">يسمح لك بتغيير السيناريوهات ومواقع الألعاب 
                            <br/>بسرعة.
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h4 class="mars_h4">
                            <span class="mars_color">شاشة نتائج الواقع الافتراضي 
                            </span>&nbsp; an application
                            <br/>تطبيق لعرض معلومات اللعبة على شاشة كبيرة

                      </h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                            يعرض إحصائيات مفصلة عن الفريق وإحصائيات شخصية للاعبين.
</p>
                        <p class="mars_p">يبث دورة اللعب لكل لاعب مباشرةً.

                        </p>
                    </div>
                </div>

            </div>
        </section>
        <section class="rtl">
            <div class="container">
                <h2>
                    <span class="mars_color">Falcon VR
                    </span>
                    &nbsp;Blaster</h2>
                <img src="/img/mars_Picture2.jpg"/>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-12">
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>Impulse recoil – the realistic<br/>
                            feel of every shot</p>
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>High impact resistant ABS plastic body —<br/>
                            withstands the weight of the vehicle.</p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>14+ hours of battery life — more than<br/>
                            one gaming day on a single charge.</p>
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>The rubber bumper softens<br/>
                            the impact from careless players.</p>

                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>Vibration in the handle —
                            <br/>
                            feel the virtual wound</p>
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>Weighs 800 grams — a comfortable<br/>
                            game even for the youngest players!</p>

                    </div>
                </div>
            </div>
        </section>

        <section class="rtl"
            style={
                {
                    background: "#000000",
                    backgroundImage: "url('../img/mars_picture3_flip.jpg')",
                    backgroundPosition: "left center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"

                }
        }>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-8 col-12"></div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <h2 class="mars_section_title">Software</h2>
                        <h4 class="mars_h4">A tablet with the &nbsp;
                            <span class="mars_color">VR OPERATOR</span>
                            <br/>application for setting up
                            <br/>
                            and controlling game sets</h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                            Automates the process of playing games
                            <br/>in the VR arena as much as possible.</p>
                        <p class="mars_p">Allows you to quickly change scenarios
                            <br/>and game locations.
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h4 class="mars_h4">
                            <span class="mars_color">VR SCOREBOARD
                            </span>&nbsp; an application
                            <br/>for displaying game information
                            <br/>on a big screen
                        </h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                            Displays detailed team statistics
                            <br/>and personal stats of players.</p>
                        <p class="mars_p">Broadcasts the session for the<br/>
                            player in real-time
                        </p>
                    </div>

                </div>

            </div>
        </section>
        <section class="rtl"
            style={
                {background: "#000000"}
        }>
            <div class="container">
                <div class="row">

                    <div class="col-md-8 col-sm-8 col-12">
                        <img src="/img/mars_picture4.jpg"
                            style={
                                {maxWidth: "100%"}
                            }/>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <h2 class="mars_section_title">
                            <span class="mars_color">MARS
                            </span>
                            &nbsp;VR-helmet
                        </h2>
                        <h4 class="mars_h4">All-in-One</h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                            All the electronics and sensors in one<br/>
                            helmet - no need to carry a computer<br/>
                            and other additional equipment with you.</p>
                        <br/>

                        <p class="mars_p">High resolution images 1832 x 1920 px -<br/>
                            full immersion in the virtual arena.
                        </p>
                        <br/>
                        <p class="mars_p">
                            The helmet weight is less than
                            <br/>
                            550 grams - play more than 2 hours<br/>
                            straight without fatigue.
                        </p>
                        <br/>
                        <p class="mars_p">
                            The blaster is connected to the helmet<br/>
                            wirelessly - movement without
                            <br/>
                            restrictions.
                        </p>
                        <br/>
                        <p class="mars_p">
                            Protector technology - prevents collisions
                            <br/>
                            with physical obstacles during the game.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        <section class="rtl"
            style={
                {background: "#000000"}
        }>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-12">
                        <img src="/img/mars_picture5.jpg"/>
                        <br/>
                        <img src="/img/mars_picture6.jpg"/>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <h2 class="mars_section_title">Game
                            <br/>
                            <span class="mars_color">locations
                            </span>

                        </h2>
                        <h4 class="mars_h4">The Depot</h4>
                        <br/>
                        <p class="mars_p">
                            The map takes players to the industrial area:
                            <br/>
                            offices, cargo wagons and the armory. Players
                            <br/>
                            take part in a special operation to eliminate a
                            <br/>
                            terrorist group in a railroad depot.</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/><br/>
                        <h4 class="mars_h4">The Office</h4>
                        <br/>
                        <p class="mars_p">
                            The location is designed as an office building
                            <br/>
                            with rooms, long corridors and all the necessary
                            <br/>
                            attributes of office life. A perfect place to hold
                            <br/>
                            “corporate battles”.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <section class="rtl"
            style={
                {background: "#000000"}
        }>
            <div class="container">
                <div class="row">

                    <div class="col-md-6 col-sm-6 col-12">
                        <img src="/img/mars_picture7.jpg"/>
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                        <div style={
                            {
                                display: "flex",
                                justifyContent: "center",
                                height: "330px",
                                flexDirection: "column"
                            }
                        }>
                            <h4 class="mars_h4">The nuclear storage facility</h4>
                            <br/>
                            <p class="mars_p">
                                A highly detailed secret bunker will excite fans of cult computer
                                <br/>
                                games and evoke a lot of vivid memories. The players will fight
                                <br/>
                                for the control of the strategic object.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-12">
                        <p>
                            <div style={
                                {
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }
                            }>
                                <img src="/img/mars_picture10.png"
                                    style={
                                        {
                                            width: "70px",
                                            margin: "o auto"
                                        }
                                    }/>
                                <p class="mars_p">All scenarios and game modes are available.<br/>
                                    in each of the locations.</p>
                            </div>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <p>
                            <div style={
                                {
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }
                            }>
                                <img src="/img/mars_picture9.png"
                                    style={
                                        {
                                            width: "70px",
                                            margin: "o auto"
                                        }
                                    }/>
                                <p class="mars_p">Regular increase of the detail of terrain
                                    <br/>
                                    elements and game models.</p>
                            </div>
                        </p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <div style={
                            {
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "30px"
                            }
                        }>
                            <img src="/img/mars_picture8.png"
                                style={
                                    {
                                        width: "70px",
                                        margin: "o auto"
                                    }
                                }/>
                            <p class="mars_p">The set of game locations is<br/>
                                replenished every 2 months.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section class="rtl"
            style={
                {background: "#000000"}
        }>
            <div class="container">
                <div class="row">

                    <div class="col-md-8 col-sm-8 col-12">
                        <img src="/img/mars_picture11.jpg"/>
                    </div>

                    <div class="col-md-4 col-sm-4 col-12">
                        <h2 class="mars_section_title"
                            style={
                                {textAlign: 'center'}
                        }>
                            <span class="mars_color">PVP
                            </span>&nbsp;GAME scenarios
                        </h2>
                        <br/>
                        <p>
                            <div style={
                                {
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }
                            }>
                                <img src="/img/mars_picture12.png"
                                    style={
                                        {
                                            width: "70px",
                                            margin: "o auto"
                                        }
                                    }/>
                                <p class="mars_p">All scenarios and game modes are available.<br/>
                                    in each of the locations.</p>
                            </div>
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <div style={
                                {
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }
                            }>
                                <img src="/img/mars_picture13.png"
                                    style={
                                        {
                                            width: "70px",
                                            margin: "o auto"
                                        }
                                    }/>
                                <p class="mars_p">All scenarios and game modes are available.<br/>
                                    in each of the locations.</p>
                            </div>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </Layout>)
}
