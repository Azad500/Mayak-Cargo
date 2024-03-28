// ---------------------------navbar-scroll------------------------------
const blackLogo = document.querySelector(".black-logo");
const blackDownArrow = document.querySelector(".black-down-arrow");
blackLogo.style.display = "none";
blackDownArrow.style.display = "none";
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const whiteLogo = document.querySelector(".white-logo");
  const whiteDownArrow = document.querySelector(".down-arrow");
  const scrollText = document.querySelectorAll(".scroll-text");
  if (window.scrollY > 0) {
    header.style.background = "white";
    blackLogo.style.display = "block";
    blackDownArrow.style.display = "block";
    whiteDownArrow.style.display = "none";
    whiteLogo.style.display = "none";
    for (let i = 0; i < scrollText.length; i++) {
      scrollText[i].style.color = "black";
    }
  } else {
    header.style.background = "transparent";
    blackLogo.style.display = "none";
    blackDownArrow.style.display = "none";
    whiteDownArrow.style.display = "block";
    whiteLogo.style.display = "block";
    for (let i = 0; i < scrollText.length; i++) {
      scrollText[i].style.color = "white";
    }
  }
});
// ---------------------------language------------------------------
const defaultlang = document.querySelector(".default-lang");
const otherLang = document.querySelector(".other-lang");
const downArrow = document.querySelector(".down-arrow");
otherLang.style.display = "none";

defaultlang.addEventListener("click", () => {
  if (otherLang.style.display === "none") {
    otherLang.style.display = "flex";
    downArrow.style.transform = "rotate(180deg)";
    blackDownArrow.style.transform = "rotate(180deg)";
  } else {
    otherLang.style.display = "none";
    downArrow.style.transform = "rotate(0deg)";
    blackDownArrow.style.transform = "rotate(0deg)";
  }
});
const textInOtherLang = document.querySelectorAll(".langs");
const menuText = document.querySelectorAll(".menu-text");
const menuBarText = document.querySelectorAll(".menuBar-text");
const shipText = document.querySelector(".ship-text p");
const shipButton = document.querySelector(".ship-text a");
const defaultText = document.querySelector(".default");
const servicesHeaderText = document.querySelector(".services-text h2");
const servicesText = document.querySelector(".services-text p");
const card1Header = document.querySelector(".card1-header");
// ---------card1----------
const card1Button = document.querySelector(".card1-for-modal");
const multimodalHeader = document.querySelector(".multimodal-header");
const multimodalText1 = document.querySelector(".multimodal-text1");
const multimodalText2 = document.querySelector(".multimodal-text2");
const multimodalText3 = document.querySelector(".multimodal-text3");
const multimodalH4 = document.querySelector(".multimodal-h4");
const multimodalServices = document.querySelector(".multimodal-services");
const multimodalServices1 = document.querySelector(".multimodal-services1");
const multimodalServices2 = document.querySelector(".multimodal-services2");
const multimodalServices3 = document.querySelector(".multimodal-services3");
const multimodalServices4 = document.querySelector(".multimodal-services4");
const multimodalServices5 = document.querySelector(".multimodal-services5");
const multimodalShipContainer = document.querySelector(
  ".multimodal-ship-container"
);
const multimodalShipContainer1 = document.querySelector(
  ".multimodal-ship-container1"
);
const multimodalShipContainer2 = document.querySelector(
  ".multimodal-ship-container2"
);
const multimodalShipElement = document.querySelector(
  ".multimodal-ship-element"
);
const multimodalShipElement1 = document.querySelector(
  ".multimodal-ship-element1"
);
const multimodalShipElement2 = document.querySelector(
  ".multimodal-ship-element2"
);
const multimodalShipElement3 = document.querySelector(
  ".multimodal-ship-element3"
);
// ---------card2----------
const card2Header = document.querySelector(".card2-header");
const card2Button = document.querySelector(".card2-for-modal");
const bulkLoadsHeader = document.querySelector(".bulk-loads-header");
const bulkLoadsText1 = document.querySelector(".bulk-loads-text1");
const bulkLoadsText2 = document.querySelector(".bulk-loads-text2");
const bulkLoadsText3 = document.querySelector(".bulk-loads-text3");
// ---------card3----------
const card3Header = document.querySelector(".card3-header");
const card3Button = document.querySelector(".card3-for-modal");
const airLoadsHeader = document.querySelector(".air-loads-header");
const airLoadsText1 = document.querySelector(".air-loads-text1");
const airLoadsH4 = document.querySelector(".air-loads-h4");
const airAviaLoads = document.querySelector(".air-avia-loads");
const airAviaLoads1 = document.querySelector(".air-avia-loads1");
const airAviaLoads2 = document.querySelector(".air-avia-loads2");
const airAviaLoads3 = document.querySelector(".air-avia-loads3");
const airAviaLoads4 = document.querySelector(".air-avia-loads4");
const airAviaElement = document.querySelector(".air-avia-element");
const airAviaElement1 = document.querySelector(".air-avia-element1");
const airAviaElement2 = document.querySelector(".air-avia-element2");
// ---------card4----------
const card4Header = document.querySelector(".card4-header");
const card4Button = document.querySelector(".card4-for-modal");
const carCarriageHeader = document.querySelector(".car-carriage-header");
const carCarriageText1 = document.querySelector(".car-carriage-text1");
const carCarriageText2 = document.querySelector(".car-carriage-text2");
const carCarriage1H4 = document.querySelector(".car-carriage1-h4");
const carCarriageLoads1 = document.querySelector(".car-carriage-loads1");
const carCarriageLoads2 = document.querySelector(".car-carriage-loads2");
const carCarriageLoads3 = document.querySelector(".car-carriage-loads3");
const carCarriageLoads4 = document.querySelector(".car-carriage-loads4");
const carCarriageText3 = document.querySelector(".car-carriage-text3");
const carCarriage2H4 = document.querySelector(".car-carriage2-h4");
const carCarriage1B = document.querySelector(".car-carriage1-b");
const carCarriage1B1 = document.querySelector(".car-carriage1-b1");
const carCarriage1B2 = document.querySelector(".car-carriage1-b2");
const carCarriage1B3 = document.querySelector(".car-carriage1-b3");
const carCarriage1B4 = document.querySelector(".car-carriage1-b4");
const carCarriage2B = document.querySelector(".car-carriage2-b");
const carCarriage2B1 = document.querySelector(".car-carriage2-b1");
const carCarriage2B2 = document.querySelector(".car-carriage2-b2");
const carCarriage2B3 = document.querySelector(".car-carriage2-b3");
// ---------card5----------
const card5Header = document.querySelector(".card5-header");
const card5Button = document.querySelector(".card5-for-modal");
const railwayHeader = document.querySelector(".railway-header");
const railwayText1 = document.querySelector(".railway-text1");
const railwayText2 = document.querySelector(".railway-text2");
const railwayText3 = document.querySelector(".railway-text3");
const railwayH4 = document.querySelector(".railway-h4");
const railwayB = document.querySelector(".railway-b");
const railwayB1 = document.querySelector(".railway-b1");
const railwayB2 = document.querySelector(".railway-b2");
const railwayB3 = document.querySelector(".railway-b3");
// ---------card6----------
const card6Header = document.querySelector(".card6-header");
const card6Button = document.querySelector(".card6-for-modal");
const dangerousHeader = document.querySelector(".dangerous-header");
const dangerousText1 = document.querySelector(".dangerous-text1");
const dangerousText2 = document.querySelector(".dangerous-text2");
const dangerousText3 = document.querySelector(".dangerous-text3");
const bmtText = document.querySelector(".bmt-text");
const bmtText1 = document.querySelector(".bmt-text1");
const bmtText2 = document.querySelector(".bmt-text2");
const bmtText3 = document.querySelector(".bmt-text3");
const bmtText4 = document.querySelector(".bmt-text4");
const bmtText5 = document.querySelector(".bmt-text5");
const bmtText6 = document.querySelector(".bmt-text6");
const bmtText7 = document.querySelector(".bmt-text7");
const bmtText8 = document.querySelector(".bmt-text8");
const bmtText9 = document.querySelector(".bmt-text9");
const dangerousText4 = document.querySelector(".dangerous-text4");
const lastText = document.querySelector(".last-text");
// ---------------about-us---------
const aboutUsHeader = document.querySelector(".about-us-header h2");
const aboutUsHeaderText = document.querySelector(".about-us-header p");
const aboutUsText = document.querySelector(".about-us-text p");
// ------------traffic------------
const trafficContainer = document.querySelector(".traffic-container h2");
const chinaFlagB = document.querySelectorAll(".china-flag b");
const chinaFlagP = document.querySelectorAll(".china-flag p");
const iranFlagB = document.querySelectorAll(".iran-flag b");
const iranFlagP = document.querySelectorAll(".iran-flag p");
const azerbaijanFlagB = document.querySelectorAll(".azerbaijan-flag b");
const azerbaijanFlagP = document.querySelectorAll(".azerbaijan-flag p");
const kazakhstanFlagB = document.querySelectorAll(".kazakhstan-flag b");
const kazakhstanFlagP = document.querySelectorAll(".kazakhstan-flag p");
const georgiaFlagB = document.querySelector(".georgia-flag b");
const georgiaFlagP = document.querySelector(".georgia-flag p");
const turkeyFlagB = document.querySelector(".turkey-flag b");
const turkeyFlagP = document.querySelector(".turkey-flag p");
const russianFlagB = document.querySelectorAll(".russian-flag b");
const russianFlagP = document.querySelectorAll(".russian-flag p");
const irakFlagB = document.querySelector(".irak-flag b");
const irakFlagP = document.querySelector(".irak-flag p");
const moreButton = document.querySelector(".more-button");
const lessButton = document.querySelector(".less-button");
// -------------contact------------
const contactHeader = document.querySelector(".contact-header h2");
const contactText = document.querySelector(".contact-header p");
const contactButton = document.querySelectorAll(".contact-button");
const azerbaijanText = document.querySelector(".azerbaijan-text");
const azerbaijanOffice = document.querySelector(".azerbaijan-office");
const azerbaijanAddress = document.querySelector(".azerbaijan-address");
const russianText = document.querySelector(".russian-text");
const russianOffice = document.querySelector(".russian-office");
const russianAddress = document.querySelector(".russian-address");
const iranText = document.querySelector(".iran-text");
const iranOffice1 = document.querySelector(".iran-office1");
const iranAddress1 = document.querySelector(".iran-address1");
const iranOffice2 = document.querySelector(".iran-office2");
const iranAddress2 = document.querySelector(".iran-address2");
const georgiaText = document.querySelector(".georgia-text");
const georgiaOffice = document.querySelector(".georgia-office");
const georgiaAddress = document.querySelector(".georgia-address");
const chinaText = document.querySelector(".china-text");
const chinaOffice = document.querySelector(".china-office");
const chinaAddress = document.querySelector(".china-address");
const turkeyText = document.querySelector(".turkey-text");
const turkeyOffice = document.querySelector(".turkey-office");
const turkeyAddress = document.querySelector(".turkey-address");
const iraqText = document.querySelector(".iraq-text");
const iraqOffice = document.querySelector(".iraq-office");
const iraqAddress = document.querySelector(".iraq-address");
// ------------------------

