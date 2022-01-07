export default function toEnglishDigits(num:string|number):string {

    if (num === null || num === undefined) {
        return null;
    }

    if (typeof num !== 'string' || num.length===0)
        return num.toString();

    const faDigits = '۰۱۲۳۴۵۶۷۸۹';
    const arDigits = '٠١٢٣٤٥٦٧٨٩';
    let output = "";
    for (let ipos = 0; ipos < num.length; ipos++) {

        let faIndex = faDigits.indexOf(num[ipos]);
        if (faIndex >= 0) {
            output += faIndex.toString();
            continue;
        }
        let arIndex = arDigits.indexOf(num[ipos]);
        if (arIndex >= 0) {
            output += arIndex.toString();
            continue;
        }
        output += num[ipos];
    }
    return output.replace(/,/g, "");
}