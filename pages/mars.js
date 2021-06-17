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
                    <span class="mars_color">مسدس فالكون 
                    </span>
                    &nbsp;للواقع الافتراضي  </h2>
                <img src="/img/mars_Picture2.jpg"/>
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-12">
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>دفع الارتداد - الإحساس الواقعي <br/>
                            بكل طلقة.
</p>
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>هيكل بلاستيكي من مادةABS  عالية المقاومة  —<br/>
                           للصدمات - يتحمل وزن سيارة.</p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>عمر بطارية يزيد عن 14 ساعة - أكثر من يوم <br/>
                            كامل من اللعب بشحنة واحدة.</p>
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>يلين الجزء  المطاطي ممتص الصدمات من <br/>
                           صدمات اللاعبين المهملين.</p>

                    </div>
                    <div class="col-md-4 col-sm-4 col-12">
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>اهتزاز في المقبض - اشعر 
                            <br/>
                           بالجرح الافتراضي.</p>
                        <p style={
                            {
                                color: "black",
                                paddingBottom: "25px"
                            }
                        }>يزن 800 جرام - لعبة مريحة حتى لأصغر <br/>
                          اللاعبين!</p>

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
                        <h2 class="mars_section_title">سوار الصدمات <br/>ســكــوربــيــون</h2>
                  
                        <br/>
                        <p class="mars_p">
                            كل جرح من اللعبة يصاحبه صعقة كهربائية تؤدي إلى تقلص عضلي قصير المدى.
                                </p><br/>
                        <p class="mars_p">5 أوضاع للتشغيل والاهتزاز، و 4 مستويات من قوة الصدمة. </p>
                        <br/>
                        <p class="mars_p">
                           الإحساس الجسدي بالضربات هو المفتاح لتحقيق الواقعية القصوى للعبة.</p>
                        <p class="mars_p">الصعقة غير مؤذية تمامًا - لا تترك أي كدمات أو علامات.

                        </p> 
                        <p class="mars_p">هذا الجهاز معتمد بالكامل لممارسة الألعاب.

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
                            <span class="mars_color">خوذة المريخ 
                            </span>
                            &nbsp;للواقع الافتراضي
                        </h2>
                        <h4 class="mars_h4">كل شيء في جهاز واحد</h4>
                        <br/>
                        <br/>
                        <p class="mars_p">
                            جميع الأجهزة الإلكترونية وأجهزة الاستشعار في خوذة واحدة - لا داعي لحمل جهاز كمبيوتر ومعدات إضافية أخرى معك.
</p>
                        <br/>

                        <p class="mars_p">صور عالية الدقة 1832 × 1920 بكسل - انغمار كامل في الساحة الافتراضية.

                        </p>
                        <br/>
                        <p class="mars_p">
                           وزن الخوذة أقل من 550 جرام - العب أكثر من ساعتين متتاليتين دون تعب.

                        </p>
                        <br/>
                        <p class="mars_p">
                            يتم توصيل المسدس بالخوذة لاسلكيًا - حركة بدون قيود.

                        </p>
                        <br/>
                        <p class="mars_p">
                           تقنية الحماية - تمنع الاصطدامات مع العوائق المادية أثناء اللعبة.

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
                        <h2 class="mars_section_title">اللعبة
                            <br/>
                            <span class="mars_color">مواقع
                            </span>

                        </h2>
                        <h4 class="mars_h4">المستودع</h4>
                        <br/>
                        <p class="mars_p">
                           الخريطة تأخذ اللاعبين إلى منطقة صناعية: مكاتب وعربات شحن ومستودعات أسلحة.  Players
                            <br/>
                            يشارك اللاعبون في عملية خاصة للقضاء على مجموعة إرهابية في مستودع للسكك الحديدية.</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/><br/>
                        <h4 class="mars_h4">المكتب</h4>
                        <br/>
                        <p class="mars_p">
                           تم تصميم الموقع كمبنى مكاتب به غرف وممرات طويلة وجميع السمات الضرورية للحياة المكتبية.  A perfect place to hold
                            <br/>
                            . مكان مثالي لعقد معارك الشركات.
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
                            <h4 class="mars_h4">منشأة التخزين النووية</h4>
                            <br/>
                            <p class="mars_p">
                                المخبأ السري المفصل للغاية سيثير عشاق ألعاب الكمبيوتر وسيسترجع الكثير من الذكريات الحية. سيقاتل اللاعبون من أجل السيطرة على الهدف الاستراتيجي.

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
                                <p class="mars_p">جميع السيناريوهات وأوضاع اللعبة متوفرة في كل من المواقع.</p>
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
                                <p class="mars_p">زيادة منتظمة في تفاصيل عناصر التضاريس ونماذج الألعاب.</p>
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
                            <p class="mars_p">يتم تجديد مجموعة مواقع اللعبة كل شهرين.</p>
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
                            </span>&nbsp;سيناريوهات ألعاب 
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
                                <h4 class="mars_h4">ملك الساحة</h4>
                                <p class="mars_p">كل لاعب يقاتل لنفسه وواحد فقط سيصبح الفائز.</p>
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
                                <h4 class="mars_h4">قتال الفريق</h4>
                                <p class="mars_p">وضع مثير يتقاتل فيه فريقان ضد بعضهما البعض.</p>
                            </div>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </Layout>)
}