const storedLang = localStorage.getItem("lang");
if (storedLang) {
  defaultText.textContent = storedLang;
  updateMenuText(storedLang);
}

textInOtherLang.forEach((lang) => {
  lang.addEventListener("click", () => {
    if (lang.textContent === "AZ") {
      downArrow.style.transform = "rotate(0deg)";
      blackDownArrow.style.transform = "rotate(0deg)";
      defaultText.textContent = "AZ";
      otherLang.style.display = "none";
      localStorage.setItem("lang", "AZ");
      updateMenuText("AZ");
    } else if (lang.textContent === "EN") {
      downArrow.style.transform = "rotate(0deg)";
      blackDownArrow.style.transform = "rotate(0deg)";
      defaultText.textContent = "EN";
      otherLang.style.display = "none";
      localStorage.setItem("lang", "EN");
      updateMenuText("EN");
    } else if (lang.textContent === "RU") {
      downArrow.style.transform = "rotate(0deg)";
      blackDownArrow.style.transform = "rotate(0deg)";
      defaultText.textContent = "RU";
      otherLang.style.display = "none";
      localStorage.setItem("lang", "RU");
      updateMenuText("RU");
    }
  });
});
function updateMenuText(lang) {
  if (lang === "AZ") {
    menuText[0].textContent = "Ana Səhifə";
    menuText[1].textContent = "Xidmətlər";
    menuText[2].textContent = "Haqqımızda";
    menuText[3].textContent = "Əlaqə";
    menuBarText[0].textContent = "Ana Səhifə";
    menuBarText[1].textContent = "Xidmətlər";
    menuBarText[2].textContent = "Haqqımızda";
    menuBarText[3].textContent = "Əlaqə";
    shipText.textContent = "20 il etibarlı və təhlükəsiz yükdaşıma xidməti.";
    shipButton.textContent = "Ətraflı";
    servicesHeaderText.textContent = "Xidmətlər";
    servicesText.textContent =
      "Müştərilərimizin xüsusi logistika və ekspedisiya ehtiyaclarının hər son detalı idarə etmək qabiliyyəti ilə dünyada tanınan, Mayak Cargo bütün logistikalarınıza qayğı göstərir.";
    // -----------------card1------------
    card1Header.textContent = "Multimodal Daşımalar";
    card1Button.textContent = "Ətraflı";
    multimodalHeader.textContent = "Multimodal Daşımalar";
    multimodalText1.textContent =
      "Konteyner daşımaları transkontinental əlaqələrdə istifadə olunan yük daşınmalarının ən əlverişli növlərindən biridir. Qarışıq və yaxud, belə demək olarsa, multimodal daşımaların konteynerlər vasitəsilə həyata keçirilməsi yüklərin daşınması, saxlanılması və boşaldılıb yüklənməsi ilə əlaqədar olan xərcləri azaltmağa imkan yaratdığı üçün daha effektli hesab olunur. İdxal və ixracla məşğul olan ölkələrin yük daşımalarının əhəmiyyətli hissəsini dəniz nəqliyyatı ilə konteyner daşımaları təşkil edir və bu nəqliyyat növü Cənub-Şərqi Asiya və Amerika ölkələrinə və bu ölkələrindən digər kontinentlərə yüklərin çatdırılması zamanı əvəzedilməzdir.";
    multimodalText2.textContent =
      "Mayak Cargo şirkəti yüklərin çatdırılması məsələsi ilə əlaqədar dünyanın istənilən limanlarını keçərək, dəniz və yerüstü nəqliyyat növlərini birləşdirərək, konteynerlərdə yüklərin multimodal daşımalarını həyata keçirir. Daşınma prosesi zamanı istənilən ölkədən 20 və 40 fut konteynerlərdə yüklərin daşınması üçün rəqabətə davamlı tariflər təklif edirik. Baltik dənizi, Aralıq dənizi, Qara dəniz, Xəzər dənizi və Fars körfəzi akvatoriyalarının dəniz limanlarında qarşılıqlı əlaqələr mexanizmi yaradılmışdır. Şirkətimizin daimi partnyorları arasında dəniz yolu vasitəsilə konteyner daşıyıcıları kimi tanınan Hanijin Shipping Co LTD, China Shipping Container Lines Co LTD, Hyundai Shipping LTD, U.F.E Shiping LTD, Maersk LineLTD, MSC, EvergreenLTD kimi aparıcı şirkətlər də mövcuddur.";
    multimodalText3.textContent =
      "Mayak Cargo 'Qapıdan qapıya qədər' prinsipi ilə konteynerlərdə yüklərin çatdırılmasını həyata keçirir. Belə sxem üzrə beynəlxalq daşımanın yerinə yetirilməsi sizi daşımanın təşkili, daşıma prosesi iştirakçılarının koordinasiyası, gömrük və liman prosedurlarının təşkili ilə əlaqədar olan bütün problemlərdən azad edir.";
    multimodalH4.textContent =
      "Biz beynəlxalq daşımaların həyata keçirilməsi üçün bütün öhdəlikləri öz üzərimizə götürürük";
    multimodalServices.textContent = "Xidmətlər :";
    multimodalServices1.textContent = "Yükləmə üçün konteynerin verilməsi";
    multimodalServices2.textContent =
      "Limanlarda bütün liman və gömrük prosedurlarının təşkili, gömrük sənədləri və yükü müşaiyyət edən sənədlərin rəsmiləşdirilməsi";
    multimodalServices3.textContent = "Dəniz daşımasının təşkili";
    multimodalServices4.textContent =
      "Yüklərin boşaldılması üçün konteynerin verilməsi və daşınması";
    multimodalServices5.textContent = "Boş konteynerin limana qaytarılması";
    multimodalShipContainer.textContent =
      "Dəniz konteyner daşımalarının üstünlükləri :";
    multimodalShipContainer1.textContent = "Daşınma qiymətinin aşağı olması";
    multimodalShipContainer2.textContent =
      "Daha çox yük partiyalarının daşınması";
    multimodalShipElement.textContent =
      "Dəniz konteyner daşımalarının çatışmamazlıqları :";
    multimodalShipElement1.textContent =
      "Daşınma sürətinin məhdud olduğu üçün limandan gəmilərin çıxış qrafikinə riayət etmə zərurəti";
    multimodalShipElement2.textContent =
      "Yüklərin daşınması üçün konteyner növlərinın məhdudiyyəti";
    multimodalShipElement3.textContent =
      "Limandan buraxılmanın hava şəraitindən asılılığı";
    // -----------------card2------------
    card2Button.textContent = "Ətraflı";
    card2Header.textContent = "Yığma Yüklərin Daşınması";
    bulkLoadsHeader.textContent = "YIĞMA YÜKLƏRİN DAŞINMASI";
    bulkLoadsText1.textContent =
      "Çox zaman kiçik həcmli yüklərin mütəmadi olaraq daşınmasının ən optimal variantı onların yığma yük şəklində daşınmasıdır. Bu məsələ həmçinin yükün kiçik partiyasının birdəfəlik göndərilməsində də optimaldır. Bu tip yüklərin daşınması, bir qayda olaraq, xaricdə kiçik partiyalarla mal alan kiçik və orta biznes sahiblərinə lazımdır. Belə yüklərin daşınması üçün ayrıca nəqliyyat vasitəsinin istifadəsi məqsədəuyğun deyil. Belə hallarda bir nəqliyyat vasitəsinə və yaxud konteynerə iki və daha çox yük yüklənir. Bu cür daşınma yığma, daşınan yüklər isə yığma yüklər və yaxud qruppaj yüklər adlanır. Yığma yüklərin daşınması zamanı, əsasən, avtomobil nəqliyyatı və həmçinin, konteynerlərlə daşınmadan istifadə olunur.";
    bulkLoadsText2.textContent =
      "Mayak Cargo yığma yüklərin tranzit anbarlara konsolidasiyanı və sonra bu yüklərin təyinat nöqtəsinə qədər çatdırılmasını təşkil edir. Biz Avropanın Almaniya, Polşa, Çexiya, Türkiyə kimi ölkələrındə yığma yüklərin toplanması və göndərilməsi üçün ən müasir avadanlıqla təchiz olunmuş tranzit anbarlara malikik. Avropadan yığma yüklərin daşınması məsələsi lazımi səviyyədə yoluna qoyulmuşdur. Çünki orada anbar infrastrukturu çox güclü inkişaf etmişdir və yükün tez bir zamanda gömrük rəsmiləşdirilməsi üçün heç bir maneə mövcud deyil. Anbar infrastrukturu və yüklərin tez bir zamanda gömrük rəsmiləşdirmə strukturu güclü inkişaf etməmiş keçmiş Sovet məkanı ölkələrinə gəlincə isə biz, yük nəqliyyat vasitəsini bir göndəricidən digərinə göndərmək prinsipindən istifadə edərək, mütəmadi olaraq yığma yüklər yığırıq. Yığma yüklərin daşınması zamanı müxtəlif növ yüklərin maşına necə yığılması (yığılarkən bir-birinə qarışmaması və əzilməməsi) və hər bir yükün maşında tutacağı yer haqqında xüsusi təlimat keçmiş təcrübəli sürücülərdən istifadə olunur. Belə yükləri biz Moskva və Moskva vilayəti üzrə və ümumiyyətlə, bütün Rusiya üzrə yığırıq.";
    bulkLoadsText3.textContent =
      "Yükünüzü Mayak Cargo-ya etibar edin və biz sizin etimadınızı doğruldacağıq!";
    // -----------------card3------------
    card3Header.textContent = "Hava Yolu Daşımaları";
    card3Button.textContent = "Ətraflı";
    airLoadsHeader.textContent = "HAVA YOLU DAŞIMALARI";
    airLoadsText1.textContent =
      "Bizim şirkətin mütəxəssisləri sizin eksport və yaxud import yükünüzün ölkədən və əksinə - təyinat ölkəsinə vaxtında nəqlini keyfiyyətli və minimal xərclə həyata keçirir. Bizim nümayəndələrimiz yükünüzü bilavasitə sizin anbarınızda, həmçinin müxtəlif ölkələrin beynəlxalq aeroportlarında qəbul edə bilərlər. Zəruri olarsa, biz bütün gömrük və daşınma sənədlərini də tərtib edə bilərik.";
    airLoadsH4.textContent =
      "Avia daşımaların üstünlükləri və çatışmamazlıqları";
    airAviaLoads.textContent = "Avia daşımaların üstünlükləri :";
    airAviaLoads1.textContent = "Çatdırılmanın yüksək sürəti";
    airAviaLoads2.textContent = "Etibarlılıq və təhlükəsizlik yüksək sürəti";
    airAviaLoads3.textContent = "Kiçik yüklərin aşağı qiymətlə daşınması";
    airAviaLoads4.textContent =
      "Yükü digər nəqliyyat növü ilə çatdırıla bilməyən bir nöqtəyə çatdırmaq imkanı";
    airAviaElement.textContent = "Avia daşımaların çatışmamazlıqları :";
    airAviaElement1.textContent = "Təhlükəli yüklərin daşınmasına qadağalar";
    airAviaElement2.textContent = "Yüklərin qabaritinə görə məhdudiyyətlər";
    // -----------------card4------------
    card4Header.textContent = "Avtomobil Daşımaları";
    card4Button.textContent = "Ətraflı";
    carCarriageHeader.textContent = "AVTOMOBİL DAŞIMALARI";
    carCarriageText1.textContent =
      "Avtomobil daşımaları beynəlxalq nəqliyyatda yüklərin çatdırılmasının ən çox tələb olunan və rahat vasitələrindən biridir. Avtomobil daşımaları daha çox Avropa, MDB və yaxın Şərq ölkələri ilə işləmək üçün əlverişlidir.";
    carCarriageText2.textContent =
      "Avtomobil daşımaları daha yaxşı nəzarət olunan və universal yük daşıma vasitəsitəsidir ki, onun vasitəsilə təhlükəli yükləri, qeyri-qabarit yükləri və temperatur rejiminə riayət etməyi tələb edən yükləri daşımaq olur.";
    carCarriage1H4.textContent =
      "Mayak Cargo avtomobil nəqliyyatında bütün növ yüklərin daşınmasını təşkil edir";
    carCarriageLoads1.textContent = "Yığma yüklərin daşınması";
    carCarriageLoads2.textContent = "Təhlükəli yüklərin daşınması";
    carCarriageLoads3.textContent = "Qeyri-qabarit yüklərin daşınması";
    carCarriageLoads4.textContent = "Konteynerlərin daşınması";
    carCarriageText3.textContent =
      "Avtomobil daşınmasının bütün prosesi ərzində Mayak Cargo-un əməkdaşları yükün hərəkətini izləyir və bununla da, daşınmaların təhlükəsizliyini, vaxtında çatdırılmasını və operativliyi təmin edir. Bizim sifarişçilər daim yükün yerləşdiyi yer və planlaşdırılan yükləmə tarixi, yükün təyinat nöqtəsinə göndərilməsi və çatması haqqında tam məlumat ala bilərlər. Şirkətin mütəxəssisləri müstəqil olaraq daşımaların optimal marşrutlarını tərtib edir, qeyri-qabarit və ağır çəkili yüklərin daşınması zamanı zəruri icazələrin alınmasında kömək edir, tələb olunan sənədlərə, gömrük fakturalarının doldurulması və sığortalara dair məsləhətlər verirlər. Biz avtomobil daşımaları ilə əlaqədar olan xidmətlərin tam spektrini təqdim edir və müştərilərimizə göndərilən yüklər barəsində narahat olmamaq və öz işlərini rahat davam etdirmək imkanı yaradırıq.";
    carCarriage2H4.textContent =
      "Avtomobil daşımalarının üstünlükləri və çatışmamazlıqları";
    carCarriage1B.textContent = "Avtomobil daşımaların üstünlükləri :";
    carCarriage1B1.textContent =
      "Yüklərin yükü göndərəndən alıcıya qədər təkrar yükləməsiz çatdırılma imkanı";
    carCarriage1B2.textContent = "Yükün yüksək səviyyədə qorunmasının təminatı";
    carCarriage1B3.textContent =
      "Yüklərin konsolidasiya olunması və kiçik partiyaların daşınması";
    carCarriage1B4.textContent =
      "Dəmir yolu, dəniz və çay limanlarından asılılığın olmaması";
    carCarriage2B.textContent = "Avtomobil daşımaların çatışmamazlıqları :";
    carCarriage2B1.textContent =
      "İri partiyalı yüklərin uzaq məsafələrə daşınması zamanı məhdudiyyətlər";
    carCarriage2B2.textContent =
      "Yol şəbəkəsindən asılılıq (transkontinental yüklər üçün)";
    carCarriage2B3.textContent =
      "Uzun məsafələrə daşıma zamanı bahalı nəqliyyat növü";
    // -----------------card5------------
    card5Header.textContent = "Dəmir Yolu Daşımaları";
    card5Button.textContent = "Ətraflı";
    railwayHeader.textContent = "DƏMİR YOLU DAŞIMALARI";
    railwayText1.textContent =
      "Dəmir yolu daşımaları yükün istənilən məsafələrə optimal rahat çardırılma üsuludur. Bu daşıma növünün üstünlükləri ilk növbədə böyük yükgötürmə qabiliyyəti, müxtəlif parametrlərə malik olan və yükləmənin müxtəlif texnologiyalarını tələb edən yüklərin çatdırılma imkanının olmasıdır. Avtomobil daşımalarında qeyri-qabarit sayılan yüklərin daşınması uzun müddətli danışıqlar və xüsusi avtomobillərin cəlb olunmasını tələb edirsə, belə yüklərin dəmir yolu ilə daşınması kifayət qədər tez və sadə yolla rəsmiləşdirilir və bu yüklər asanlıqla vaqon və ya platformalara yerləşdirilir. Nəqliyyat növləri arasında dəmir yolu ilə yük daşımalarının populyarlığına təkan verən vacib faktorlardan biri də onun əlverişliliyi və artıq xərclərin olmamasıdır.";
    railwayText2.textContent =
      "Mayak Cargo digər çatdırılma növləri ilə yanaşı, dəmir yolu ilə daşımalara da müraciət etməyi təklif edir. Şirkətin bu daşımalar sektoru ilə məşğul olan mütəxəssisləri sizə daşımanın necə keçməsi, tələb olunan sənədlərin siyahısı, gömrük rəsmiləşdirilməsi haqqında ətraflı məlumat verməklə yanaşı, düzgün sığortanı seçməkdə də kömək edəcək və gələcək işlərdə sizin arzu və təkliflərinizi nəzərə alacaqlar.";
    railwayText3.textContent =
      "Mayak Cargo şirkəti, Azərbaycan, MDB, Şərqi Avropa və Çin arasında dəmir yolu ilə yüklərin import, eksport və tranzit daşınmaları üçün nəqliyyat-ekspedisiya xidmətlərini təklif edir. Bizim şirkət geniş partnyorlar şəbəkəsinə malik olduğu üçün dəmir yolu ilə daşımaların keyfiyyəti daim yüksək səviyyədədir.";
    railwayH4.textContent =
      "Yüklərin dəmir yolu ilə ekspedisiya sferasında bizim üstünlüklər";
    railwayB.textContent = "Dəmir yolu daşımaların üstünlükləri :";
    railwayB1.textContent = "Rəqabətə davamlı qiymətlər";
    railwayB2.textContent = "Yükləmə üçün vaqonların vaxtında təqdim olunması";
    railwayB3.textContent =
      "Bütün marşrut üzrə daşınma kodlarının alınması, təyinat stansiyasına və dəmir yolu idarəsinə teleqramların göndərilməsi";
    // -----------------card6------------
    card6Header.textContent = "Təhlükəli Yüklərin Daşınması";
    card6Button.textContent = "Ətraflı";
    dangerousHeader.textContent =
      "QEYRİ-QABARİT VƏ TƏHLÜKƏLİ YÜKLƏRİN DAŞINMASI";
    dangerousText1.textContent =
      "Yükdaşıma texnikasının standart ölçülərini aşan yüklər (2,45 – eni, 13,6 – uzunluğu, 3,1 m – hündürlüyü) və çəkisi 24 tondan artıq olan yüklər qeyri-qabarit yüklər sayılır. Qeyri-qabarit yüklərin daşınması xüsusi texnika və bütün marşrut üzrə bu tip yükün daşınması üçün razılıq alınmasını tələb edir. Belə daşımalar zamanı marşrut, bir qayda olaraq, körpü və keçidlərin ölçüləri (hündürlük və eni), tranzit ölkələrin qanunları nəzərə alınaraq seçilir.";
    dangerousText2.textContent =
      "Bəzi ölkələrdə daşınan yükün qabaritindən asılı olaraq təkcə yol mühafizə xidmətləri ilə razılıq yox, həmçinin yükü daşıyan nəqliyyat vasitəsinin müxtəlif dövlət orqanları tərəfindən müşaiyəti tələb olunur (polis, yol xidmətləri və s.). Qeyri-qabarit yüklərin avtomobil nəqliyyatı ilə daşınması üçün xüsusi alçaq ramalı qoşqular – platformalardan istifadə olunur. Həmçinin qeyri-qabarit yüklərın daşınması bir və ya bir neçə nəqliyyat növünün (məsələn, avtomobil və dəniz nəqliyyatı, avtomobil və dəmir yolu) vasitəsilə daşınan və multmodal daşımalar adlanan dəmir yolu və dəniz daşımaları ilə həyata keçirilir.";
    dangerousText3.textContent =
      "Standart təsnifata müvafiq olaraq təhlükəli yüklər qrupuna müəyyən şəraitdə ətraf mühitə, insanlara və maddi əmlaka zərər gətirə bilən xüsusiyyətlərə malik olan yüklər aid edilir. Standart təsnifatda 'Təhlükəli yük' dərəcəsi bir neçə sinfə bölünür. 'Təhlükəli yüklərin' daşınması beynəlxalq razılaşmalara uyğun olaraq həyata keçirilir və bu növ yüklərin daşınmasında xüsusi hazırlıq keçmiş və müvafiq vəsiqəyə malik sürücülərdən və müvafiq icazəsi olan xüsusi təchiz olunmuş nəqliyyat vasitələrindən istifadə olunur. Bundan başqa, 'Təhlükəli yüklərin' qablaşdırma və markalşdırılmasında da xüsusi tələblər mövcuddur.";
    bmtText.textContent =
      "BMT daşınan təhlükəli yükün aşağıda göstərilən 9 növünü qeyd edir :";
    bmtText1.textContent = "1 sinif – partlayıcı maddələr və əşyalar";
    bmtText2.textContent =
      "2 sinif – sıxılmış, mayeləşdirilmiş və təzyiq altında həll olunmuş qazlar";
    bmtText3.textContent = "3 sinif – tez alışan mayelər";
    bmtText4.textContent = "4 sinif – tez alışan maddə və materiallar";
    bmtText5.textContent = "5 sinif – oksidləşən maddələr və üzvi peroksidlər";
    bmtText6.textContent = "6 sinif – zəhərli maddələr və infeksiya maddələri";
    bmtText7.textContent = "7 sinif – radioaktiv materiallar";
    bmtText8.textContent = "8 sinif – korroziya maddələri";
    bmtText9.textContent = "9 sinif – digər təhlükəli maddələr";
    dangerousText4.textContent =
      "Mayak Cargo şirkəti istənilən ölçülü, həmçinin iri qabaritli və istənilən təsnifatlı təhlükəli yükləri tələb olunan yerə müvəffəqiyyətlə çatdırır. Biz partlayıcı və radioaktiv maddələr istisna olmaqla, praktiki olaraq bütün dərəcəli təhlükəli yükləri daşıyırıq. Şirkətimiz yük daşıma üzrə bütün əməliyyatları beynəlxalq standartların tələblərinə uyğun olaraq müvafiq qablaşdırma və tara ilə həyata keçirir. Bizim mütəxəssislər bütün formal maneələri dəf etməkdə sizə kömək edəcəklər.";
    lastText.textContent =
      "Mayak Cargo şirkəti yükü müşaiyət edən sənədlərə, müqavilələrin düzgün rəsmiləşdirilməsinə və daşımanın bütün qaydalarına nəzarət edəcək.";
    // -----------------about-us-----------------
    aboutUsHeader.textContent = "HAQQIMIZDA";
    aboutUsHeaderText.textContent = "Etibarlı və təhlükəsiz yükdaşıma xidməti.";
    aboutUsText.textContent =
      "Mayak Cargo Beynəlxalq Yük Daşımaları Şirkəti sizə yük daşımalarında tam xidməti təklif edir. Şirkətimiz Çin XR-dan Azərbaycana, Rusiya Federasiyasına, İran İR-na, İraqa malların daşınması ilə məşğuldur. Mayak Cargo tekstildən plastikə, dəzgahlardan təyyarə hissələrinə, elektron mallara qədər çox geniş mal qruplarını ən sürətli şəkildə göndəricisindən alıcısına çatdırır. 20 illik təcrübəmiz standart, çox qiymətli, qabaritli, ağır çəkili, təhlükəli və ən həssas yüklərin belə yüksək səviyyədə daşınmasına imkan yaradır. Yüklər ən qısa vaxt ərzində güvənli şərtlər əsasında, yüksək keyfiyyət və sərfəli qiymətlərlə daşınır. Beynəlxalq fraxt, dəmiryolu və trans şirkətlərlə olan möhkəm əlaqələrimiz optimal daşınma marşrutlarını seçməyə imkan yaradır. Hal-hazırda Mayak Cargo şirkətinin əməkdaşlıq etdiyi şirkətlərə JAVANEH CARGO bar, Hanijin Shipping Co LTD, China Shipping Container Lines Co LTD, Hyundai Shipping LTD, U.F.E Shiping LTD, Maersk Line LTD, MSC, Evergreen LTD, Mediterranean Shipping Company S.A., Hapag-Lloyd,Maersk Shipping Line və s. kimi şirkətlər daxildir. Müştərinin istəyi ilə şirkətimizin işçiləri bütün gömrüklənmə və sənədləşdirmə işlərini həyata keçirir. Həmçinin şirkət ölkə daxilində yüklərin daşımaçılığını həyata keçirir.";
    // ----------------------------------
    trafficContainer.textContent =
      "Aşağıdakı istiqamətlər üzrə yükdaşıma xidməti.";
    for (let i = 0; i < chinaFlagB.length; i++) {
      chinaFlagB[i].textContent = "Çin";
    }
    for (let i = 0; i < chinaFlagP.length; i++) {
      chinaFlagP[i].textContent = "Ningbo";
    }
    for (let i = 0; i < iranFlagB.length; i++) {
      iranFlagB[i].textContent = "İran";
    }
    for (let i = 0; i < iranFlagP.length; i++) {
      iranFlagP[i].textContent = "Bəndərabbas";
    }
    for (let i = 0; i < azerbaijanFlagB.length; i++) {
      azerbaijanFlagB[i].textContent = "Azərbaycan";
    }
    for (let i = 0; i < azerbaijanFlagP.length; i++) {
      azerbaijanFlagP[i].textContent = "Bakı İpək Yolu terminalı";
    }
    for (let i = 0; i < kazakhstanFlagB.length; i++) {
      kazakhstanFlagB[i].textContent = "Qazaxıstan";
    }
    for (let i = 0; i < kazakhstanFlagP.length; i++) {
      kazakhstanFlagP[i].textContent = "Almatı";
    }
    for (let i = 0; i < russianFlagB.length; i++) {
      russianFlagB[i].textContent = "Rusiya";
    }
    for (let i = 0; i < russianFlagP.length; i++) {
      russianFlagP[i].textContent = "Moskva";
    }
    georgiaFlagB.textContent = "Gürcüstan";
    georgiaFlagP.textContent = "Poti";
    turkeyFlagB.textContent = "Türkiyə";
    turkeyFlagP.textContent = "İstanbul";
    irakFlagB.textContent = "İraq";
    irakFlagP.textContent = "Ərbil";
    moreButton.textContent = "Daha çox";
    lessButton.textContent = "Daha az";
    // ------------contact-------------
    for (let i = 0; i < contactButton.length; i++) {
      contactButton[i].textContent = "ƏLAQƏ";
    }
    contactHeader.textContent = "ƏLAQƏ";
    contactText.textContent = "Bizimlə çox asanlıqla əlaqə saxlaya bilərsiniz.";
    azerbaijanText.textContent = "Azərbaycan";
    azerbaijanOffice.textContent = "Azərbaycan, Bakı ofisi";
    azerbaijanAddress.textContent = "Ünvan: Bakı-Lökbatan yolu, Sədərək TM";
    russianText.textContent = "RUSİYA";
    russianOffice.textContent = "Rusiya, Moskva ofisi";
    russianAddress.textContent =
      "Ünvan: Rostov-on-Don, Aksai rayonu, st. Industrialnaya 11, Atlant ticarət mərkəzi";
    iranText.textContent = "İran";
    iranOffice1.textContent = "İran, Tehran ofisi";
    iranAddress1.textContent =
      "Ünvan: Şimali Əmir Abad, Əmir binası, 6-cı mərtəbə, 603";
    iranOffice2.textContent = "İran, Bandar Abbas ofisi";
    iranAddress2.textContent =
      "o. 104, Birinci mərtəbə, Parto binası, Zeiton keçidi";
    georgiaText.textContent = "Gürcüstan";
    georgiaOffice.textContent = "Gürcüstan, Poti ofisi";
    georgiaAddress.textContent = "Ünvan: Erekle meore küçəsi. 30/28, Poti 4400";
    chinaText.textContent = "ÇİN";
    chinaOffice.textContent = "Çin, Yivu ofisi";
    chinaAddress.textContent =
      "Ünvan: Anbar 376, Mərtəbə 3, Rayon A, Yiwu limanı";
    turkeyText.textContent = "TÜRKİYƏ";
    turkeyOffice.textContent = "İstanbul ofisi";
    turkeyAddress.textContent =
      "Ünvan: Aksaray Mah. Küçük Langa Cad. Avrupa Pazarı No:79 - Depo: 30/A Aksaray - İST";
    iraqText.textContent = "İraq";
    iraqOffice.textContent = "İraq, Erbil ofisi";
    iraqAddress.textContent = "Ünvan: Nishtiman Market No:762";
    // ----------------------------------
  } else if (lang === "EN") {
    menuText[0].textContent = "Home";
    menuText[1].textContent = "Services";
    menuText[2].textContent = "About Us";
    menuText[3].textContent = "Contact Us";
    menuBarText[0].textContent = "Home";
    menuBarText[1].textContent = "Services";
    menuBarText[2].textContent = "About Us";
    menuBarText[3].textContent = "Contact Us";
    shipText.textContent = "20 years of reliable and safe delivery.";
    shipButton.textContent = "Read More";
    servicesHeaderText.textContent = "Services";
    servicesText.textContent =
      "Globally known for our ability to handle every last detail of our customers’ particular logistics and forwarding needs, Mayak Cargo takes care of all your logistics.";
    // -----------------card1------------
    card1Header.textContent = "Multimodal Transportation";
    card1Button.textContent = "Read More";
    multimodalHeader.textContent = "Multimodal Transportation";
    multimodalText1.textContent =
      "Container transportation is one of the most favorable types of freight used in transcontinental communications. Mixed or, in other words, multimodal transportation through containers is considered to be more effective as it reduces costs associated with shipping, storing and unloading. Container shipping by sea is a significant part of cargo transportation by importing and exporting countries, and this type of transport is irreplaceable in the delivery of goods to Southeast Asia and America and to other continents.";
    multimodalText2.textContent =
      "Mayak Cargo company carries out multimodal cargo transportation in containers, passing any ports around the world, combining sea and land transportation. We offer competitive rates for shipments between 20 and 40 feet of containers from any country during the shipping process. The mechanism of interaction in the seaports of the Baltic Sea, Mediterranean, Black Sea, Caspian Sea and Persian Gulf has been established. Among the regular partners of our company are leading companies such as maritime container carriers Hanijin Shipping Co. LTD, China Shipping Container Lines Co. LTD, Hyundai Shipping LTD, U.F.E Shiping LTD, Maersk LineLTD, MSC, EvergreenLTD.";
    multimodalText3.textContent =
      "Mayak Cargo provides delivery of goods in containers using the principle 'From door to door'. Implementation of international transportation under this scheme frees you from all the problems associated with the organization of transportation, coordination of the transportation process participants, customs and port procedures.";
    multimodalH4.textContent =
      "We undertake all obligations to carry out international transportation";
    multimodalServices.textContent = "Services :";
    multimodalServices1.textContent = "Delivery of container for loading";
    multimodalServices2.textContent =
      "Arrangement of all ports and customs procedures at the ports, clearance of customs and shipping documents";
    multimodalServices3.textContent = "Organization of maritime transportation";
    multimodalServices4.textContent =
      "Delivery and transportation of container for unloading";
    multimodalServices5.textContent = "Return of empty container to port";
    multimodalShipContainer.textContent =
      "Advantages of marine container transportation:";
    multimodalShipContainer1.textContent = "Low cost of transportation";
    multimodalShipContainer2.textContent =
      "The ability to transport significant consignments";
    multimodalShipElement.textContent =
      "Disadvantages of marine container transportation:";
    multimodalShipElement1.textContent =
      "The speed of transportation is limited, the need to adhere to the schedule of ships leaving the port";
    multimodalShipElement2.textContent =
      "Limited types of containers for the transport of goods";
    multimodalShipElement3.textContent =
      "Dependence on weather conditions, port capacity";
    // -----------------card2------------
    card2Button.textContent = "Read More";
    card2Header.textContent = "Groupage Cargo";
    bulkLoadsHeader.textContent = "GROUPAGE CARGO";
    bulkLoadsText1.textContent =
      "Very often, transportation of groupage cargo is the best option for regular deliveries of small loads and consignments. This solution is also optimal for a single shipment of a small consignment. It is usually required to transport such goods to owners of small and medium-sized businesses who buy goods abroad in small quantities. Using a separate vehicle to transport such goods is not advisable. In such cases, two or more loads are loaded into one vehicle or container. Such transportation is called the national team, and the transported goods are called national teams, or as they are also called groupage. When transporting groupage cargoes, mainly automobile transport and container transport are effectively used.";
    bulkLoadsText2.textContent =
      "Mayak Cargo organizes the delivery of groupage cargoes through consolidation in transit warehouses and then forwarding to the destination. We have transit warehouses equipped with the most modern equipment for warehousing and dispatch of groupage cargoes in such European countries as Germany, Poland, Czech Republic, Turkey. Such a transportation system can significantly save on the delivery of small loads and optimize the movement of freight vehicles. The transportation of groupage cargo from Europe is fairly well-established, since the warehouse infrastructure is highly developed there and there are no barriers to the quick customs clearance of cargo. As for the countries of the former Union, where the warehouse infrastructure and the structure of fast passing customs clearance of goods are not yet well developed, we also regularly collect groupage cargoes using the principle of sending freight transport from each consignor to another. For this, certain drivers who have received special training for the correct distribution of individual groupage cargoes in the car are used so that one type of cargo does not damage the other and does not mix with it, as well as the reception and delivery of each groupage cargo according to the number of shipping places. In Russia, we often collect such cargoes in Moscow and the Moscow Region and throughout Russia as a whole.";
    bulkLoadsText3.textContent =
      "Entrust your Mayak Cargo and we will not deceive your hopes!";
    // -----------------card3------------
    card3Header.textContent = "Air Transportation";
    card3Button.textContent = "Read More";
    airLoadsHeader.textContent = "AIR TRANSPORTATION";
    airLoadsText1.textContent =
      "Our company specialists carry out the export of your export or import cargo from the country and vice versa - to the destination country with high quality and minimal costs. Our representatives can accept your luggage directly at your warehouse, as well as at international airports of various countries. If necessary, we can also compile all customs and shipping documents.";
    airLoadsH4.textContent =
      "Advantages and disadvantages of air transportation";
    airAviaLoads.textContent = "Advantages of air transportation :";
    airAviaLoads1.textContent = "High speed of delivery";
    airAviaLoads2.textContent = "High speed of reliability and safety";
    airAviaLoads3.textContent = "Low cost of transportation of small goods";
    airAviaLoads4.textContent =
      "The ability to deliver goods to places that cannot be reached by other means of transport";
    airAviaElement.textContent = "The disadvantages of air transportation :";
    airAviaElement1.textContent =
      "Prohibitions on transportation of dangerous goods";
    airAviaElement2.textContent = "Limitations on load handling";
    // -----------------card4------------
    card4Header.textContent = "Car Transportation";
    card4Button.textContent = "Read More";
    carCarriageHeader.textContent = "CAR TRANSPORTATION";
    carCarriageText1.textContent =
      "Road transport is one of the most popular and convenient ways to deliver goods in international traffic. Trucking is most suitable for working with countries in Europe, the CIS and the Middle East.";
    carCarriageText2.textContent =
      "Road transport is more controlled and universal, so with the help of road transport, it is possible to transport dangerous and oversized cargo, cargo requiring compliance with the temperature regime.";
    carCarriage1H4.textContent =
      "Mayak Cargo organizes the transportation of all types of goods by road";
    carCarriageLoads1.textContent = "Groupage cargo transportation";
    carCarriageLoads2.textContent = "Dangerous goods transport";
    carCarriageLoads3.textContent = "Oversized cargo transportation";
    carCarriageLoads4.textContent = "Container Shipping";
    carCarriageText3.textContent =
      "Throughout the trucking process, Mayak Cargo employees will monitor the movement of goods, thereby ensuring safety, timeliness and speed of transportation. Our customers can always get full information about the whereabouts of the goods on the planned dates of loading, sending and arriving at their destination. The company's specialists will independently draw up the optimal transportation routes, help with obtaining the necessary permits in case of transportation of oversized and heavy cargoes, and advise on the required documentation, customs bills and insurance. We provide a full range of services related to road transport and give our customers the opportunity to continue their business calmly, without worrying about the fate of the shipped goods.";
    carCarriage2H4.textContent =
      "Advantages and disadvantages of road transport";
    carCarriage1B.textContent = "The advantages of trucking :";
    carCarriage1B1.textContent =
      "The ability to deliver goods from the shipper to the recipient without reloading";
    carCarriage1B2.textContent = "High level of cargo protection";
    carCarriage1B3.textContent =
      "Consolidation of cargo and shipment of small batches";
    carCarriage1B4.textContent =
      "Lack of dependence on railway, sea and river ports";
    carCarriage2B.textContent = "Disadvantages of transportation :";
    carCarriage2B1.textContent =
      "Restrictions on the transportation of large lots of goods over long distances";
    carCarriage2B2.textContent =
      "Road network dependency (for transcontinental freight)";
    carCarriage2B3.textContent =
      "Expensive transportation when traveling over long distances";
    // -----------------card5------------
    card5Header.textContent = "Rail Transportation";
    card5Button.textContent = "Read More";
    railwayHeader.textContent = "RAIL TRANSPORTATION";
    railwayText1.textContent =
      "Rail transportation is an optimal way to deliver goods at any distance. First of all, attractive is a large carrying capacity, the ability to deliver items with different parameters, requiring various loading technologies. Goods that are considered oversized in road transport, require long-term approvals and special vehicles, can easily be placed on trains, and they are processed quickly and easily. And, of course, an important factor contributing to the popularity of the transportation of goods by rail is its economy, the ability to avoid unnecessary costs.";
    railwayText2.textContent =
      "Mayak Cargo offers, among other types of delivery, a request for rail transportation. Specialists working in this transport sector will provide you with detailed information on how to transport your carriage, a list of necessary documents, customs clearance, as well as help you choose the right insurance and take into account your wishes and suggestions for future work.";
    railwayText3.textContent =
      "Mayak Cargo offers freight forwarding services for the import, export and transit of railway cargo between Azerbaijan, the CIS, Eastern Europe and China. Our company has an extensive network of partners and the quality of rail transportation is always at a high level.";
    railwayH4.textContent = "Our advantages in the field of freight forwarding";
    railwayB.textContent = "Advantages of railway transportation :";
    railwayB1.textContent = "Competitive prices";
    railwayB2.textContent = "Timely provision of wagons for loading";
    railwayB3.textContent =
      "Receiving shipping codes for all routes, sending telegrams to the destination station and the railway office";
    // -----------------card6------------
    card6Header.textContent = "Transportation Of Dangerous Goods";
    card6Button.textContent = "Read More";
    dangerousHeader.textContent =
      "TRANSPORTATION OF NON-LETHAL AND DANGEROUS GOODS";
    dangerousText1.textContent =
      "Loads exceeding the standard dimensions of trucks (2.45 - width, 13.6 - length, 3.1 m - height) and weighing over 24 tons are called oversized. Oversized cargo transportation requires special equipment as well as obtaining approvals for oversized cargo transportation along the entire route. For such transportations, as a rule, the route is carefully selected, taking into account the height and width of bridges and fences, the national rules for the transportation of oversized cargo in transit countries.";
    dangerousText2.textContent =
      "In some countries, depending on the dimensions of the cargo transported, not only coordination with road services is required, but also escort of road trains with escort vehicles (police, road services, etc.). Oversized cargo is transported by road using special low loaders - platforms, and oversized cargo is often transported by rail and sea or using the so-called multimodal transport, when one or more types of transport are used during transportation (for example: road and sea, road and rail transport).";
    dangerousText3.textContent =
      "Dangerous goods, according to the standard classification, include goods that have properties that can, under certain conditions, harm the environment, people, and property. The category “Dangerous goods” in the standard classification is divided into several classes. The transportation of such goods is carried out in accordance with international treaties, specially equipped vehicles with the appropriate approval are used, and the drivers involved in the transportation undergo special training and have the appropriate certificate. In addition, there are packaging and labeling requirements for dangerous goods.";
    bmtText.textContent =
      "UNO identifies the following 9 hazard classes of transported goods :";
    bmtText1.textContent = "Class 1 – explosive materials and objects";
    bmtText2.textContent =
      "Class 2 – compressed, liquefied and dissolved under pressure gases";
    bmtText3.textContent = "Class 3 – flammable liquids";
    bmtText4.textContent =
      "Class 4 – substances and materials that burn quickly";
    bmtText5.textContent =
      "Class 5 – oxidizing substances and organic peroxides";
    bmtText6.textContent = "Class 6 – toxic substances and infectious agents";
    bmtText7.textContent = "Class 7 – radioactive materials";
    bmtText8.textContent = "Class 8 – corrosion substances";
    bmtText9.textContent = "Class 9 – other hazardous substances";
    dangerousText4.textContent =
      "Mayak Cargo is successfully delivering all types of cargo, including large-size and all-purpose hazardous goods. We carry almost all hazardous goods, except explosives and radioactive substances. Our company performs all shipping operations with appropriate packaging and packaging in accordance with international standards. Our specialists will help you overcome all the formal obstacles.";
    lastText.textContent =
      "Mayak Cargo will oversee the shipping documents, the proper registration of contracts, and all shipping regulations.";
    // -----------------about-us-----------------
    aboutUsHeader.textContent = "ABOUT US";
    aboutUsHeaderText.textContent = "Reliable and secure delivery service.";
    aboutUsText.textContent =
      "Mayak Cargo International Shipping Company offers you full range of freight services. Our company is engaged in the transportation of goods from China XR to Azerbaijan, the Russian Federation, Iran IR, and Iraq. Mayak Cargo delivers a wide range of goods from the sender to the recipient, from textile to plastic, machine tools to aircraft parts and electronic goods. Our 20 years of experience enables us to carry standard, high-priced, high-weight, heavy-duty, dangerous, and most sensitive cargo. Cargo is shipped in the shortest possible time on the basis of reliable conditions, high quality and affordable prices. Our strong relationships with international freight, railway and trans companies allow us to choose the optimal transportation routes. Currently, companies with Mayak Cargo include JAVANEH CARGO bar, Hanijin Shipping Co., China Shipping Container Lines Co., Hyundai Shipping LTD, UFE Shiping LTD, Maersk Line LTD, MSC, Evergreen LTD, Mediterranean Shipping Company SA, Hapag-Lloyd , Maersk Shipping Line etc. such as companies. At the request of the client, our employees carry out all customs and documentation. The company also carries cargo transportation throughout the country.";
    // ----------------------------------
    trafficContainer.textContent =
      "Shipping service in the following directions.";
    for (let i = 0; i < chinaFlagB.length; i++) {
      chinaFlagB[i].textContent = "China";
    }
    for (let i = 0; i < chinaFlagP.length; i++) {
      chinaFlagP[i].textContent = "Ningbo";
    }
    for (let i = 0; i < iranFlagB.length; i++) {
      iranFlagB[i].textContent = "Iran";
    }
    for (let i = 0; i < iranFlagP.length; i++) {
      iranFlagP[i].textContent = "Bandar Abbas";
    }
    for (let i = 0; i < azerbaijanFlagB.length; i++) {
      azerbaijanFlagB[i].textContent = "Azerbaijan";
    }
    for (let i = 0; i < azerbaijanFlagP.length; i++) {
      azerbaijanFlagP[i].textContent = "Baku Silk Road Terminal";
    }
    for (let i = 0; i < kazakhstanFlagB.length; i++) {
      kazakhstanFlagB[i].textContent = "Kazakhstan";
    }
    for (let i = 0; i < kazakhstanFlagP.length; i++) {
      kazakhstanFlagP[i].textContent = "Almaty";
    }
    for (let i = 0; i < russianFlagB.length; i++) {
      russianFlagB[i].textContent = "Russia";
    }
    for (let i = 0; i < russianFlagP.length; i++) {
      russianFlagP[i].textContent = "Moscow";
    }
    georgiaFlagB.textContent = "Georgia";
    georgiaFlagP.textContent = "Poti";
    turkeyFlagB.textContent = "Turkey";
    turkeyFlagP.textContent = "Istanbul";
    irakFlagB.textContent = "Iraq";
    irakFlagP.textContent = "Erbil";
    moreButton.textContent = "More";
    lessButton.textContent = "Less";
    // ------------contact-------------
    for (let i = 0; i < contactButton.length; i++) {
      contactButton[i].textContent = "Contact Us";
    }
    contactHeader.textContent = "CONTACT US";
    contactText.textContent = "You can contact us very easily.";
    azerbaijanText.textContent = "Azerbaijan";
    azerbaijanOffice.textContent = "Azerbaijan, Baku office";
    azerbaijanAddress.textContent = "Address: Baku-Lokbatan road, Sadarak SC";
    russianText.textContent = "Russia";
    russianOffice.textContent = "Russia, Moscow office";
    russianAddress.textContent =
      "Address: Rostov-on-Don, Aksai district, st. Industrialnaya 11, TC Atlant";
    iranText.textContent = "Iran";
    iranOffice1.textContent = "Iran, Tehran office";
    iranAddress1.textContent =
      "Address: Unit 603, 6th Floor, Amir Building, North Amir Abad";
    iranOffice2.textContent = "İran, Bandar Abbas office";
    iranAddress2.textContent =
      "o. 104, First Floor, Parto Building, Zeiton Crossing";
    georgiaText.textContent = "Georgia";
    georgiaOffice.textContent = "Georgia, Poti office";
    georgiaAddress.textContent = "Address: Erekle meore str. 30/28, Poti 4400";
    chinaText.textContent = "China";
    chinaOffice.textContent = "China, Yiwu office";
    chinaAddress.textContent =
      "Address: Warehouse 376, Floor 3, District A, Yiwu port";
    turkeyText.textContent = "Turkey";
    turkeyOffice.textContent = "Turkey, Istanbul office";
    turkeyAddress.textContent =
      "Address: Aksaray Mah. Little Langa Street. European Market No:79 - Warehouse: 30/A Aksaray - IST";
    iraqText.textContent = "Iraq";
    iraqOffice.textContent = "Iraq, Erbil Office";
    iraqAddress.textContent = "Address: Nishtiman Market No:762";
    // ----------------------------------
  } else if (lang === "RU") {
    menuText[0].textContent = "Главная";
    menuText[1].textContent = "Услуги";
    menuText[2].textContent = "О Компании";
    menuText[3].textContent = "Контакт";
    menuBarText[0].textContent = "Главная";
    menuBarText[1].textContent = "Услуги";
    menuBarText[2].textContent = "О Компании";
    menuBarText[3].textContent = "Контакт";
    shipText.textContent = "20 лет надежной и безопасной доставки.";
    shipButton.textContent = "Подробнее";
    servicesHeaderText.textContent = "Услуги";
    servicesText.textContent =
      "Компания Mayak Cargo известна во всем мире благодаря нашей способности обрабатывать все до мелочей конкретные потребности наших клиентов в логистике и экспедиторских услугах.";
    // -----------------card1------------
    card1Header.textContent = "Мультимодальные Перевозки";
    card1Button.textContent = "Подробнее";
    multimodalHeader.textContent = "Мультимодальные Перевозки";
    multimodalText1.textContent =
      "Контейнерные перевозки один из наиболее экономичных видов транспортировки грузов, используемых в трансконтинентальном сообщении. Применение контейнеров повышает эффективность смешанных или, так называемых, мультимодальных перевозок, так как позволяют снизить затраты связанные с перевозкой, хранением и перевалкой грузов. Контейнерные перевозки морским транспортом обеспечивают значительную часть грузооборота стран импортеров и экспортеров и являются незаменимыми при доставке грузов в страны или из стран Юго –Восточной Азии и Америки на другие континенты.";
    multimodalText2.textContent =
      "Mayak Cargo осуществляет мультимодальные грузоперевозки в контейнерах, проходя через любые порты мира, совмещая морские и наземные перевозки. Мы предлагаем конкурентоспособные цены на перевозки от 20 до 40 футов контейнеров из любой страны в процессе доставки. Создан механизм взаимодействия в морских портах Балтийского, Средиземного, Черноморского, Каспийского и Персидского заливов. Среди постоянных партнеров нашей компании такие ведущие компании, как морские контейнерные перевозчики Hanijin Shipping Co. LTD, China Shipping Container Lines Co. LTD, Hyundai Shipping LTD, U.F.E Shiping LTD, Maersk LineLTD, MSC, EvergreenLTD.";
    multimodalText3.textContent =
      "Mayak Cargo осуществляет доставку грузов в контейнерах по 'От двери до двери'. Выполнение международной перевозки по такой схеме избавляет Вас от всех проблем, связанных с организацией перевозки, координированием участников транспортного процесса, организацией таможенных и портовых процедур.";
    multimodalH4.textContent =
      "Мы берем на себя все обязательства по осуществлению международной перевозки";
    multimodalServices.textContent = "Услуги :";
    multimodalServices1.textContent = "Подачу контейнера под загрузку";
    multimodalServices2.textContent =
      "Организацию всех портовых и таможенных процедур в портах, оформление таможенных и товаросопроводительных документов";
    multimodalServices3.textContent = "Организацию морской перевозки";
    multimodalServices4.textContent =
      "Подачу и перевозку контейнера под выгрузку";
    multimodalServices5.textContent = "Возврат пустого контейнера в порт";
    multimodalShipContainer.textContent =
      "Преимущества морских контейнерных перевозок :";
    multimodalShipContainer1.textContent = "Низкая стоимость перевозки";
    multimodalShipContainer2.textContent =
      "Возможность перевозки значительных партий грузов";
    multimodalShipElement.textContent =
      "Недостатки морских контейнерных перевозок :";
    multimodalShipElement1.textContent =
      "Скорость перевозки ограничена, необходимость придерживаться графика выхода судов из порта";
    multimodalShipElement2.textContent =
      "Ограниченность типов контейнеров для перевозки грузов";
    multimodalShipElement3.textContent =
      "Зависимость от погодных условий, пропускной способности портов";
    // -----------------card2------------
    card2Button.textContent = "Подробнее";
    card2Header.textContent = "Перевозка сборных грузов";
    bulkLoadsHeader.textContent = "ПЕРЕВОЗКА СБОРНЫХ ГРУЗОВ";
    bulkLoadsText1.textContent =
      "Очень часто перевозка сборного груза является оптимальным вариантом регулярных доставок небольших грузов и партий товара. Данное решение также оптимально и при разовой отправке мелкой партии груза. Перевозить такие грузы, как правило, требуется владельцам малого и среднего бизнеса, которые закупают за границей товар небольшими партиями. Использование отдельного транспортного средства для перевозки таких грузов не целесообразно. В таких случаях в одно транспортное средство или контейнер загружается два и более груза. Такая перевозка называется сборной, а перевозимые грузы – сборными или как еще их называют-группажными. При перевозке сборных грузов эффективно применяются в основном автомобильный транспорт а также перевозка в контейнерах.";
    bulkLoadsText2.textContent =
      "Mayak Cargo организует доставку сборных грузов через консолидацию в транзитных складах и затем отправку до пункта назначения.Мы имеем транзитные склады оборудованные самым современным оборудованием для складирования и отправки сборных грузов в таких странах Европы как Германия, Польша, Чехия, Турция. Такая система перевозки позволяет существенно экономить при доставке небольших грузов и оптимизировать движение грузового транспорта. Перевозка сборных грузов из Европы достаточно отлажена так как там сильно развита складская инфраструктура и нет преград для быстрого таможенного оформления груза. Что касается стран бывшего Союза где еще не сильна развита складская инфраструктура и структура быстрого попутного таможенного оформления грузов мы также регулярно собираем сборные грузы используя принцип отправки грузового транспорта от каждого отправителя к другому. Для этого используются определенные водители прошедшие специальный инструктаж на предмет правильного распределения отдельных сборных грузов в машине так чтобы один вид груза не повредил другой и не смешивался бы с ним, а также приема и сдачи каждого сборного груза по количеству отгрузочных мест. В России особенно часто мы собираем такие грузы по Москве и Московской области и по всей России в целом.";
    bulkLoadsText3.textContent =
      "Доверьте свой груз Mayak Cargo и мы не обманем ваши надежды!";
    // -----------------card3------------
    card3Header.textContent = "Воздушные Авиаперевозки";
    card3Button.textContent = "Подробнее";
    airLoadsHeader.textContent = "ВОЗДУШНЫЕ АВИАПЕРЕВОЗКИ";
    airLoadsText1.textContent =
      "Специалисты нашей компании осуществляют вывоз вашего экспортного или импортного груза из страны и наоборот - в страну назначения с высоким качеством и минимальными затратами. Наши представители могут принять ваш багаж непосредственно на вашем складе, а также в международных аэропортах разных стран. При необходимости мы также можем составить все таможенные и товаросопроводительные документы.";
    airLoadsH4.textContent = "Преимущества и недостатки авиаперевозок";
    airAviaLoads.textContent = "Преимущества авиаперевозок :";
    airAviaLoads1.textContent = "Высокая скорость доставки";
    airAviaLoads2.textContent = "Высокая скорость надежности и безопасности";
    airAviaLoads3.textContent = "Низкая стоимость перевозки небольших грузов";
    airAviaLoads4.textContent =
      "Способность доставить товар туда, куда не добраться другим видом транспорта";
    airAviaElement.textContent = "Недостатки авиаперевозок :";
    airAviaElement1.textContent =
      "Опасные грузы могут быть запрещены к перевозке";
    airAviaElement2.textContent = "Ограничения по габаритам грузов";
    // -----------------card4------------
    card4Header.textContent = "Автомобильные Перевозки";
    card4Button.textContent = "Подробнее";
    carCarriageHeader.textContent = "АВТОМОБИЛЬНЫЕ ПЕРЕВОЗКИ";
    carCarriageText1.textContent =
      "Автомобильные перевозки один из наиболее востребованных и удобных способов доставки грузов в международном сообщении. Автоперевозки наиболее подходят для работы со странами Европы, СНГ и ближнего Востока.";
    carCarriageText2.textContent =
      "Автомобильные перевозки являются более контролируемыми и универсальными,так с помощью автотранспорта, возможно перевозить опасные и негабаритные грузы, грузы требующие соблюдения температурного режима.";
    carCarriage1H4.textContent =
      "Mayak Cargo организует перевозку всех видов грузов на автомобильном транспорте";
    carCarriageLoads1.textContent = "Перевозки сборных грузов";
    carCarriageLoads2.textContent = "Перевозки опасных грузов";
    carCarriageLoads3.textContent = "Перевозки негабаритных грузов";
    carCarriageLoads4.textContent = "Контейнерные перевозки";
    carCarriageText3.textContent =
      "На протяжении всего процесса автоперевозки сотрудники Mayak Cargo проконтролируют передвижение груза, обеспечивая этим безопасность, своевременность и оперативность перевозок. Наши заказчики всегда могут получить полную информацию о местонахождении груза о планируемых датах загрузки, отправки и прибытия в пункт назначения. Специалисты компании самостоятельно составят оптимальные маршруты перевозок, помогут с получением необходимых разрешений в случае транспортировки негабаритных и тяжеловесных грузов, проконсультируют относительно требующейся документации, таможенных накладных и страхования. Мы предоставляем полный спектр услуг, связанных с автомобильными перевозками и даем своим клиентам возможность спокойно продолжать дела, не беспокоясь о судьбе отправленных грузов.";
    carCarriage2H4.textContent = "Преимущества и недостатки автоперевозок";
    carCarriage1B.textContent = "Преимущества автоперевозок :";
    carCarriage1B1.textContent =
      "Возможность доставки грузов от грузоотправителя до получателя без перегрузки";
    carCarriage1B2.textContent = "Обеспечение высокой сохранности груза";
    carCarriage1B3.textContent =
      "Возможна консолидация грузов и перевозки незначительных партий";
    carCarriage1B4.textContent =
      "Независимость от железнодорожных путей, морских и речных портов";
    carCarriage2B.textContent = "Недостатки автоперевозок :";
    carCarriage2B1.textContent =
      "Ограниченность использования на большие расстояния при перевозке значительных партий грузов";
    carCarriage2B2.textContent =
      "Зависимость от дорожной сети (для трансконтинентальных грузов)";
    carCarriage2B3.textContent =
      "Дорогой вид транспорта при перевозках на большие расстояния";
    // -----------------card5------------
    card5Header.textContent = "Железнодорожные Перевозки";
    card5Button.textContent = "Подробнее";
    railwayHeader.textContent = "ЖЕЛЕЗНОДОРОЖНЫЕ ПЕРЕВОЗКИ";
    railwayText1.textContent =
      "Железнодорожные перевозки оптимально удобный способ доставки товаров на любые расстояния. Привлекательна в первую очередь большая грузоподъемность, возможность доставки предметов, обладающих разными параметрами, требующих различных технологий загрузки. Товары, которые при автомобильной перевозке считаются негабаритом, нуждаются в длительных согласованиях и привлечении особых машин, без труда помещаются в поездах, оформляются достаточно быстро и просто. И, конечно, немаловажным фактором, способствующим популярности транспортировки грузов железными дорогами, является ее экономичность, возможность избежать лишних затрат.";
    railwayText2.textContent =
      "Mayak Cargo предлагает, помимо других видов доставки, оформить заявку на железнодорожные перевозки. Специалисты, работающие в этом секторе транспорта, предоставят вам подробную информацию о том, как перевозить вашу перевозку, список необходимых документов, таможенное оформление, а также помогут вам выбрать правильную страховку и учтут ваши пожелания и предложения для будущей работы.";
    railwayText3.textContent =
      "Mayak Cargo предлагает экспедиторские услуги по импорту, экспорту и транзиту железнодорожных грузов между Азербайджаном, СНГ, Восточной Европой и Китаем. Наша компания имеет разветвленную сеть партнеров и качество железнодорожных перевозок всегда на высоком уровне.";
    railwayH4.textContent = "Наши преимущества в области экспедирования грузов";
    railwayB.textContent = "Преимущества железнодорожного транспорта :";
    railwayB1.textContent = "Конкурентоспособные цены";
    railwayB2.textContent = "Своевременное предоставление вагонов под погрузку";
    railwayB3.textContent =
      "Получение кодов доставки для всех маршрутов, отправка телеграмм на станцию назначения и в железнодорожный офис";
    // -----------------card6------------
    card6Header.textContent = "Перевозка Опасных Грузов";
    card6Button.textContent = "Подробнее";
    dangerousHeader.textContent = "ПЕРЕВОЗКА НЕГАБАРИТНЫХ И ОПАСНЫХ ГРУЗОВ";
    dangerousText1.textContent =
      "Грузы превышающие стандартные размеры грузовой техники (2,45 – ширина, 13,6 - длина ,3,1 м - высота) и весом свыше 24 тонн называются негабаритними. Перевозка негабаритных грузов требует специальной техники а также получения согласований на перевозку негабаритного груза по всему маршруту следования. Для таких перевозок, как правило, тщательно выбирается маршрут, учитывая высоту и ширину мостов и ограждений, национальные правила перевозки негабаритных грузов в странах транзита.";
    dangerousText2.textContent =
      "В некоторых странах, в зависимости от габаритов перевозимого груза, требуется не только согласование с дорожными службами, но и сопровождение автопоездов машинами сопровождения (полиция, дорожные службы и т.д.). Для перевозки негабаритных грузов автомобильным транспортом применяются специальные низкорамные прицепы – платформы, также негабаритные грузы часто перевозятся железнодорожным и морским транспортом либо с помощью, так называемых мультимодальных перевозок, когда в процессе перевозки используется один или несколько видов транспорта (к примеру: автомобильный и морской, автомобильный и железнодорожный транспорт).";
    dangerousText3.textContent =
      "К опасным грузам, согласно типовой классификации, относятся грузы, обладающие свойствами, могущими при определенных условиях нанести вред окружающей среде, людям, а также материальному имуществу. Категория «Опасный груз» в типовой классификации разделена на несколько классов. Перевозки таких грузов выполняются в соответствии с международными договорами, применяются специально оборудованные транспортные средства имеющие соответствующий допуск, а привлекаемые к перевозке водители проходят специальную подготовку и имеют соответствующее свидетельство. Кроме того для опасных грузов существуют требования по упаковке и маркировке.";
    bmtText.textContent =
      "ООН выделяет следующие 9 классов опасности перевозимого груза :";
    bmtText1.textContent = "1 класс – взрывчатые материалы и предметы";
    bmtText2.textContent =
      "2 класс – сжатые, сжиженные и растворенные под давлением газы";
    bmtText3.textContent = "3 класс – легковоспламеняющиеся жидкости";
    bmtText4.textContent =
      "4 класс – легковоспламеняющиеся вещества и материалы";
    bmtText5.textContent =
      "5 класс – окисляющие вещества и органические пероксиды";
    bmtText6.textContent =
      "class='lg'>6 класс – ядовитые и инфекционные вещества";
    bmtText7.textContent = "7 класс – радиоактивные материалы";
    bmtText8.textContent = "8 класс – коррозирующие вещества";
    bmtText9.textContent = "9 класс – прочие опасные вещества";
    dangerousText4.textContent =
      "Компания Mayak Cargo успешно доставит в указанное место грузы любых размеров, в том числе и крупногабаритных а также опасных грузов любой классификации.";
    lastText.textContent =
      "Мы перевозим опасные грузы практически всех категорий, исключая взрывчатые и радиоактивные. Все операции по перевозке грузов мы осуществляем в соответствии требований международных стандартов, перевозки осуществляются с соответствующий упаковкой и тарой. Наши специалисты помогут преодолеть все формальные препятствия, мы проследим за сопроводительной документацией, правильным оформлением договоров и всех правил перевозки.";
    // -----------------about-us-----------------
    aboutUsHeader.textContent = "О КОМПАНИИ";
    aboutUsHeaderText.textContent = "Надежный и безопасный сервис доставки";
    aboutUsText.textContent =
      "Mayak Cargo Международная Судоходная Компания предлагает вам полный спектр грузовых услуг. Наша компания занимается перевозками грузов из Китая XR в Азербайджан, Российскую Федерацию, Иран IR и Ирак. Mayak Cargo поставляет широкий ассортимент товаров от отправителя до получателя, от текстиля до пластика, станков, деталей для самолетов и электронных товаров. Наш 20-летний опыт позволяет нам перевозить стандартные, дорогостоящие, тяжелые, тяжелые, опасные и самые чувствительные грузы. Груз доставляется в кратчайшие сроки на основе надежных условий, высокого качества и доступных цен. Наши прочные отношения с международными грузовыми, железнодорожными и транс-компаниями позволяют нам выбирать оптимальные транспортные маршруты. В настоящее время компании с Mayak Cargo включают в себя JAVANEH CARGO bar, Hanijin Shipping Co., Китайские судоходные контейнерные линии, Hyundai Shipping LTD, UFE Shiping LTD, Maersk Line LTD, MSC, Evergreen LTD, Средиземноморское пароходство SA, Hapag-Lloyd, Maersk Судоходная линия и т. Д., Такие как компании. По желанию клиента наши сотрудники выполняют все таможенные и документы. Компания также осуществляет грузоперевозки по всей стране.";
    // ----------------------------------
    trafficContainer.textContent = "Служба доставки по следующим направлениям.";
    for (let i = 0; chinaFlagB.length > i; i++) {
      chinaFlagB[i].textContent = "Китай";
    }
    for (let i = 0; chinaFlagP.length > i; i++) {
      chinaFlagP[i].textContent = "Нинбо";
    }
    for (let i = 0; iranFlagB.length > i; i++) {
      iranFlagB[i].textContent = "Иран";
    }
    for (let i = 0; iranFlagP.length > i; i++) {
      iranFlagP[i].textContent = "Бендер-Аббас";
    }
    for (let i = 0; azerbaijanFlagB.length > i; i++) {
      azerbaijanFlagB[i].textContent = "Азербайджан";
    }
    for (let i = 0; azerbaijanFlagP.length > i; i++) {
      azerbaijanFlagP[i].textContent = "Бакинский Шелковый Путь Терминал";
    }
    for (let i = 0; kazakhstanFlagB.length > i; i++) {
      kazakhstanFlagB[i].textContent = "Казахстан";
    }
    for (let i = 0; kazakhstanFlagP.length > i; i++) {
      kazakhstanFlagP[i].textContent = "Алма-Ата";
    }
    for (let i = 0; russianFlagB.length > i; i++) {
      russianFlagB[i].textContent = "Россия";
    }
    for (let i = 0; russianFlagP.length > i; i++) {
      russianFlagP[i].textContent = "Москва";
    }
    georgiaFlagB.textContent = "Грузия";
    georgiaFlagP.textContent = "Поти";
    turkeyFlagB.textContent = "Турция";
    turkeyFlagP.textContent = "Стамбул";
    irakFlagB.textContent = "Ирак";
    irakFlagP.textContent = "Эрбиль";
    moreButton.textContent = "Подробнее";
    lessButton.textContent = "Скрыть";
    // ------------contact-------------
    for (let i = 0; i < contactButton.length; i++) {
      contactButton[i].textContent = "КОНТАКТЫ";
    }
    contactHeader.textContent = "КОНТАКТЫ";
    contactText.textContent = "Вы можете связаться с нами очень легко.";
    azerbaijanText.textContent = "Азербайджан";
    azerbaijanOffice.textContent = "Азербайджан, Бакинский офис";
    azerbaijanAddress.textContent = "Адрес: дорога Баку-Локбатан, ТЦ Садарак";
    russianText.textContent = "Россия";
    russianOffice.textContent = "Россия, Московский офис";
    russianAddress.textContent =
      "Адрес: Ростов на Дону, Аксайский район, ул. Индустриальная 11, ТК Атлант";
    iranText.textContent = "Иран";
    iranOffice1.textContent = "Иран, офис в Тегеране";
    iranAddress1.textContent =
      "Адрес: Квартира 603, 6-й этаж, здание Амира, Северный Амир-Абад";
    iranOffice2.textContent = "Иран, офис в Бандар-Аббасе";
    iranAddress2.textContent =
      "Адрес: о. 104, первый этаж, здание Парто, пересечение Зейтон";
    georgiaText.textContent = "Грузия";
    georgiaOffice.textContent = "Грузия, офис в Поти";
    georgiaAddress.textContent = "Адрес: ул. Эрекле Меоре 30/28, Поти 4400";
    chinaText.textContent = "Китай";
    chinaOffice.textContent = "Китай, офис Иву";
    chinaAddress.textContent = "Адрес: Склад 376, этаж 3, район А, порт Иу.";
    turkeyText.textContent = "Турция";
    turkeyOffice.textContent = "Турция, офис в Стамбуле";
    turkeyAddress.textContent =
      "Адрес: Аксарай Мах. Маленькая улица Ланга. Европейский рынок №:79 - Склад: Аксарай, 30/А - IST";
    iraqText.textContent = "Ирак";
    iraqOffice.textContent = "Ирак, офис в Эрбиле";
    iraqAddress.textContent = "Адрес: Рынок Ништиман №:762";
    // ----------------------------------
  }
}
// ---------------------------hamburger------------------------------
const menuBar = document.querySelector(".menu-container");
menuBar.style.top = "-5500px";
document.querySelector(".hamburger-element").addEventListener("click", () => {
  document.querySelector(".menu-container").classList.toggle("active");
  if (document.querySelector(".menu-container").style.top === "-5500px") {
    document.querySelector(".menu-container").style.top = "0px";
  } else {
    document.querySelector(".menu-container").style.top = "-5500px";
  }
});
document.querySelector(".x-icon").addEventListener("click", () => {
  document.querySelector(".menu-container").classList.toggle("active");
  if (document.querySelector(".menu-container").style.top === "-5500px") {
    document.querySelector(".menu-container").style.top = "0px";
  } else {
    document.querySelector(".menu-container").style.top = "-5500px";
  }
});
document.querySelectorAll(".menuBar-text").forEach((text) => {
  text.addEventListener("click", () => {
    document.querySelector(".menu-container").classList.toggle("active");
    if (document.querySelector(".menu-container").style.top === "-5500px") {
      document.querySelector(".menu-container").style.top = "0px";
    } else {
      document.querySelector(".menu-container").style.top = "-5500px";
    }
  });
});
// --------------------------more-button------------------------
lessButton.style.display = "none";
let activeElement = document.querySelectorAll(".active-elements");

