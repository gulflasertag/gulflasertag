import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/ar/layout'


export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="../en/outdoor/taggers">
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <div class="outdoorBannerTop rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <img src="/img/netronicLogo.jpg" width="100px" class="nortlimg"/>
                            <h2 class="sectionHeading">البنادق</h2>

                        </div>
                    </div>
                </div>
            </div>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">
                            تعديلات فالكون</div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>بندقية فالكون ليزر تاغ الأساسية للاستخدام في الظروف القاسية . جسم البندقية المضاد للصدمات يقاوم أي اختبار: مثل الاصطدام والسقوط. الجسم خفيف الوزن يسمح لك باللعب بشكل مريح لفترة طويلة.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>
                                        الإصدار الأساسي
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>54 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>850 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"/>
                                            <p class="taggerGroupNotice opacityLess"></p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>950 غرام</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            66 سم</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* group two */}
            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">تعديلات فالكون</div>
                    </div>
                    <div class="container">
                        <div class="row">

                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>يتميز هذا الإصدار من فالكون إف-1، والمتوافر منه عدد محدود بالمخزون، بشاشة آي بي إس (IPS) متعددة الألوان ومقاومة للصدمات لعرض الإحصائيات الخاصة باللعبة والخدمة، ذلك كما تم دمج أجهزة استشعار الضربات أيضًا في جسم البندقية لتوفير ظروف لعب عادلة ومثيرة، حيث أن دمج 3 أجهزة لاستشعار الضربات يزيد من تفاعلية وإثارة اللعبة، كما أن شاشة آي بي إس ( (IPSمتعددة الألوان المعززة بزجاج واقي تضيف ما يصل إلى 30 قيمة للعبة والخدمة.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>الإصدار القياسي</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>54 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>900 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"/>
                                            <p class="taggerGroupNotice"></p>

                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف -2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>66 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1000 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* premium */}

            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">تعديلات فالكون
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">

                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>الإصدار المناسب لمعارك الليزر المثيرة. تم تزويد البندقية بنظام دفع الارتداد والذي يعد أكثر واقعية من نظم الاهتزاز المعتادة. شاشة آي بي إس (IPS) الملونة لا تجذب انتباه اللاعبين فحسب، بل تعرض أيضًا جميع إحصاءات اللعبة والسيرفر. أجهزة استشعار الضربات المدمجة في جسم البندقية هي المفتاح للاستمتاع بلعبة صادقة وآمنة.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>إصدار بريميام المميز
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem opacityLess">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>54 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1100 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <img src="/img/falcon-f1.jpg"/>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>66 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1200 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* tactical pro */}
            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">تعديلات فالكون</div>
                    </div>
                    <div class="container">
                        <div class="row">

                            <div class="col-md-8">
                                <div class="taggerGroupHeaderDescription">
                                    <p>الإصدار الأكثر تقدمًا من فالكون. الحد الأقصى من الخصائص والمميزات يمنح تأثيرًا رائعًا للاعبين ويملئهم بالرغبة في العودة إلى ناديك مرة أخرى. الطبعة الأصلية تبدو مثيرة للإعجاب والسلاح يبدو مميز، كما أن نطاق النقطة الحمراء يزيد من دقة الطلقة
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="taggerGroupHeaderTitle">
                                    <h3>إصدار برو التكتيكي</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="taggerGroupSidebar">
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>بلاستيك مقاوم للصدمات من مادة ABS</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon1.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طرف مطاطي واقي
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon2.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة استشعار لليدين 45 دولار إضافية
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon3.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>شاشة آي-بي-إس (IPS) متعددة الألوان</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon4.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>أجهزة مدمجة للاستشعار بالإصابة
                                                </p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon5.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>دفع الارتداد</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon6.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>طباعة بكسل</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon7.png"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupSidebarItem">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <p>رؤية النقطة الحمراء</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="icon"><img src="/img/taggersidebar-icon8.png"/></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <img src="/img/tacticalf1.png"
                                                style={
                                                    {
                                                        width: '440px',
                                                        float: 'right'
                                                    }
                                                }/>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-1</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>54 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1300 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <img src="/img/tacticalf2.png"/>
                                            <p class="taggerGroupNotice"></p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="taggerGroupItemName"></div>
                                            <div class="taggerGroupItemPrice">
                                                <h4>فالكون إف-2</h4>
                                            </div>
                                            <div class="taggerGroupItemSpec">
                                                <ul>
                                                    <li>الطول
                                                        <span>66 سم</span>
                                                    </li>
                                                    <li>الوزن
                                                        <span>
                                                            1400 غرام</span>
                                                    </li>
                                                    <li>عمر البطارية
                                                        <span>
                                                            24 ساعة</span>
                                                    </li>
                                                    <li>تحكم من خلال أنظمة<br/>
                                                        ويندوز و أندرويد
                                                        <span>+</span>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* tactical guns */}
            <hr/>
            <div class="taggerGroup rtl">
                <div class="taggerGroupHeader">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle">بنادق تكتيكية</div>
                    </div>
                </div>
                <div class="taggerGroupBody">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="taggerGroupItem">
                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="taggerGroupItemPrice"></div>
                                            <br/>
                                            <br/>
                                                <p></p>
                                                <p></p>
                                                <p>جلوك 19 هو مسدس ليزر تاغ يعمل على منصة نيترونيك. تم صنع المسدس بناءً على ترخيص من شركة يوماريكس الألمانية. جميع العلامات متطابقة مع النموذج القتالي، كما تم الاحتفاظ بمعظم عناصر التصميم الأصلي في هذا المسدس، مثل: الزناد والصمام ومسطرة بكتيني.
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="taggerGroupItemName">
                                                    <h2>جلوك 19</h2>
                                                </div>
                                                <div class="taggerGroupItemSpec">
                                                    <img src="/img/Glock.jpg"
                                                        style={
                                                            {width: '300px'}
                                                        }/>
                                                    <ul class="inlineList">
                                                        <li>الطول
                                                            <span>18.6 سم</span>
                                                        </li>
                                                        <li>الوزن
                                                            <span>
                                                                0.5 كجم</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="taggerGroupItem"
                                        style={
                                            {"marginBottom": "90px"}
                                    }>
                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class="taggerGroupItemName">
                                                    <h2>ايه-كيه-74
                                                        <span style={
                                                            {
                                                                color: '#1a73e8',
                                                                float: 'right'

                                                            }
                                                        }></span>
                                                    </h2>
                                                </div>

                                                <img src="/img/ak.jpg"/>
                                                <div class="taggerGroupItemSpec">
                                                    <ul class="inlineList">
                                                        <li>الطول
                                                            <span>97 سم</span>
                                                        </li>
                                                        <li>الوزن
                                                            <span>
                                                                3.1 كجم</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p>ايه-كيه-74 هو مسدس ليزر يعمل على منصة نيترونيك. يتم استخدام إطار معدني مقاوم للصدمات يمكن الاعتماد عليه كأساس، ومكبر الصوت المدمج في الخزنة يوفر أيضًا مؤشرًا صوتيًا لكل طلقة.
                                                </p>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="taggerGroupItemName">
                                                    <h2>كولت إم-4
                                                        <span style={
                                                            {
                                                                color: '#1a73e8',
                                                                float: 'right'

                                                            }
                                                        }></span>
                                                    </h2>
                                                </div>

                                                <img src="/img/COLT-M4.jpg"/>
                                                <div class="taggerGroupItemSpec">
                                                    <ul class="inlineList">
                                                        <li>الطول
                                                            <span>85 سم</span>
                                                        </li>
                                                        <li>الوزن
                                                            <span>
                                                                2.5 كجم</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p>كولت إم-4 إيه-1 عبارة عن مسدس ليزر تاغ يتيح الدورة الأكثر واقعية لإعادة تعمير الذخيرة. صُنع المسدس على أساس غلاف آير-سوفت عالي الجودة ويتوافق إلى أقصى حد مع المسدس الأصلي. جميع الأجهزة الإلكترونية يتم تثبيتها بشكل آمن في وحدات التركيب.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <section class="multicolouredSection rtl">
                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle topAbsolute">الميزات</div>
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <h2 class="whiteTitle">شاشة آي-بي-إس (IPS) متعددة الألوان</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="whiteTitleText">
                                            <h4>المتانة</h4>
                                            <p>تم دمج الشاشة في رفوف تركيب خاصة ومحمية بزجاج سمكه 6 مم، مما يزيل الضرر الميكانيكي والإزاحة عند السقوط.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="whiteTitleText">
                                            <h4>سهولة الاستخدام</h4>
                                            <p>زاوية الرؤية الواسعة التي لا تسبب وهج تضمن رؤية واضحة لجميع المؤشرات من أي زاوية. تسمح الإضاءة الخلفية الساطعة للزوار برؤية جميع مؤشرات اللعبة بوضوح حتى في ظل الطقس المشمس.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="whiteTitleText">
                                            <h4>التلعيب</h4>
                                            <p>30 مؤشر لوني بديهيون للاعبين من أي عمر مما يسمح لهم لإدراك المعلومات بسهولة حتى في أثناء الأوقات شديدة الديناميكية للعبة.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="whiteTitleText">
                                            <h4>الراحة</h4>
                                            <p>مؤشرات الخدمة الخاصة بالشاشة تسمح بالتخصيص الفوري لمجموعات الألعاب. المعلومات المعروضة في وضع التمهيد تعمل على تحسين عملية تحديث المعدات بما يناسب الإصدار الجديد في دقائق معدودة.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section class="impulseRecoilSec rtl">

                    <div class="container">
                        <div class="taggerGroupHeaderPreTitle topAbsolute">الميزات</div>
                        <div class="row">

                            <div class="col-md-12">
                                <h2 class="whiteTitle">دفع الارتداد</h2>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="whiteTitleText">
                                            <h4>الانغماس في اللعبة</h4>
                                            <p>عند إطلاق النار، النبضات الموجهة إلى الكتف تمر على طول الجسم كله، وذلك لتقليد الارتداد الناتج من إطلاق السلاح الحقيقي. تأثير الارتداد واقعي أكثر  من اهتزاز الجسم المعتاد، مما يعمق من انغماس اللاعبين في المغامرة.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="whiteTitleText">
                                            <h4>لقطة واقعية</h4>
                                            <p>وحدة دفع الارتداد متزامنة تمامًا مع الطلقات وهي قادرة على الوصول إلى تردد 565 نبضة في الدقيقة. إذا أطلق لاعب طلقة واحدة، يتم إطلاق نبضة ارتدادية واحدة، وإذا أطلق مجموعة متتالية من ثلاث طلقات، فسيشعر بثلاث نبضات.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="whiteTitleText">
                                            <h4>أفضل من الاهتزاز</h4>
                                            <p>يشعر اللاعب بوضوح بضربات تجاه كتفه، وليس مجرد ارتعاش مستمر في جميع أنحاء الجسم كالذي يحدث عند استخدام محرك اهتزازي. الإحساس بتأثير اللمس الحقيقي يمنح اللاعبين المزيد من المشاعر.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="whiteTitleText">
                                            <h4>الاستقلالية</h4>
                                            <p>بفضل النظام المستقل للإمداد بالطاقة عن طريق بطارية منفصلة، دفع الارتداد لا يؤثر على وقت تشغيل المسدس نفسه.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Layout>
    )
}
