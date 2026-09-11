/*
    إعدادات تطبيق ترند
*/

const APP_CONFIG = {

    name: "ترند",

    version: "1.0.0",

    apk: "apk/trend-1.0.0.apk",

    releaseDate: "11 سبتمبر 2026"

};


/*
    تحديث بيانات الصفحة
*/

document.addEventListener("DOMContentLoaded", function () {

    // رقم الإصدار في الصفحة

    const version =
        document.getElementById("version");

    if (version) {
        version.textContent =
            APP_CONFIG.version;
    }


    // رقم الإصدار في قسم التحميل

    const downloadVersion =
        document.getElementById("downloadVersion");

    if (downloadVersion) {
        downloadVersion.textContent =
            APP_CONFIG.version;
    }


    // رابط APK

    const downloadButton =
        document.getElementById("downloadButton");

    if (downloadButton) {

        downloadButton.href =
            APP_CONFIG.apk;

    }


    // السنة الحالية

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