moreButton.addEventListener("click", () => {
  for (let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle("active-elements");
  }
  lessButton.style.display = "block";
  moreButton.style.display = "none";
});
lessButton.addEventListener("click", () => {
  for (let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle("active-elements");
  }
  lessButton.style.display = "none";
  moreButton.style.display = "block";
});
// --------------------------services----------------------------
let modals = document.querySelectorAll(".modals");
for (let i = 0; i < modals.length; i++) {
  modals[i].style.display = "none";
}
document.querySelector(".card1-for-modal").addEventListener("click", () => {
  document.querySelector(".modal-card1").style.display = "block";
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
});
document.querySelector(".card2-for-modal").addEventListener("click", () => {
  document.querySelector(".modal-card2").style.display = "block";
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
});
document.querySelector(".card3-for-modal").addEventListener("click", () => {
  document.querySelector(".modal-card3").style.display = "block";
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
});
document.querySelector(".card4-for-modal").addEventListener("click", () => {
  document.querySelector(".modal-card4").style.display = "block";
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
});
document.querySelector(".card5-for-modal").addEventListener("click", () => {
  document.querySelector(".modal-card5").style.display = "block";
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
});
document.querySelector(".card6-for-modal").addEventListener("click", () => {
  document.querySelector(".modal-card6").style.display = "block";
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
});
let xIconForModal1 = document.querySelectorAll(".x-icon-for-modal1");
for (let i = 0; i < xIconForModal1.length; i++) {
  xIconForModal1[i].addEventListener("click", () => {
    document.querySelector(".modal-card1").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
}
let xIconForModal2 = document.querySelectorAll(".x-icon-for-modal2");
for (let i = 0; i < xIconForModal2.length; i++) {
  xIconForModal2[i].addEventListener("click", () => {
    document.querySelector(".modal-card2").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
}
let xIconForModal3 = document.querySelectorAll(".x-icon-for-modal3");
for (let i = 0; i < xIconForModal3.length; i++) {
  xIconForModal3[i].addEventListener("click", () => {
    document.querySelector(".modal-card3").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
}
let xIconForModal4 = document.querySelectorAll(".x-icon-for-modal4");
for (let i = 0; i < xIconForModal4.length; i++) {
  xIconForModal4[i].addEventListener("click", () => {
    document.querySelector(".modal-card4").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
}
let xIconForModal5 = document.querySelectorAll(".x-icon-for-modal5");
for (let i = 0; i < xIconForModal5.length; i++) {
  xIconForModal5[i].addEventListener("click", () => {
    document.querySelector(".modal-card5").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
}
let xIconForModal6 = document.querySelectorAll(".x-icon-for-modal6");
for (let i = 0; i < xIconForModal6.length; i++) {
  xIconForModal6[i].addEventListener("click", () => {
    document.querySelector(".modal-card6").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
}
